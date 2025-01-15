export const courseInfo = [
  {
    image: "/db.jpg",
    title: "Database Administration",

    details: [
      {
        title: "Database Management",
        description: "Efficiently administer SQL Server & MySQL databases.",
      },
      {
        title: "Database Optimization",
        description: "Enhance database performance and streamline operations.",
      },
      {
        title: "Cloud Database Deployment",
        description:
          "Proficiency in deploying databases on both on-premises and cloud platforms like Azure & AWS.",
      },
      {
        title: "Troubleshooting & Maintenance",
        description:
          "Ability to identify and resolve database issues, ensuring seamless functionality.",
      },
    ],
    jobOpportunities: ["Database Administrator", "Cloud Database Engineer"],
  },
  {
    image: "/science.jpg",
    title: "Data Science",

    details: [
      {
        title: "Module 1",
        description:
          "Introduction to Data Science and Python for Data Analysis.",
      },
      {
        title: "Module 2",
        description: "Data Preprocessing and Feature Engineering.",
      },
      {
        title: "Module 3",
        description: "Machine Learning Basics and Model Building.",
      },
      {
        title: "Module 4",
        description: "Model Evaluation, Deployment, and Advanced Topics.",
      },
    ],
    jobOpportunities: [
      "Data Scientist",
      "Data Analyst",
      "Machine Learning Engineer",
    ],
  },
  {
    image: "/ai.jpg",
    title: "AI Essentials, Prompt Engineering and AI data training",

    details: [
      {
        title: "Module 1",
        description: "AI Essentials.",
      },
      {
        title: "Module 2",
        description: "AI Prompt Engineering.",
      },
      {
        title: "Module 3",
        description: "Advance AI Data Training.",
      },
      {
        title: "Module 4",
        description: "ALLMs (ChatGPT, CoralAI etc.).",
      },
    ],
    jobOpportunities: ["AI Prompt Engineer", "Advanced AI Data Trainer"],
  },
  {
    image: "/web-design.jpg",
    title: "Digital Entrepreneurship",

    details: [
      {
        title: "Module 1",
        description: "E-Commerce Engineering",
      },
      {
        title: "Module 2",
        description: "Web Development",
      },
      {
        title: "Module 3",
        description: "Dropshipping",
      },
      {
        title: "Module 4",
        description: "SMM(AI Based)",
      },
    ],
    jobOpportunities: [
      "E-commerce Engineer",
      "Web Developer",
      "Social Media Marketer",
    ],
  },
  {
    image: "/cyber-security.jpg",
    title: "Cyber Security",

    details: [
      {
        title: "Module 1",
        description: "Cyber Security Engineering",
      },
      {
        title: "Module 2",
        description: "Ethical Hacker",
      },
      {
        title: "Module 3",
        description: "Governance",
      },
      {
        title: "Module 4",
        description: "Risk and Compliance",
      },
    ],
    jobOpportunities: [
      "Cyber Security Engineer",
      "Ethical Hacker",
      "Risk and Compliance",
    ],
  },
];

export type courseInfoProp = {
  image: string;
  title: string;
  details: {
    title: string;
    description: string;
  }[];
  jobOpportunities: string[];
};
