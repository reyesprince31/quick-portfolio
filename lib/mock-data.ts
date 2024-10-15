export const mockUserData = {
    personalInfo: {
        name: "Prince Reyes",
        title: "Software Engineer",
        email: "reyes.prince31@gmail.com",
        phone: "+63 976 118 8483",
        location: "Fairview, Quezon City",
        avatar: "/assets/prince-reyes.png",
        bio: "I'm a full-stack developer that loves building products and web apps that can impact millions of lives",
        socials: [
            {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/reyesprince/",
                icon: "LinkedInLogoIcon",
            },
            {
                name: "GitHub",
                url: "https://github.com/reyesprince31",
                icon: "GitHubLogoIcon",
            },
            {
                name: "Portfolio",
                url: "https://reyesprince.com/",
                icon: "GlobeIcon",
            },
        ],
    },
    skills: {
        technologies: [
            "NextJS", "ReactJS", "StorybookJS", "Typescript", "RestAPI",
            "NodeJS", "Express", "Cypress", "Vitest", "Tailwind"
        ],
        tools: [
            "Git", "Github", "VSCode", "Cursor", "Trello", "Asana",
            "Linear", "Canva", "Adobe AI & PS", "Figma"
        ],
        cloud: ["AWS (S3, EC2, Amplify, RDS)", "Vercel", "Supabase"],
        databases: ["MySQL", "Postgres"],
    },
    experience: [
        {
            company: "Codebility",
            position: "Lead Software Engineer",
            period: "Mar 2024 - Present",
            description: "Leading software development efforts and managing cross-functional teams to deliver high-quality SaaS applications.",
            companyUrl: "https://www.codebility.tech/",
            achievements: [
                "Architected and developed a multi-tenant SaaS application using Next.js and Supabase.",
                "Transformed in-house app into a monorepo using TurboRepo for maintainability and scalability.",
                "Integrated Storybook to build a component library, ensuring UI/UX consistency.",
                "Created detailed product backlogs, user stories, and acceptance criteria, applying Agile and Scrum methodologies.",
                "Led cross-functional teams, set deadlines, and ensured timely delivery of project milestones.",
                "Mentored interns and junior developers to improve their skills and guide their growth.",
                "Successfully deployed applications on AWS, Vercel, and Supabase for scalability and performance optimization.",
                "Participated in architectural decision-making and contributed to ideation for the company's internal applications."
            ],
        },
        {
            company: "BoxedFlows",
            position: "Contract Software Engineer",
            period: "Mar 2024 - Present",
            description: "Building innovative SaaS applications",
            companyUrl: "https://boxedflows.com/",
            achievements: [
                "Developed a robust Product Information Management (PIM) web application",
                "Built a GitHub probot, chatbot, and assistant utilizing OpenAI and Langchain",
                "Contributed to project planning, analyzing requirements, and designing systems",
                "Developed a SaaS application for a FinTech and eCommerce project",
                "Engaged with CEO and cross-functional team to integrate cutting edge design and technology",
                "Deployed applications in AWS, Vercel, and Supabase, utilizing AWS services like EC2, Amplify, S3, and RDS",
            ],
        },
        {
            company: "Freelance",
            position: "Software Engineer",
            period: "Aug 2022 - Mar 2024",
            description: "Providing software solutions for various clients",
            achievements: [
                "Architected and developed a web app for clinic appointment and patient record management",
                "Built an E-commerce platform using Next.js and Supabase",
                "Developed a Learning Management System (LMS) using Thinkific",
                "Provided development assistance to a startup company",
            ],
        },
        {
            company: "Krayzer Gaming Grounds",
            position: "Cyber Cafe Owner",
            period: "Oct 2013 - 2020",
            description: "Managing and operating a cybercafe",
            achievements: [
                "Successfully managed diskless network setup and PC assembly",
                "Provided comprehensive technical assistance and customer service",
                "Offered additional services such as video editing and website creation",
            ],
        },
    ],
    education: [
        {
            degree: "B.S in Computer Science",
            institution: "STI College Fairview",
            period: "2009-2013",
        },
        {
            degree: "The Complete Web Development Bootcamp",
            institution: "Udemy",
            period: "April 2021",
            certificateUrl: "https://www.udemy.com/certificate/UC-1d8891e4-6099-4963-b76b-46d6d27a18cd/",
        },
        {
            degree: "Google UX Design Professional Certificate",
            institution: "Coursera",
            period: "May 2023",
            certificateUrl: "https://www.coursera.org/account/accomplishments/certificate/8SGCLX4PHL6F",
        },
    ],
    projects: [
        {
            title: "Project 1",
            description: "Description of project 1",
            technologies: ["Next.js", "Supabase", "Tailwind CSS"],
            githubUrl: "https://github.com/username/project1",
            liveUrl: "https://project1.com",
            image: "/assets/project1.jpg",
        },
        // Add more projects as needed
    ],
    resume: {
        url: "/assets/Prince_Reyes-Oct_2024.pdf",
    },
    dashboard: {
        skillsDistribution: [
            { name: "Frontend", value: 40 },
            { name: "Backend", value: 30 },
            { name: "Database", value: 10 },
            { name: "Cloud", value: 10 },
            { name: "Tools", value: 10 },
        ],
        experienceTimeline: [
            { name: "Codebility", years: 0.25 },
            { name: "BoxedFlows", years: 0.25 },
            { name: "Freelance", years: 1.5 },
            { name: "Cyber Cafe", years: 7 },
            { name: "Education", years: 4 },
        ],
        recentProjects: [
            "Product Information Management (PIM) web application",
            "GitHub probot, chatbot, and assistant using OpenAI and Langchain",
            "FinTech and eCommerce SaaS application",
            "Multi-tenant SaaS applications",
        ],
        keyMetrics: [
            { label: "Years of Experience", value: 9 },
            { label: "Projects Completed", value: 15 },
            { label: "Technologies Mastered", value: 12 },
            { label: "Certifications", value: 2 },
        ],
    },
};