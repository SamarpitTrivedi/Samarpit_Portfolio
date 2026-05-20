export interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: "Data Analyst",
    company: "Hive AI",
    duration: "October 2025 – Present",
    location: "Gurugram, Haryana",
    responsibilities: [
      "Analyzing, validating, and auditing large-scale datasets used in AI/ML model development to ensure accuracy, consistency, and completeness.",
      "Identifying data quality issues, anomalies, and pattern breaks using rule-based checks, statistical profiling, and process audits.",
      "Reviewing and improving labeled datasets to enhance model training reliability and reduce error rates.",
      "Ensuring compliance with data quality standards through structured QA workflows and performance metrics.",
      "Collaborating with cross-functional teams to optimize data pipelines, refine guidelines, and improve operational efficiency.",
    ],
  },
  {
    id: 2,
    role: "Python Developer Intern",
    company: "Cipher Byte Technologies",
    duration: "August 2024 – September 2024",
    location: "Remote",
    responsibilities: [
      "Built two automation tools (File Renamer and Mail Sender) using Python, applying pandas for structured data handling and integrating basic matplotlib diagnostics to validate outputs.",
      "Developed clean scripting logic and lightweight GUI workflows, improving task speed and reducing manual effort while following standard software development practices.",
    ],
  },
];
