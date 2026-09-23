export interface DatabaseCategory {
  title: string;
  subtitle: string;
  items: string[];
  icon: string;
  description: string;
}

export interface SqlConceptItem {
  id: string;
  title: string;
  category: "Querying" | "Schema & Constraints" | "Transactions & Storage" | "Performance";
  syntaxSnippet: string;
  explanation: string;
  useCase: string;
}

export interface ArchitectureLayer {
  step: string;
  layer: string;
  tech: string[];
  description: string;
  icon: string;
}

export interface DbProject {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
}

export const dbSpecialties = [
  {
    title: "Database Management",
    description: "Configuring, querying, and maintaining relational and document databases with high availability and data integrity.",
    icon: "Database",
  },
  {
    title: "SQL & Query Optimization",
    description: "Authoring complex multi-table joins, window functions, aggregations, and subqueries with clean execution plans.",
    icon: "Terminal",
  },
  {
    title: "DBMS Architecture",
    description: "Applying relational theory, ACID guarantees, transaction isolation levels, and concurrency control.",
    icon: "Cpu",
  },
  {
    title: "Schema Design & ER Modeling",
    description: "Designing entity-relationship models, establishing cardinality, foreign key constraints, and 3NF normalization.",
    icon: "GitBranch",
  },
  {
    title: "PostgreSQL & MySQL",
    description: "Structuring relational databases, views, stored procedures, triggers, and indexed primary/composite keys.",
    icon: "Server",
  },
  {
    title: "MongoDB & NoSQL",
    description: "Modeling schema-flexible JSON document collections, aggregation pipelines, and indexing schemes.",
    icon: "FileCode",
  },
  {
    title: "Cloud Infrastructure",
    description: "Leveraging AWS Educate Cloud Storage and Google Cloud environments for reliable backend deployments.",
    icon: "Cloud",
  },
  {
    title: "Backend & Data APIs",
    description: "Connecting Node.js and Python backend runtimes with ORMs (Prisma), connection pooling, and RESTful APIs.",
    icon: "Network",
  },
];

export const dbExpertisePillars: DatabaseCategory[] = [
  {
    title: "DATABASE SYSTEMS",
    subtitle: "Engines & Store Mechanisms",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Cloud Databases", "Firebase", "Supabase"],
    icon: "HardDrive",
    description:
      "Deep practical foundation with relational databases (MySQL, PostgreSQL) ensuring ACID compliance and NoSQL document stores (MongoDB) for semi-structured dynamic payloads.",
  },
  {
    title: "QUERYING & MANIPULATION",
    subtitle: "DML, Joins & Analytical Queries",
    items: ["SQL", "Multi-table Joins", "Aggregations", "Subqueries", "CRUD Operations", "GROUP BY / HAVING"],
    icon: "Search",
    description:
      "Fluent query composition spanning INNER, LEFT, RIGHT, and FULL joins, filtered grouping, subquery scalar evaluations, and analytical aggregations.",
  },
  {
    title: "DATABASE ENGINEERING",
    subtitle: "Structure, Schema & Integrity",
    items: ["ER Diagrams", "Schema Design", "1NF - 3NF Normalization", "B-Tree Indexing", "Foreign Keys", "ACID Transactions"],
    icon: "Layers",
    description:
      "Systematic data modeling: translating business entities into normalized tables, enforcing integrity constraints, and structuring indexes to minimize disk I/O.",
  },
  {
    title: "BACKEND DATA INTEGRATION",
    subtitle: "ORMs, Pipelines & Connectors",
    items: ["Prisma ORM", "Spring Data JPA Basics", "Hibernate Concepts", "Connection Pooling", "RESTful Data Access"],
    icon: "Link2",
    description:
      "Integrating persistent layers into software applications using type-safe ORMs, connection pools, and decoupled repository patterns.",
  },
];

export const sqlConcepts: SqlConceptItem[] = [
  {
    id: "complex-joins",
    title: "Multi-Table Relational Joins",
    category: "Querying",
    syntaxSnippet: `SELECT 
  o.order_id,
  c.customer_name,
  p.product_title,
  SUM(oi.quantity * oi.unit_price) AS order_total
FROM orders o
INNER JOIN customers c ON o.customer_id = c.id
LEFT JOIN order_items oi ON o.order_id = oi.order_id
LEFT JOIN products p ON oi.product_id = p.id
WHERE o.status = 'COMPLETED'
GROUP BY o.order_id, c.customer_name, p.product_title;`,
    explanation:
      "Combines normalized relational entities using primary-to-foreign key mappings, aggregating line-item totals with clean join selectivity.",
    useCase: "E-commerce order summary reports, billing audit tables, and transaction reconciliations.",
  },
  {
    id: "aggregations-grouping",
    title: "Aggregations & Filtered Grouping",
    category: "Querying",
    syntaxSnippet: `SELECT 
  department_name,
  COUNT(employee_id) AS total_staff,
  ROUND(AVG(salary), 2) AS avg_compensation,
  MAX(salary) - MIN(salary) AS salary_spread
FROM employees e
JOIN departments d ON e.dept_id = d.id
GROUP BY department_name
HAVING COUNT(employee_id) >= 5 AND AVG(salary) > 65000
ORDER BY avg_compensation DESC;`,
    explanation:
      "Aggregates relational records using AVG, COUNT, MIN/MAX while applying post-aggregation filtering through HAVING clauses.",
    useCase: "Organizational analytics, departmental budgeting, and metric threshold alerts.",
  },
  {
    id: "subqueries-cte",
    title: "Subqueries & Correlated Selects",
    category: "Querying",
    syntaxSnippet: `SELECT 
  customer_id,
  customer_name,
  lifetime_spend
FROM customers c
WHERE lifetime_spend > (
  SELECT AVG(lifetime_spend) 
  FROM customers 
  WHERE registration_year = c.registration_year
);`,
    explanation:
      "Evaluates nested scalar subqueries correlated against each outer tuple to extract above-average performers per cohort.",
    useCase: "High-value cohort segmentation, churn risk identification, and anomalous customer behavior detection.",
  },
  {
    id: "acid-transactions",
    title: "ACID Transaction & Concurrency Safety",
    category: "Transactions & Storage",
    syntaxSnippet: `START TRANSACTION;

UPDATE accounts 
SET balance = balance - 500.00 
WHERE account_id = 'ACC_109' AND balance >= 500.00;

UPDATE accounts 
SET balance = balance + 500.00 
WHERE account_id = 'ACC_842';

INSERT INTO ledger_audit (source_acc, target_acc, amount, created_at)
VALUES ('ACC_109', 'ACC_842', 500.00, NOW());

COMMIT;`,
    explanation:
      "Guarantees Atomicity, Consistency, Isolation, and Durability across multiple dependent state mutations, rolling back if any constraint fails.",
    useCase: "Financial balance transfers, inventory deduction during checkout, and double-booking prevention.",
  },
];

export const cloudArchitectureLayers: ArchitectureLayer[] = [
  {
    step: "01",
    layer: "Client Application Layer",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    description: "Responsive, high-performance web frontends communicating over secure TLS/HTTPS with client-side caching.",
    icon: "Layout",
  },
  {
    step: "02",
    layer: "API & Backend Compute Layer",
    tech: ["Node.js", "Express.js", "Python / Streamlit", "REST APIs"],
    description: "Stateless backend microservices handling request authentication, data validation, rate limiting, and business logic.",
    icon: "Server",
  },
  {
    step: "03",
    layer: "Database & Storage Systems",
    tech: ["MySQL", "MongoDB", "Prisma ORM", "Connection Pooling"],
    description: "Persistent storage partitioned between normalized relational engines for transactional consistency and NoSQL for flexible payloads.",
    icon: "Database",
  },
  {
    step: "04",
    layer: "Cloud Infrastructure & Services",
    tech: ["Google Cloud Platform", "AWS Cloud Storage", "Supabase", "Firebase"],
    description: "Scalable cloud object storage, automated backup policies, Vertex AI integration, and secure environment distribution.",
    icon: "Cloud",
  },
];

export const dbProjects: DbProject[] = [
  {
    id: "relational-inventory-dbms",
    title: "Relational Inventory & Order DBMS Architecture",
    category: "Relational Database Design & SQL",
    description:
      "Comprehensive relational database schema and query architecture built with MySQL, enforcing strict 3NF normalization, foreign key constraints, and transactional consistency.",
    technologies: ["MySQL", "SQL", "Schema Design", "ER Modeling", "Transactions"],
    highlights: [
      "Normalized 3NF relational schema across orders, customers, items, and audit logs",
      "Composite index optimization reducing query execution cost for order history lookups",
      "ACID transaction implementation ensuring inventory decrement integrity during concurrent checkouts",
      "Stored view pipelines generating aggregated monthly sales and regional turnover metrics",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
  },
  {
    id: "air-quality-timeseries-db",
    title: "Air Quality Time-Series Storage & Ingestion Pipeline",
    category: "Data Management & Sensor Storage",
    description:
      "Time-series data storage and query pipeline tracking multi-metric environmental sensors (PM2.5, PM10, CO, NO2) over continuous temporal intervals.",
    technologies: ["Python", "SQL / Pandas", "Time-Series Data", "MongoDB", "Data Cleaning"],
    highlights: [
      "Temporal timestamp indexing allowing sub-second sensor aggregation queries",
      "Data sanitation and interpolation pipelines addressing missing or corrupted sensor readings",
      "Structured tabular export schemas optimized for downstream machine learning model consumption",
      "Partitioned collection schema in MongoDB for dynamic sensor metadata attributes",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
  },
  {
    id: "gemini-cloud-rag-storage",
    title: "Cloud-Backed Gemini Multimodal RAG Pipeline",
    category: "Cloud Infrastructure & Vector Storage",
    description:
      "Cloud storage ingestion and retrieval pipeline using Google Cloud Vertex AI and Gemini APIs to index and query structured and unstructured enterprise documents.",
    technologies: ["Google Cloud Platform", "Vertex AI", "Cloud Storage", "Python", "RAG Pipeline"],
    highlights: [
      "Integration with Google Cloud Storage buckets for secure PDF document staging",
      "Chunking and metadata tagging of document sections to maintain semantic lineage",
      "Low-latency document retrieval pipeline connected to Gemini 1.5 Pro multimodal models",
      "Certified implementation adhering to Google Cloud Vertex AI best practices",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
  },
  {
    id: "customer-churn-data-pipeline",
    title: "Customer Churn Analytical Feature Store & Aggregations",
    category: "Data Warehousing & SQL Analytics",
    description:
      "Analytical database schema and aggregation queries designed to transform raw transaction records into normalized feature tables for machine learning classification.",
    technologies: ["SQL", "Relational Modeling", "Python", "Data Aggregation", "Pandas"],
    highlights: [
      "Multi-table joins aggregating customer transaction frequency, tenure, and billing disputes",
      "Cohort segmentation queries identifying user groups with highest historical churn velocity",
      "Creation of denormalized analytical views for rapid ML training set extraction",
      "Data validation scripts ensuring schema compliance and zero null leakage",
    ],
    githubUrl: "https://github.com/sam089-glitcher",
  },
];

export const dbCertifications = [
  {
    title: "MongoDB Basics for Students",
    issuer: "MongoDB",
    category: "Database Systems",
    description: "Certified proficiency in MongoDB document architecture, collection design, CRUD syntax, and aggregation pipelines.",
  },
  {
    title: "Getting Started with Storage",
    issuer: "AWS Educate",
    category: "Cloud Storage",
    description: "Training in AWS cloud storage solutions, S3 bucket management, lifecycle policies, and cloud persistence architectures.",
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality and RAG",
    issuer: "Google Cloud",
    category: "Cloud AI & Data",
    description: "Certified badge in multimodal document ingestion, retrieval-augmented generation, and cloud document workflows.",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "AWS Educate",
    category: "Cloud & AI",
    description: "Cloud-hosted generative AI models, ethical deployment, and cloud infrastructure requirements for AI workloads.",
  },
];
