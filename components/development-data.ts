export interface TechItem {
  name: string;
  category: "Languages" | "Frontend" | "Backend" | "Databases" | "AI / ML" | "Cloud / Tools";
  level?: string;
}

export interface DevProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  keyFunctionality: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  badgeType: "Skill Badge" | "Certification" | "Training";
  category: "Google Cloud" | "AWS" | "Database" | "AI / ML";
}

export const devSpecialties = [
  {
    title: "Software Engineer",
    description: "Architecting reliable, structured software systems using clean code principles and object-oriented design.",
    icon: "Code",
  },
  {
    title: "Full Stack Developer",
    description: "Bridging modern reactive frontend interfaces with scalable API services and performant database layers.",
    icon: "Layers",
  },
  {
    title: "AI & ML Enthusiast",
    description: "Training predictive models, evaluating metrics, and deploying multimodal LLM workflows using Gemini and Vertex AI.",
    icon: "Cpu",
  },
  {
    title: "Java Developer",
    description: "Building robust enterprise backend applications with core Java, OOP paradigms, and standard design patterns.",
    icon: "Coffee",
  },
  {
    title: "Python Developer",
    description: "Developing data pipelines, Streamlit dashboards, machine learning classifiers, and automated scripting tools.",
    icon: "Terminal",
  },
  {
    title: "Backend & API Developer",
    description: "Designing RESTful endpoints, request validation, authentication, and database querying pipelines.",
    icon: "Server",
  },
  {
    title: "Prompt Engineer",
    description: "Structuring complex multimodal prompts, few-shot conditioning, and RAG architectures for Gemini & Vertex AI.",
    icon: "Sparkles",
  },
  {
    title: "Frontend Developer",
    description: "Crafting fluid, accessible web applications with Next.js, React, TypeScript, and modern Tailwind CSS systems.",
    icon: "Layout",
  },
];

export const techStackData: Record<string, TechItem[]> = {
  Languages: [
    { name: "Java", category: "Languages", level: "Core & OOP" },
    { name: "Python", category: "Languages", level: "Data & ML" },
    { name: "JavaScript", category: "Languages", level: "ES6+ / Modern" },
    { name: "TypeScript", category: "Languages", level: "Type Safe" },
    { name: "C", category: "Languages", level: "Data Structures" },
    { name: "HTML5 / CSS3", category: "Languages", level: "Semantic & Responsive" },
  ],
  Frontend: [
    { name: "React", category: "Frontend", level: "Hooks & SPA" },
    { name: "Next.js", category: "Frontend", level: "App Router & SSR" },
    { name: "Vite", category: "Frontend", level: "Modern Bundler" },
    { name: "Tailwind CSS", category: "Frontend", level: "Utility Design" },
    { name: "Framer Motion", category: "Frontend", level: "Micro-animations" },
    { name: "Responsive UI", category: "Frontend", level: "Mobile-first" },
  ],
  Backend: [
    { name: "Node.js", category: "Backend", level: "Event-driven runtime" },
    { name: "Express.js", category: "Backend", level: "RESTful Routing" },
    { name: "REST APIs", category: "Backend", level: "CRUD & JSON APIs" },
    { name: "Streamlit", category: "Backend", level: "Python Web Apps" },
    { name: "Spring Basics", category: "Backend", level: "Enterprise Patterns" },
  ],
  Databases: [
    { name: "MySQL", category: "Databases", level: "Relational / SQL" },
    { name: "MongoDB", category: "Databases", level: "NoSQL / Collections" },
    { name: "Prisma ORM", category: "Databases", level: "Type-safe DB Client" },
    { name: "Supabase / Firebase", category: "Databases", level: "Real-time & Auth" },
  ],
  "AI / ML": [
    { name: "Python ML", category: "AI / ML", level: "NumPy & Pandas" },
    { name: "Scikit-Learn", category: "AI / ML", level: "Classification & Reg" },
    { name: "TensorFlow Basics", category: "AI / ML", level: "Neural Concepts" },
    { name: "Vertex AI", category: "AI / ML", level: "Google Cloud Gemini" },
    { name: "Multimodal RAG", category: "AI / ML", level: "Doc Extraction" },
    { name: "Prompt Engineering", category: "AI / ML", level: "Structured Outputs" },
  ],
  "Cloud / Tools": [
    { name: "Google Cloud", category: "Cloud / Tools", level: "Vertex AI & Cloud" },
    { name: "AWS Educate", category: "Cloud / Tools", level: "GenAI & Cloud Storage" },
    { name: "Git", category: "Cloud / Tools", level: "Version Control" },
    { name: "GitHub", category: "Cloud / Tools", level: "CI/CD & Collaboration" },
    { name: "Jupyter Notebook", category: "Cloud / Tools", level: "Data Experiments" },
    { name: "Postman", category: "Cloud / Tools", level: "API Testing" },
  ],
};

export const devProjects: DevProject[] = [
  {
    id: "air-quality-app",
    title: "Air Quality Visualizer & Forecast App",
    category: "AI / ML & Environmental Analytics",
    description:
      "Interactive data-driven web application for monitoring, evaluating, and predicting Air Quality Index (AQI) levels using temporal sensor datasets and machine learning regression.",
    technologies: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
    keyFunctionality: [
      "Real-time and historical AQI particulate tracking (PM2.5, PM10, CO, NO2)",
      "Predictive regression model forecasting upcoming atmospheric conditions",
      "Interactive heatmaps and dynamic correlation matrices for environmental variables",
      "Model evaluation benchmarks tracking MSE and R² score reliability",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: true,
  },
  {
    id: "covid-ml-model",
    title: "COVID-19 Predictive Analytics & Classification Model",
    category: "Machine Learning & Healthcare Analytics",
    description:
      "Supervised machine learning classification pipeline designed to analyze clinical symptom vectors and evaluate patient risk factors with high diagnostic accuracy.",
    technologies: ["Python", "Scikit-learn", "Logistic Regression", "Matplotlib", "Jupyter"],
    keyFunctionality: [
      "Rigorous data cleaning, normalization, and imbalanced class mitigation",
      "Logistic regression and decision classification model comparisons",
      "Confusion matrix analysis with Precision, Recall, and F1-Score calibration",
      "Data visualization displaying key symptom correlation significance",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: true,
  },
  {
    id: "customer-churn-engine",
    title: "Customer Churn Prediction Engine",
    category: "Data Science & Enterprise ML",
    description:
      "Predictive customer behavioral analytics platform capable of scoring churn probabilities, identifying high-risk client segments, and pinpointing key attrition factors.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Classification Models", "NumPy"],
    keyFunctionality: [
      "Feature engineering from transaction logs and customer tenure metrics",
      "Supervised classification model benchmarking and cross-validation",
      "Feature importance evaluation highlighting top churn drivers",
      "Actionable retention risk scoring outputs for business decision makers",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: true,
  },
  {
    id: "ipl-analytics-hub",
    title: "IPL Match Intelligence & Analytics Hub",
    category: "Full Stack & Sports Analytics",
    description:
      "Comprehensive analytical web platform providing historical IPL tournament statistics, player performance benchmarks, and predictive match outcome probabilities.",
    technologies: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Data Visualization"],
    keyFunctionality: [
      "Dynamic head-to-head franchise metrics across historic IPL seasons",
      "Toss factor, pitch condition, and run-rate predictive modeling",
      "Interactive batsman and bowler strike-rate comparison dashboards",
      "Live probability estimation simulation for match scenarios",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: true,
  },
  {
    id: "gemini-multimodal-rag",
    title: "Multimodal Gemini Document RAG Inspector",
    category: "Generative AI & LLM Systems",
    description:
      "Enterprise document processing pipeline using Google Cloud Vertex AI and Gemini Multimodal APIs to perform contextual question-answering across complex files.",
    technologies: ["Google Cloud Vertex AI", "Gemini 1.5", "Multimodal RAG", "Python", "Streamlit"],
    keyFunctionality: [
      "Extraction and semantic indexing of charts, tables, and dense text from PDFs",
      "Multimodal prompt conditioning with contextual grounding",
      "Low-latency document conversation interface built with Streamlit",
      "Strict citation synthesis preventing LLM hallucination",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: false,
  },
  {
    id: "holy-connect-platform",
    title: "Holy Connect Digital Interface & Web Suite",
    category: "Full Stack & UI Engineering",
    description:
      "Production-focused application interface and component architecture developed during active industry internship at Holy Connect.",
    technologies: ["React", "JavaScript", "Tailwind CSS", "UI/UX Architecture", "REST APIs"],
    keyFunctionality: [
      "Componentized responsive user interface system with seamless state management",
      "Accessibility audit and UI optimization improving task completion speeds",
      "Collaboration with engineering teams translating specs into production code",
      "Rapid prototyping and iterative client-ready interactive interfaces",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
    featured: false,
  },
];

export const devExperience: ExperienceItem[] = [
  {
    role: "Graphic Design & UI Intern",
    organization: "Holy Connect",
    period: "Ongoing",
    type: "Internship",
    description: [
      "Assisting in designing and refining user interfaces to improve digital accessibility and visual clarity.",
      "Creating engaging layouts, design assets, and interactive component prototypes for client applications.",
      "Collaborating directly with engineering teams to translate feature requirements into intuitive UI/UX solutions.",
      "Developing rapid design prototypes and mockups to streamline user testing, feedback, and development iteration.",
    ],
    technologies: ["UI/UX Design", "Figma", "Design Systems", "Prototyping", "Frontend Collaboration"],
  },
  {
    role: "Python Development Intern",
    organization: "Codesoft",
    period: "Previous",
    type: "Internship",
    description: [
      "Built Python applications and programmatic utilities adhering to modular, clean code conventions.",
      "Implemented data processing pipelines, structured file operations, and algorithmic logic.",
      "Gained hands-on experience in debugging, optimizing performance, and unit-testing Python scripts.",
    ],
    technologies: ["Python", "Algorithms", "Data Processing", "Git", "Modular Architecture"],
  },
  {
    role: "Organizing Committee Member",
    organization: "Google Developers Group (GDG) on Campus GLA University",
    period: "Active Engagement",
    type: "Community Leadership",
    description: [
      "Volunteered in the organizing committee of Open Source and technical developer events at GLA University Mathura.",
      "Coordinated workshops, hackathons, and technical sessions to foster peer-to-peer developer engagement.",
      "Engaged with student engineers on modern tooling, open-source best practices, and collaborative Git workflows.",
    ],
    technologies: ["Open Source", "Developer Community", "Tech Event Coordination", "Git & GitHub"],
  },
];

export const devCertifications: CertificationItem[] = [
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    badgeType: "Skill Badge",
    category: "Google Cloud",
  },
  {
    title: "Develop Gen-AI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    badgeType: "Skill Badge",
    category: "Google Cloud",
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality & RAG",
    issuer: "Google Cloud",
    badgeType: "Skill Badge",
    category: "Google Cloud",
  },
  {
    title: "Build Real World AI Applications with Gemini & Imagen",
    issuer: "Google Cloud",
    badgeType: "Skill Badge",
    category: "Google Cloud",
  },
  {
    title: "Explore Generative AI with Vertex AI Gemini API",
    issuer: "Google Cloud",
    badgeType: "Skill Badge",
    category: "Google Cloud",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "AWS Educate",
    badgeType: "Training",
    category: "AWS",
  },
  {
    title: "Getting Started with Storage",
    issuer: "AWS Educate",
    badgeType: "Training",
    category: "AWS",
  },
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    badgeType: "Certification",
    category: "Database",
  },
];

export const coCurricularActivities = [
  {
    title: "Azure AI Developer Day",
    organizer: "Microsoft Noida",
    detail: "Technical deep-dive on Azure AI services, cloud model deployment, and cognitive architectures.",
  },
  {
    title: "Thomso 2024 Data Science Workshop",
    organizer: "Remark Skill Education in association with IIT Roorkee",
    detail: "Intensive training on predictive modeling, exploratory data analysis, and practical machine learning.",
  },
  {
    title: "HackViz 2.0 Hackathon",
    organizer: "GFG Club GLA University",
    detail: "Collaborative 24-hour hackathon building algorithmic solutions under competitive time constraints.",
  },
  {
    title: "Generative AI Industry Conduct Session",
    organizer: "HCL Guvi with Techfest IIT Bombay Zonals",
    detail: "Industrial case studies on large language model fine-tuning and enterprise GenAI workflows.",
  },
];

export const contactDetails = {
  name: "Saumitra Misra",
  title: "Software Engineer & AI Enthusiast",
  education: "B.Tech CSE, GLA University, Mathura (2023 - 2027)",
  location: "Mathura / Prayagraj, India",
  phone: "+91 9555942512",
  email: "saumitramisra95@gmail.com",
  collegeEmail: "saumitra.misra_cs23@gla.ac.in",
  linkedin: "https://www.linkedin.com/in/saumitra-misra-12613a2b4",
  github: "https://github.com/sam089-glitcher",
  resumePath: "/Assets/Saumitra Resume.pdf",
};
