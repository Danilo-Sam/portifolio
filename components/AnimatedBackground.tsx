"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
};

type Pulse = {
  fromIndex: number;
  toIndex: number;
  t: number;
  speed: number;
  color: string;
};

/**
 * Background animado em canvas: uma rede de nós (estilo placa de circuito)
 * conectados por linhas, com pulsos de "dados" viajando entre eles.
 * Respeita prefers-reduced-motion (reduz drasticamente o movimento).
 */
export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let nodes: Node[] = [];
    let pulses: Pulse[] = [];
    let animationId: number;
    let lastPulseAt = 0;

    const NODE_COUNT_BASE = prefersReducedMotion ? 0 : 70;
    const CONNECT_DIST = 170;
    const SPEED = prefersReducedMotion ? 0 : 0.18;

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width;
      canvas!.height = height;
      const area = width * height;
      const count = Math.min(
        110,
        Math.max(40, Math.floor((area / 1_000_000) * NODE_COUNT_BASE))
      );
      nodes = Array.from({ length: prefersReducedMotion ? 50 : count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
      }));
      pulses = [];
    }

    function step(timestamp: number) {
      ctx!.clearRect(0, 0, width, height);

      // update node positions
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
      }

      // draw connections
      ctx!.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.22;
            ctx!.strokeStyle = `rgba(0, 245, 255, ${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        ctx!.fillStyle = "rgba(0, 245, 255, 0.55)";
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
        ctx!.fill();
      }

      // spawn a data pulse occasionally along a real edge
      if (!prefersReducedMotion && timestamp - lastPulseAt > 700 && nodes.length > 1) {
        lastPulseAt = timestamp;
        const fromIndex = Math.floor(Math.random() * nodes.length);
        let closestIndex = -1;
        let closestDist = Infinity;
        for (let j = 0; j < nodes.length; j++) {
          if (j === fromIndex) continue;
          const dx = nodes[fromIndex].x - nodes[j].x;
          const dy = nodes[fromIndex].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST && dist < closestDist && Math.random() > 0.5) {
            closestDist = dist;
            closestIndex = j;
          }
        }
        if (closestIndex !== -1) {
          pulses.push({
            fromIndex,
            toIndex: closestIndex,
            t: 0,
            speed: 0.02 + Math.random() * 0.015,
            color: Math.random() > 0.5 ? "0, 245, 255" : "255, 23, 68",
          });
        }
      }

      // draw + advance pulses
      pulses = pulses.filter((p) => p.t <= 1);
      for (const p of pulses) {
        const a = nodes[p.fromIndex];
        const b = nodes[p.toIndex];
        if (!a || !b) continue;
        const x = a.x + (b.x - a.x) * p.t;
        const y = a.y + (b.y - a.y) * p.t;
        ctx!.fillStyle = `rgba(${p.color}, 0.9)`;
        ctx!.beginPath();
        ctx!.arc(x, y, 2.4, 0, Math.PI * 2);
        ctx!.fill();
        ctx!.shadowColor = `rgba(${p.color}, 0.8)`;
        ctx!.shadowBlur = 8;
        p.t += p.speed;
      }
      ctx!.shadowBlur = 0;

      animationId = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    animationId = requestAnimationFrame(step);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
