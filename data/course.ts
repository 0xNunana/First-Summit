export const courseInfo=[
    {
        image: '/db.jpg',
        title: 'Database Administration',
      
        details: [
            {
                title: 'Database Management',
                description: 'Efficiently administer SQL Server & MySQL databases.'
            },
            {
                title: 'Database Optimization',
                description: 'Enhance database performance and streamline operations.'
            },
            {
                title: 'Cloud Database Deployment',
                description: 'Proficiency in deploying databases on both on-premises and cloud platforms like Azure & AWS.'
            },
            {
                title: 'Troubleshooting & Maintenance',
                description: 'Ability to identify and resolve database issues, ensuring seamless functionality.'
            }
        ],
        jobOpportunities: [
            'Database Administrator',
            'Cloud Database Engineer'
        ]
    },
    {
        image:'/science.jpg',
        title:'Data Science',
     
        details: [
            {
                title: 'Module 1',
                description: 'Introduction to Data Science and Python for Data Analysis.'
            },
            {
                title: 'Module 2',
                description: 'Data Preprocessing and Feature Engineering.'
            },
            {
                title: 'Module 3',
                description: 'Machine Learning Basics and Model Building.'
            },
            {
                title: 'Module 4',
                description: 'Model Evaluation, Deployment, and Advanced Topics.'
            }
        ],
        jobOpportunities: [
             'Data Scientist','Data Analyst','Machine Learning Engineer'
        ]
    },
    {
        image:'/ai.jpg',
        title:'AI Essentials, Prompt Engineering and AI data training',
     
        details: [
            {
                title: 'Module 1',
                description: 'AI Essentials.'
            },
            {
                title: 'Module 2',
                description: 'AI Prompt Engineering.'
            },
            {
                title: 'Module 3',
                description: 'Advance AI Data Training.'
            },
            {
                title: 'Module 4',
                description: 'ALLMs (ChatGPT, CoralAI etc.).'
            }
        ],
        jobOpportunities: [
            'AI Prompt Engineer','Advanced AI Data Trainer'
        ]
    }
]

export type courseInfoProp={
    image:string;
    title:string;
    details: {
        title: string;
        description: string;
    }[];
    jobOpportunities: string[];
}