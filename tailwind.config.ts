import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: "#0A0A0F",
          panel: "#11121A",
          line: "#1C1E2A",
        },
        cyan: {
          DEFAULT: "#00F5FF",
          dim: "#0AA8B5",
        },
        crimson: {
          DEFAULT: "#FF1744",
          dim: "#B3102F",
        },
        amber: {
          DEFAULT: "#FFB000",
        },
        steel: {
          DEFAULT: "#8B92A6",
          light: "#C4C9D4",
        },
        offwhite: "#F2F4F8",
      },
      fontFamily: {
        mono: ["var(--font-jetbrains)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        flicker: {
          "0%, 100%": { opacity: "0.06" },
          "50%": { opacity: "0.1" },
        },
        glitchTop: {
          "0%, 100%": { clipPath: "inset(0 0 95% 0)", transform: "translate(0,0)" },
          "20%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(-2px,-1px)" },
          "40%": { clipPath: "inset(40% 0 40% 0)", transform: "translate(2px,1px)" },
          "60%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(-1px,1px)" },
          "80%": { clipPath: "inset(15% 0 80% 0)", transform: "translate(1px,-1px)" },
        },
        glitchBottom: {
          "0%, 100%": { clipPath: "inset(95% 0 0 0)", transform: "translate(0,0)" },
          "20%": { clipPath: "inset(70% 0 10% 0)", transform: "translate(2px,1px)" },
          "40%": { clipPath: "inset(40% 0 40% 0)", transform: "translate(-2px,-1px)" },
          "60%": { clipPath: "inset(10% 0 70% 0)", transform: "translate(1px,-1px)" },
          "80%": { clipPath: "inset(80% 0 15% 0)", transform: "translate(-1px,1px)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        blink: "blink 1s step-end infinite",
        scanline: "scanline 6s linear infinite",
        flicker: "flicker 4s ease-in-out infinite",
        glitchTop: "glitchTop 2.5s infinite linear alternate-reverse",
        glitchBottom: "glitchBottom 2.5s infinite linear alternate-reverse",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
