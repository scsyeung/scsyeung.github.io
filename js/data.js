// Portfolio Content Data
const portfolioData = {
    // Basic Info
    name: "Samuel CS Yeung | Analyst, Developer, Gamer",
    
    // Background
    background: {
        intro: "A Hong Kong-based data professional with precision-driven expertise in data engineering, analytics, and science. With a mathematical foundation and technical acumen, Samuel excels at transforming complex datasets into actionable intelligence. Currently serving as a Senior Data Scientist at Ernst & Young, he specializes in forensic applications where he develops sophisticated models and analytical frameworks that uncover insights beyond traditional methods. His interdisciplinary approach combines quantitative analysis with business context to deliver solutions that drive strategic decision-making and operational efficiency. Committed to technical excellence, he continuously expands his knowledge of emerging methodologies and technologies in the data ecosystem—a practice that enables him to synthesize established analytical frameworks with cutting-edge approaches for optimal outcomes."
    },
    
    // Experience
    experience: [
        {
            company: "Ernst & Young",
            role: "Senior Data Scientist",
            period: "2022-Present",
            achievements: [
                "Engineered high-performance Natural Language Processing (NLP) algorithms achieving 90% accuracy in analyzing and summarizing Cantonese phone calls, enhancing multilingual forensic capabilities",
                "Architected scalable Python and MS SQL solutions for complex fund flow analysis on datasets exceeding 20 million records, enabling comprehensive financial transaction monitoring",
                "Implemented OpenSearch on Linux infrastructure to transform forensic evidence processing, reducing query response time from 10 minutes to 1 second—a 99.83% improvement in operational efficiency"
            ],
            note: "Selected highlights from professional experience"
        },
        {
            company: "HKUST Business School",
            role: "Instructional Assistant",
            period: "2020-2021",
            achievements: [
                "Performed rigorous code reviews identifying an average of 15+ critical runtime and logic errors per student in Python-based ATM application assignments",
                "Provided detailed technical feedback to enhance students' understanding of software development principles and computational thinking",
                "Contributed to educational quality assurance by implementing systematic error detection methodologies for programming assignments"
            ],
            note: "Selected highlights from professional experience"
        },
        {
            company: "Hong Kong Monetary Authority (HKMA)",
            role: "Analyst Programmer",
            period: "2018-2019",
            achievements: [
                "Reengineered and optimized 7 critical Excel VBA applications for regulatory data submissions within 4 days, accelerating delivery by over 40x from the original 6-month timeline",
                "Reverse-engineered undocumented legacy code to implement robust solutions for Operational Risk Management Data Submission Exercise (DSE) and Independence Compliance Assessment (ICA)",
                "Demonstrated exceptional analytical problem-solving by transforming hardcoded, fragile systems into maintainable applications with enhanced reliability"
            ],
            note: "Selected highlights from professional experience"
        }
    ],
    
    // Education
    education: [
        {
            institution: "Hong Kong University of Science and Technology (HKUST)",
            degree: "B.B.A. Information Systems and Operations Management",
            period: "2015-2020",
            highlights: [
                "Graduated with First Class Honors",
                "Ranked 1/22 in cohort",
                "Awards: HKUST Academic Excellence Award, Academic Achievement Award in Operations Management, Mr and Mrs Hung Cheung Pui Memorial Scholarship, University Scholarship, Dean's List"
            ]
        }
    ],
    
    // Certifications
    certifications: [
        {
            name: "CFA (Chartered Financial Analyst) Level 2",
            issuer: "CFA Institute",
            year: "2024"
        },
        {
            name: "FRM (Financial Risk Manager)",
            issuer: "GARP",
            year: "2024"
        },
        {
            name: "CISSP (Certified Information Systems Security Professional)",
            issuer: "ISC²",
            year: "2023"
        },
        {
            name: "CISA (Certified Information Systems Auditor)",
            issuer: "ISACA",
            year: "2022"
        },
        {
            name: "CAMS (Certified Anti-Money Laundering Specialist)",
            issuer: "ACAMS",
            year: "2025"
        },
        {
            name: "CCIA (Certified Cryptocurrency Investigator Advanced)",
            issuer: "Blockchain Intelligence Group",
            year: "2024"
        }
    ],
    
    // Projects
    projects: [
        {
            name: "Interactive Professional Portfolio",
            description: "Designed and developed this elegant, responsive portfolio website using modern HTML5, CSS3, and JavaScript to create an immersive showcase of technical skills and professional experiences. Implemented a data-driven architecture that separates content from presentation, enabling efficient updates and maintenance. The interactive design provides a comprehensive view of qualifications beyond the constraints of a traditional resume format.",
            category: "web-development"
        },
        {
            name: "Streaming Media Platform",
            description: "Architected a high-performance video streaming service inspired by industry leaders Netflix and YouTube, utilizing Vanilla JavaScript for frontend and Node.js for backend infrastructure. Implemented advanced techniques for efficient video delivery, intelligent content caching, and intuitive user interactions, resulting in a responsive platform that handles media streaming with minimal latency.",
            category: "full-stack"
        },
        {
            name: "Manga Viewer Evolution",
            description: "Developed a full-stack digital manga reading platform in two phases: initially prototyped as a Python application to validate core functionality, then re-engineered using React and Node.js to create a responsive, modern web experience. This technical evolution demonstrates adaptability across different technology stacks and a commitment to leveraging contemporary frameworks for enhanced user experience.",
            category: "full-stack"
        },
        {
            name: "CFA Exam Resource Aggregator",
            description: "Designed and implemented a specialized Python-based web crawler that systematically extracted over 5,000 CFA certification practice questions from a comprehensive online resource. Developed a structured, searchable knowledge repository with categorized questions using Flask framework and clean UI design principles (HTML/CSS), creating an essential resource for efficient CFA exam preparation.",
            category: "web-development data-engineering financial-analytics"
        },
        {
            name: "Interactive CISA Exam Preparation Platform",
            description: "Developed a comprehensive exam preparation tool by engineering a Python-based web crawler that extracted and processed 3,400+ CISA certification practice questions. Created an interactive quiz application with performance analytics using Flask backend and responsive front-end (HTML, CSS, JavaScript), significantly enhancing study efficiency for this professional qualification.",
            category: "web-development data-engineering financial-analytics"
        },
        {
            name: "Automated Job Market Analyzer",
            description: "Engineered a sophisticated web crawler leveraging Python's scraping libraries to extract and process job listings from multiple employment platforms including Indeed and JobsDB. Developed a responsive web interface using Flask, HTML, CSS, and JavaScript to visualize job market trends and facilitate data-driven job search strategies.",
            category: "web-development data-engineering data-visualization"
        }
    ],
    
    // Project Categories
    projectCategories: [
        { id: "all", name: "All" },
        { id: "web-development", name: "Web Development" },
        { id: "full-stack", name: "Full-Stack Development" },
        { id: "data-engineering", name: "Data Engineering" },
        { id: "data-visualization", name: "Data Visualization" },
        { id: "financial-analytics", name: "Financial Analytics" }
    ],
    
    // Skills
    skills: {
        categories: [
            { id: "languages", name: "Programming Languages" },
            { id: "database", name: "Database & Query Languages" },
            { id: "webDev", name: "Web Development" },
            { id: "cloud", name: "Cloud Platforms" },
            { id: "ai", name: "AI & Machine Learning" },
            { id: "bigData", name: "Big Data Technologies" },
            { id: "dataViz", name: "Data Visualization & Analysis" },
            { id: "os", name: "Operating Systems" },
            { id: "forensic", name: "eDiscovery & Forensics Tools" }
        ],
        languages: ["Python", "Java", "C", "Golang", "JavaScript", "R", "SAS", "VBA"],
        database: ["SQL", "Presto SQL"],
        webDev: ["HTML", "CSS", "React", "Node.js"],
        cloud: ["AWS", "Azure Studio"],
        ai: ["IBM Watson"],
        bigData: ["Hadoop", "Pig", "Spark"],
        dataViz: ["Tableau", "Power BI", "Minitab"],
        os: ["Linux"],
        forensic: ["Nuix", "Relativity"]
    },
    
    // Contact
    contact: {
        linkedin: "https://www.linkedin.com/in/samuel-yeung-frm-cissp-cisa-cams-ccia-ab1a93157"
    }
};

// Export for use in main.js
if (typeof module !== 'undefined') {
    module.exports = { portfolioData };
} 