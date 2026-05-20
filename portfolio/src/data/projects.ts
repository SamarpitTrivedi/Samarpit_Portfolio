export interface Project {
  slug: string;
  title: string;
  category: string;
  tagline: string;
  thumbnail: string;
  overview: string;
  problemStatement: string;
  approach: string;
  techniques: string[];
  keyInsights: string[];
  tools: string[];
  githubUrl?: string;
  presentationUrl?: string;
  images: { src: string; caption: string }[];
}

export const projects: Project[] = [
  {
    slug: "northwind-business-analytics",
    title: "Northwind Business Analytics",
    category: "Business Intelligence",
    tagline: "Power BI report for sales, customers, suppliers, operations, and employee performance.",
    thumbnail: "/projects/northwind/Sales.png",
    overview:
      "This project turns the Northwind trading dataset into a business intelligence report that helps stakeholders monitor revenue, orders, customer behavior, supplier contribution, operations, and employee performance through focused Power BI dashboard pages.",
    problemStatement:
      "Northwind's business data spans customers, products, orders, employees, and suppliers. The challenge was to organize that operational data into a clear reporting experience so decision-makers could identify performance trends, compare business functions, and act on improvement opportunities.",
    approach:
      "The report was structured around the major business areas of the company: sales, customers, suppliers, operations, and employees. Each dashboard page focuses on a distinct stakeholder question, using KPI cards, trend visuals, categorical breakdowns, and interactive reporting to move from raw transactional records to practical business insights.",
    techniques: [
      "Power BI dashboard design and report storytelling",
      "KPI tracking across sales, orders, customers, and suppliers",
      "Business function segmentation across operations and employee views",
      "Interactive visual analysis for stakeholder decision-making",
    ],
    keyInsights: [
      "Created a unified view of Northwind business performance",
      "Highlighted customer and supplier patterns that influence revenue",
      "Separated analysis into business-ready pages for faster stakeholder review",
      "Connected operations and employee performance with measurable outcomes",
    ],
    tools: ["Power BI", "DAX", "Data Modeling", "Business Reporting"],
    githubUrl: "https://github.com/SamarpitTrivedi/Northwind_Business_Analytics",
    presentationUrl: "/projects/northwind/Northwind_Business_Report.pdf",
    images: [
      { src: "/projects/northwind/Sales.png", caption: "Sales Performance Dashboard" },
      { src: "/projects/northwind/Customers.png", caption: "Customer Analysis Dashboard" },
      { src: "/projects/northwind/Suppliers.png", caption: "Supplier Contribution Dashboard" },
      { src: "/projects/northwind/Operations.png", caption: "Operations Monitoring Dashboard" },
      { src: "/projects/northwind/Employees.png", caption: "Employee Performance Dashboard" },
    ],
  },
  {
    slug: "fraud-detection-analysis",
    title: "Fraud Detection Analysis",
    category: "Data Mining & Analytics",
    tagline: "Interactive Power BI Solution for Real-Time Fraud Pattern Detection and Risk Analysis.",
    thumbnail: "/projects/fraud-detection.png",
    overview:
      "This project focuses on building an interactive fraud detection and monitoring system using Power BI to identify, analyze, and visualize patterns in fraudulent financial transactions. It combines data preparation, feature engineering, and advanced analytics to help organizations detect anomalies early, understand fraud trends across different dimensions, and make proactive prevention decisions.",
    problemStatement:
      "Financial fraud is a growing threat that causes significant losses across industries. Traditional rule-based detection methods often fail to catch sophisticated fraud patterns. The challenge was to build a real-time, interactive analytics environment that could help stakeholders identify fraud hotspots, understand temporal patterns, and take data-driven preventive measures.",
    approach:
      "The dataset consists of transactional records labeled as fraudulent or non-fraudulent. Our initial ideas were to identify peak fraud hours and create geographical heatmaps to pinpoint fraud-prone regions. We expanded the scope to include fraud risk pattern analysis by segmenting transactions by time-of-day, location, and category. The overall approach combined data cleaning, feature engineering, and correlation analysis through Power BI DAX-driven measures.",
    techniques: [
      "Power Query for cleaning, transformation, and feature engineering",
      "Star schema data modeling for optimized relationships",
      "Fraud rate calculation by time, category, and location using DAX",
      "KPI metrics for high-risk period tracking",
      "Cumulative fraud trend analysis",
    ],
    keyInsights: [
      "Identified peak fraud hours enabling targeted monitoring",
      "Geographical fraud hotspot mapping for regional risk assessment",
      "Category-wise vulnerability detection across transaction types",
      "Real-time interactive dashboards for stakeholder decision-making",
    ],
    tools: ["Power BI", "Power Query", "DAX", "Star Schema Modeling"],
    githubUrl: "https://github.com/SamarpitTrivedi/Credit-Card-Fraud-Detection",
    images: [
      { src: "/projects/fraud-detection/nyce1.png", caption: "Fraud Detection Dashboard Overview" },
      { src: "/projects/fraud-detection/nyce2.png", caption: "Amount, Time, Risk & Category Insights" },
      { src: "/projects/fraud-detection/nyce3.png", caption: "Fraud Distribution, Impact, and Timing Probability" },
    ],
  },
  {
    slug: "zomato-data-analysis",
    title: "Zomato Data Analysis",
    category: "Data Cleaning & Visualization",
    tagline: "Key Performance Indicators and Trend Monitoring for Zomato Business Operations.",
    thumbnail: "/projects/zomato.png",
    overview:
      "This project uses Power BI to create an interactive sales analysis system for Zomato restaurant, cuisine, and rating data. The goal is to help stakeholders understand key sales trends and make informed decisions.",
    problemStatement:
      "Zomato operates across multiple cities and cuisines, generating massive volumes of data. Stakeholders needed a unified analytics view to understand restaurant distribution patterns, cuisine performance, and rating trends across regions to optimize business strategy.",
    approach:
      "Our approach involved moving from basic visualizations like identifying top countries by restaurant count, to more analytical insights. We focused on analyzing restaurant and cuisine patterns by segmenting data based on restaurant offerings and customer ratings. The overall process combined data cleaning and feature engineering with DAX-driven measures.",
    techniques: [
      "Power Query for data cleaning and transformation",
      "Star schema for optimized data relationships",
      "DAX calculations for KPI metrics",
      "Average cost, cuisine count, and aggregate rating measures",
    ],
    keyInsights: [
      "Identified top-performing cities and cuisines by revenue",
      "Rating distribution patterns across restaurant categories",
      "Cost analysis revealing pricing strategies by region",
      "Interactive environment for real-time trend monitoring",
    ],
    tools: ["Power BI", "Power Query", "DAX"],
    githubUrl: "https://github.com/SamarpitTrivedi/Zomato-data-analysis",
    images: [
      { src: "/projects/zomato/user_flow.png", caption: "Cuisines and Aggregate Rating by Restaurant" },
      { src: "/projects/zomato/affinity_diagram.png", caption: "Zomato Sales Analysis: KPIs and Regional Trends" },
    ],
  },
  {
    slug: "customer-churn-analysis",
    title: "Customer Churn Prediction",
    category: "Applied Data Science",
    tagline: "Predicting and Mitigating Customer Churn for a Telecommunications Company.",
    thumbnail: "/projects/churn.png",
    overview:
      "Built a predictive model that accurately identifies customers at risk of churning from a telecommunications company. The ultimate goal is to improve customer retention by allowing the business to proactively engage with high-risk customers.",
    problemStatement:
      "The primary challenge was finding a machine learning model that could effectively learn from a complex dataset containing over 7,000 customers and nearly 40 features. This involved understanding which demographic and service-related factors significantly influence churn decisions, handling categorical features, and developing a model with sufficient accuracy for business decisions.",
    approach:
      "Our approach followed a structured data science workflow: exploratory data analysis and preprocessing, feature scaling with MinMaxScaler, model building and selection testing Logistic Regression, Random Forest, Decision Trees, and XGBClassifier, followed by rigorous model evaluation on unseen data.",
    techniques: [
      "Exploratory Data Analysis and Preprocessing",
      "Label and One-Hot Encoding for categorical features",
      "MinMaxScaler for feature scaling",
      "XGBClassifier (best model at 82.7% accuracy)",
      "Model evaluation with classification metrics",
    ],
    keyInsights: [
      "XGBClassifier achieved approximately 82.7% accuracy on the test set",
      "Customer demographics like age and marital status correlate with churn",
      "Contract type and subscription services are significant churn predictors",
      "Actionable retention strategies based on identified risk factors",
    ],
    tools: ["Python", "Pandas", "Scikit-learn", "XGBoost", "Matplotlib"],
    githubUrl: "https://github.com/SamarpitTrivedi/Customer-churn-analysis",
    images: [
      { src: "/projects/churn/anlp1.png", caption: "Distribution of Numerical Features by Customer Status" },
      { src: "/projects/churn/anlp2.png", caption: "Frequency Distribution of Key Numerical Features" },
    ],
  },
  {
    slug: "booking-channel-analysis",
    title: "Booking Channel Analysis",
    category: "Data Analytics",
    tagline: "Strategy and recommendations for Hotel Chains to increase customer retention.",
    thumbnail: "/projects/booking.png",
    overview:
      "Applied data analysis techniques to a hotel booking sales dataset to find key business insights, identify trends, and recommend actionable strategies for reducing cancellations and improving channel performance.",
    problemStatement:
      "Hotel chains face high cancellation rates and inconsistent performance across booking channels. The objective was to identify significant trends and patterns in booking data, understand booking behaviors across channels, room types, and star ratings, and investigate root causes behind high cancellation rates.",
    approach:
      "Methodology followed: Data Cleaning and Preparation, Exploratory Data Analysis, Data Wrangling and Transformation, and Visualization and Reporting. We analyzed booking trends and channel performance, cancellation drivers, and root causes for disparities across channels.",
    techniques: [
      "Data Cleaning and Preparation",
      "Exploratory Data Analysis (EDA)",
      "Data Wrangling and Transformation",
      "Visualization and Reporting",
    ],
    keyInsights: [
      "Lead time significantly impacts cancellation rates",
      "Revenue varies notably across hotel star ratings",
      "Booking distribution differs across Web, Mobile App, and Travel Agents",
      "Actionable strategies to reduce cancellations and optimize pricing",
    ],
    tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/SamarpitTrivedi/Booking-Channel-Analysis-Report",
    images: [
      { src: "/projects/booking/cookcounty3.png", caption: "Impact of Lead Time on Cancellations" },
      { src: "/projects/booking/cookcounty2.png", caption: "Average Revenue per Booking Across Star Ratings" },
      { src: "/projects/booking/cookcounty1.png", caption: "Distribution of Bookings Across Channels" },
    ],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    category: "Desktop Application",
    tagline: "Smart Stock, Seamless Control — a Python-based inventory solution.",
    thumbnail: "/projects/inventory.png",
    overview:
      "Developed a Python-based Inventory Management System with a graphical user interface that allows users to add, update, delete, and view inventory items. It automates billing, maintains transaction records, and provides real-time stock updates.",
    problemStatement:
      "Many small businesses face challenges managing inventory due to manual tracking and outdated systems, leading to stock errors and inefficiencies. The goal was to provide an efficient, user-friendly, and cost-effective solution for real-time inventory control.",
    approach:
      "Built a lightweight desktop application with Python and Tkinter that automates billing, maintains transaction records, and provides real-time stock updates. The system is designed to be easy to use and suitable for small businesses.",
    techniques: [
      "Python GUI development with Tkinter",
      "Data handling with structured file/database storage",
      "Automated billing and transaction recording",
      "Real-time stock tracking and updates",
    ],
    keyInsights: [
      "Eliminated manual tracking errors for small businesses",
      "Streamlined billing and inventory operations",
      "Scalable design supporting future features like barcode scanning",
      "User-friendly interface for non-technical business owners",
    ],
    tools: ["Python", "Tkinter", "SQLite"],
    githubUrl: "https://github.com/SamarpitTrivedi/Inventory-Management-System",
    images: [
      { src: "/projects/inventory/hydrobase1.png", caption: "Application Setup Interface" },
      { src: "/projects/inventory/hydrobase2.png", caption: "Inventory Dashboard" },
    ],
  },
  {
    slug: "retail-sales-analytics",
    title: "Retail Sales Analytics",
    category: "Information Visualization",
    tagline: "Interactive dashboards illuminating complex sales data across multiple dimensions.",
    thumbnail: "/projects/retail-sales.jpeg",
    overview:
      "This analysis examines retail business performance through interactive dashboards that illuminate complex sales data across multiple dimensions. The visualization approach combines traditional business intelligence metrics with modern data storytelling techniques.",
    problemStatement:
      "Retail businesses generate multi-dimensional data across e-commerce and physical store channels. Stakeholders needed a clear, unified view to understand revenue trends, product performance, and customer behavior patterns for data-driven decision making.",
    approach:
      "Combined Revenue Trend Dashboards, Financial KPI Dashboards, and Product Performance Dashboards using analytical techniques including linking line charts and insight generation methods.",
    techniques: [
      "Revenue Trend Dashboard design",
      "Financial KPI tracking and visualization",
      "Product Performance analysis",
      "Channel comparison (online vs. offline)",
    ],
    keyInsights: [
      "Total revenue of $2.8M with net profit of $684K",
      "Electronics dominate revenue at 43.8%",
      "Digital payments account for 90% of transactions",
      "Positive month-over-month growth in revenue and profit",
    ],
    tools: ["Power BI", "Data Visualization", "KPI Design"],
    images: [
      { src: "/projects/retail-sales/jeopardy1.png", caption: "Revenue Trend Comparison" },
      { src: "/projects/retail-sales/jeopardy2.png", caption: "Payment Method Breakdown" },
      { src: "/projects/retail-sales/jeopardy3.png", caption: "Category Performance" },
    ],
  },
  {
    slug: "spotify-playlist-generator",
    title: "Spotify Playlist Generator",
    category: "Web Architecture & Automation",
    tagline: "Automated Billboard Top 100 to Spotify playlist creation tool.",
    thumbnail: "/projects/spotify.png",
    overview:
      "A Python-based tool that generates a Spotify playlist featuring the Top 100 Billboard songs for any user-specified date. It automates the retrieval of Billboard chart data and compiles corresponding tracks into a new Spotify playlist.",
    problemStatement:
      "Music enthusiasts wanted an easy way to explore and listen to popular songs from specific moments in time. Manually collecting Billboard Top 100 data and searching for each song on Spotify was tedious and time-consuming.",
    approach:
      "Automated the workflow by integrating web scraping to fetch Billboard charts and authenticating with the Spotify API to create playlists dynamically. The system accepts a date input, scrapes Billboard data, searches Spotify for matching tracks, and adds them to a new playlist.",
    techniques: [
      "Web scraping with BeautifulSoup",
      "Spotify Web API integration via Spotipy",
      "Date-based data retrieval and validation",
      "Batch track addition with duplicate prevention",
    ],
    keyInsights: [
      "Fully automated end-to-end playlist generation",
      "Handles rate limits and errors gracefully",
      "Maintains Billboard ranking order for authenticity",
      "User-friendly date input with validation",
    ],
    tools: ["Python", "Spotipy", "BeautifulSoup", "Flask", "Spotify API"],
    githubUrl: "https://github.com/SamarpitTrivedi",
    images: [
      { src: "/projects/spotify/memeoke1.png", caption: "Source Code Overview" },
      { src: "/projects/spotify/memeoke2.png", caption: "CLI Date Input Interface" },
      { src: "/projects/spotify/memeoke3.png", caption: "Generated Spotify Playlist" },
    ],
  },
];
