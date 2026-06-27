export const profile = {
  name: "Danilo Sampaio",
  role: "Desenvolvedor Full Stack Java",
  rolesTyped: [
    "Desenvolvedor Full Stack Java",
    "Java • Spring Boot",
    "React • TypeScript",
    "Clean Code & APIs RESTful",
  ],
  shortBio:
    "Desenvolvedor Full Stack Java, graduando em Engenharia de Software e formado em Desenvolvimento Full Stack Java pela EBAC. Construo soluções ponta a ponta unindo back-end em Java/Spring Boot com interfaces modernas em React e TypeScript.",
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
];

export const techMarquee = [
  "JAVA",
  "C",
  "PHP",
  "SPRING BOOT",
  "SPRING MVC",
  "SPRING SECURITY",
  "SPRING DATA JPA",
  "SWING",
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
  skills: { name: string; level: string }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend",
    icon: "backend",
    skills: [
      { name: "Java (POO)", level: "Intermediário" },
      { name: "Spring Boot / Spring MVC", level: "Básico" },
      { name: "REST APIs", level: "Básico" },
      { name: "Swing / JavaFX", level: "Básico" },
      { name: "Spring Security", level: "Básico" },
      { name: "Hibernate / JPA", level: "Básico" },
      { name: "Python", level: "Intermediário" },
    ],
  },
  {
    category: "Frontend",
    icon: "frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: "Intermediário" },
      { name: "React.js", level: "Intermediário" },
      { name: "Next.js", level: "Básico" },
      { name: "TypeScript", level: "Intermediário" },
      { name: "Vue.js / Redux / Vuex", level: "Básico" },
      { name: "HTML5 / CSS3 / SASS", level: "Avançado" },
    ],
  },
  {
    category: "Banco de Dados",
    icon: "database",
    skills: [
      { name: "SQL", level: "Básico" },
      { name: "MySQL", level: "Básico" },
      { name: "PostgreSQL", level: "Intermediário" },
    ],
  },
  {
    category: "Testes & Ferramentas",
    icon: "tools",
    skills: [
      { name: "Git & GitHub", level: "Intermediário" },
      { name: "JUnit / Mockito", level: "Básico" },
      { name: "Cypress / Jest", level: "Básico" },
      { name: "Maven / NPM", level: "Intermediário" },
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
    title: "efood",
    description:
      "Aplicação web inspirada em plataformas de delivery, desenvolvida com React e TypeScript,permitindo a visualização de restaurantes, listagem dinâmica de produtos e interação do usuáriocom a interface. O projeto realiza consumo de API REST, controle de estado da aplicação elayout responsivo, simulando funcionalidades comuns em aplicações reais de mercado.",
    status: "CURSO EBAC",
    tags: ["TypeScript", "React", "Redux", "API REST", "CSS3"],
    github: "https://github.com/Danilo-Sam/efood",
  },
  {
    id: "proj-05",
    title: "Jogo campo minado",
    description:
      "Desenvolvi uma aplicação desktop do jogo Campo Minado utilizando Java e a biblioteca gráfica Swing, com forte foco na aplicação prática de Programação Orientada a Objetos (POO) e padrões de projeto. Separei de forma independente a lógica de regras de negócio do tabuleiro da camada de interface do usuário. O projeto envolveu a criação de algoritmos recursivos eficientes para a propagação automática de cliques em áreas vazias e o mapeamento dinâmico de coordenadas, resultando em um software limpo, performático e visualmente interativo.",
    status: "Pessoal",
    tags: ["Swing", "Java", "POO", "Algoritmos Recursivos"],
    github: "https://github.com/Danilo-Sam/jogo_campo_minado",
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
    period: "10/2024 — Atual",
    role: "Em Transição de Carreira",
    company: "Em Transição de Carreira. — Guaíra/SP",
    description:
      "Atuação em organização e acompanhamento de produção, conciliando a rotina de trabalho com os estudos em desenvolvimento de software.",
    highlights: [
      "Gestão de Estado Complexo: Refatoração completa da arquitetura do projeto Ebac Games Redux, substituindo hooks locais por Redux global, otimizando a previsibilidade e o fluxo de dados da aplicação.",
      "Desenvolvimento de Soluções Ponta a Ponta: Construção da plataforma de delivery eFood, integrando o consumo de APIs RESTful dinâmicas a um fluxo completo de checkout e validação de formulários.",
      "Clean Code e Performance: Criação de componentes reutilizáveis e modulares com React.js e TypeScript, visando interfaces responsivas com foco em semântica e boas práticas de desenvolvimento.",
      "Alta Adaptabilidade e Evolução: Histórico profissional comprovado de crescimento e rápida absorção de novos processos, evidenciado pela promoção recente de Apontador de Produção para Motorista de Veículo Transbordo.",
      "Resiliência e Trabalho sob Pressão: Sólida experiência em ambientes operacionais de grande porte, desenvolvendo facilidade para trabalhar em equipe focada no cumprimento rigoroso de metas diárias.",
      "Foco em Organização e Liderança: Habilidade consolidada no controle, organização e fluxo de dados operacionais em tempo real, aplicando competências de liderança para resolver gargalos práticos."
    ],
  },
  {
    period: "04/2024 — Atual",
    role: "Motorista de Veículo  Transbordo",
    company: "Açúcar e Álcool Oswaldo Ribeiro de Oliveira Ltda. — Guaíra/SP",
    description:
      "Desenvolvedor Front-End em transição de carreira, graduando em Engenharia de Software e formado como Desenvolvedor Full Stack pela EBAC. Minha trajetória profissional no setor industrial e logístico me consolidou uma forte bagagem em liderança operacional, adaptabilidade rápida a novos cenários, trabalho em equipe sob pressão e foco rigoroso no cumprimento de metas. Na área técnica, possuo experiência prática no desenvolvimento de interfaces modernas e funcionais utilizando React.js, TypeScript e Redux, com foco em arquitetura de código limpo e consumo de APIs RESTful. Busco integrar minha resiliência e maturidade profissional a times de tecnologia, entregando soluções eficientes e com foco na experiência do usuário.",
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
