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
        image:'/ai.jpg',
        title:'AI Essentials, Prompt Engineering and AI data training',
     
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