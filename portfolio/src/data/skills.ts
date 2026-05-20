export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Data Analysis",
    skills: [
      "Exploratory Data Analysis",
      "Statistical Analysis",
      "Data Cleaning & Wrangling",
      "KPI Tracking & Reporting",
      "Trend Analysis",
      "Root Cause Analysis",
    ],
  },
  {
    title: "Business Analysis",
    skills: [
      "Business Intelligence",
      "Stakeholder Communication",
      "Requirements Gathering",
      "Process Optimization",
      "Strategic Insights",
      "Decision Support",
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
    ],
  },
  {
    title: "Data Science",
    skills: [
      "Machine Learning",
      "Feature Engineering",
      "Predictive Modeling",
      "Data Visualization",
      "Matplotlib & Seaborn",
      "Dashboard Design",
    ],
  },
];
