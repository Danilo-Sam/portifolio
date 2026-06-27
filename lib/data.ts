export const profile = {
  name: "Danilo Sampaio",
  role: "Desenvolvedor Full Stack Java Júnior",
  rolesTyped: [
    "Desenvolvedor Full Stack Java Júnior",
    "Java • Spring Boot",
    "React • TypeScript",
    "Clean Code & APIs RESTful",
  ],
  shortBio:
    "Desenvolvedor Full Stack Java Júnior, graduando em Engenharia de Software e formado em Desenvolvimento Full Stack Java pela EBAC. Construo soluções ponta a ponta unindo back-end em Java/Spring Boot com interfaces modernas em React e TypeScript.",
  bioTerminal: [
    "> cat sobre.txt",
    "Desenvolvedor Full Stack Java, formado pela EBAC (Escola Britânica",
    "de Artes Criativas e Tecnologia) e graduando em Engenharia de",
    "Software.",
    "",
    "Atuo unindo back-end em Java/Spring Boot — APIs RESTful,",
    "persistência com JPA/Hibernate e boas práticas de POO — com",
    "interfaces modernas em React.js e TypeScript no front-end.",
    "",
    "Aplico Clean Code, testes automatizados (JUnit, Jest, Cypress) e",
    "versionamento com Git/GitHub em todos os projetos.",
  ],
  location: "Guaíra, SP • Brasil",
  email: "danilosampaio872@gmail.com",
  phone: "+55 (17) 99976-5304",
  whatsappNumber: "5517999765304",
  cvUrl: "/api/cv",
  social: {
    github: "https://github.com/Danilo-Sam",
    linkedin: "https://linkedin.com/in/d-sampaio",
  },
};

export const stats = [
  { label: "Formação Full Stack", value: "EBAC" },
  { label: "Projetos no GitHub", value: "3+" },
  { label: "Tecnologias estudadas", value: "15+" },
  { label: "Nível atual", value: "Júnior" },
];

export const techMarquee = [
  "JAVA",
  "SPRING BOOT",
  "SPRING MVC",
  "SPRING SECURITY",
  "SPRING DATA JPA",
  "REACT.JS",
  "VUE.JS",
  "NEXT.JS",
  "TYPESCRIPT",
  "JAVASCRIPT (ES6+)",
  "REDUX",
  "HTML5 / CSS3",
  "MYSQL",
  "POSTGRESQL",
  "HIBERNATE / JPA",
  "GIT & GITHUB",
  "REST APIS",
  "JUNIT / MOCKITO",
  "CYPRESS / JEST",
  "SASS / BOOTSTRAP",
  "PYTHON",
];

export type SkillGroup = {
  category: string;
  icon: "backend" | "frontend" | "database" | "tools";
  skills: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "backend",
    skills: [
      { name: "Java (POO)", level: 78 },
      { name: "Spring Boot / Spring MVC", level: 72 },
      { name: "REST APIs", level: 70 },
      { name: "Swing / JavaFX", level: 50 },
      { name: "Spring Security", level: 60 },
      { name: "Hibernate / JPA", level: 65 },
      { name: "Python", level: 76 },
    ],
  },
  {
    category: "Frontend",
    icon: "frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: 80 },
      { name: "React.js", level: 75 },
      { name: "Next.js", level: 35 },
      { name: "TypeScript", level: 68 },
      { name: "Vue.js / Redux / Vuex", level: 58 },
      { name: "HTML5 / CSS3 / SASS", level: 85 },
    ],
  },
  {
    category: "Banco de Dados",
    icon: "database",
    skills: [
      { name: "SQL", level: 68 },
      { name: "MySQL", level: 66 },
      { name: "PostgreSQL", level: 75 },
    ],
  },
  {
    category: "Testes & Ferramentas",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "JUnit / Mockito", level: 60 },
      { name: "Cypress / Jest", level: 55 },
      { name: "Maven / NPM", level: 65 },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  status: string;
  tags: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    id: "proj-01",
    title: "EBAC Games Redux",
    description:
      "Projeto base do curso EBAC reestruturado por iniciativa própria: removi useState e useEffect e migrei o controle de estado do carrinho e dos favoritos para Redux, com melhorias e ajustes adicionais.",
    status: "CURSO EBAC",
    tags: ["JavaScript", "React", "Redux"],
    github: "https://github.com/Danilo-Sam/ebac_games_redux",
  },
  {
    id: "proj-02",
    title: "Clone Disney Plus+",
    description:
      "Clone do site da Disney+ construído em HTML, SASS e JavaScript, com o código organizado em seções correspondentes a cada parte do layout original e build automatizado com Gulp para minificação e compilação dos arquivos.",
    status: "CURSO EBAC",
    tags: ["HTML", "SASS", "CSS", "JavaScript", "Gulp"],
    github: "https://github.com/Danilo-Sam/clone_disneyplus",
  },
  {
    id: "proj-03",
    title: "Exercício de CSS",
    description:
      "Projeto pessoal criado para solidificar conceitos de CSS: imagens, formulários, títulos e fontes customizadas, construído com HTML e CSS puros e versionado com Git/GitHub.",
    status: "PROJETO PESSOAL",
    tags: ["HTML", "CSS", "Git", "GitHub"],
    github: "https://github.com/Danilo-Sam/exercicio_css",
  },
  {
    id: "proj-04",
    title: "EBAC Games Redux",
    description:
      "Projeto base do curso EBAC reestruturado por iniciativa própria: removi useState e useEffect e migrei o controle de estado do carrinho e dos favoritos para Redux, com melhorias e ajustes adicionais.",
    status: "CURSO EBAC",
    tags: ["JavaScript", "React", "Redux"],
    github: "https://github.com/Danilo-Sam/ebac_games_redux",
  }
];

export type ExperienceItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "04/2024 — Atual",
    role: "Motorista de veículo  transbordo",
    company: "Açúcar e Álcool Oswaldo Ribeiro de Oliveira Ltda. — Guaíra/SP",
    description:
      "Atuação em organização e acompanhamento de produção, conciliando a rotina de trabalho com os estudos em desenvolvimento de software.",
    highlights: [
      "Organização e comunicação no acompanhamento da produção",
      "Trabalho em equipe e adaptabilidade a diferentes situações",
      "Liderança de produção em frentes de trabalho",
    ],
  },
  {
    period: "11/2022 — 02/2024",
    role: "Formação em Desenvolvimento Full Stack Java",
    company: "EBAC — Escola Britânica de Artes Criativas e Tecnologia",
    description:
      "Curso livre completo de Desenvolvedor Full Stack Java, unindo back-end em Java/Spring Boot a interfaces modernas em React.js e TypeScript.",
    highlights: [
      "Programação Orientada a Objetos (POO) e boas práticas de Clean Code",
      "Criação e consumo de APIs RESTful, persistência com JPA/Hibernate",
      "Testes automatizados e versionamento com Git/GitHub",
    ],
  },
  {
    period: "08/2020 — 10/2021",
    role: "Auxiliar Operacional",
    company: "Exologística Transportadora — Camaçari/BA",
    description:
      "Rotina de carregamento e descarregamento de produtos com foco em metas mensais de produtividade.",
    highlights: [
      "Cumprimento consistente de metas mensais de produtividade",
      "Reconhecido com premiações mensais por organização e agilidade",
    ],
  },
];
