/**
 * Verified Profile Data for Lakshay Porwal
 * Single source of truth for portfolio sections and Atom AI assistant.
 * All information strictly reflects verified resume, university, and public engineering repository data.
 */

export const profileData = {
  personal: {
    name: "Lakshay Porwal",
    preferredName: "Lakshay",
    role: "Software Engineer • Full-Stack & Blockchain Developer",
    headline: "Building Scalable Web Systems, Blockchain Architecture & AI Applications",
    bio: "Computer Science undergraduate at Rajasthan Technical University, Kota (Graduation 2027) with a 9.30 CGPA. Focused on building resilient full-stack applications, decentralized smart contracts on Ethereum, and practical AI integrations with clean architecture and verified metrics.",
    location: "Kota, Rajasthan, India",
    email: "lakshayporwal28@gmail.com",
    phone: "+91 9376389275",
    availability: "Actively seeking Software Engineering, Full-Stack & Blockchain Internships",
    links: {
      github: "https://github.com/lakshay-porwal",
      linkedin: "https://www.linkedin.com/in/lakshay-porwal",
      leetcode: "https://leetcode.com/u/porwal_lakshay2005/",
      geeksforgeeks: "https://www.geeksforgeeks.org/user/lakshaypo8y3i/",
      portfolio: "https://lakshay-portfolio-q7ck.vercel.app/",
    },
    photo: "/images_project/lakshay_photo.jpeg",
    portrait: "/images_project/photo_lakshay.jpeg",
    resume: "/lakshayResume_new.pdf",
  },

  education: [
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science Engineering",
      institution: "Rajasthan Technical University",
      location: "Kota, Rajasthan, India",
      period: "2023 – 2027",
      status: "Currently Pursuing (Expected Graduation: 2027)",
      scoreType: "CGPA",
      score: "9.30/10",
      highlights: [
        "Consistent academic excellence with 9.30 CGPA",
        "Ranked among the Top 5% of the Computer Science cohort",
        "Core CS coursework in Data Structures & Algorithms, OOP, DBMS, Computer Networks, and Operating Systems",
        "Coordinated ESC 2023 technical conference",
      ],
    },
    {
      degree: "Higher Secondary (Class XII)",
      field: "Science & Mathematics",
      institution: "Modi Public School",
      location: "Kota, Rajasthan, India",
      period: "2022 – 2023",
      scoreType: "Score",
      score: "82%",
      highlights: [
        "Strong foundation in analytical mathematics, physical sciences, and algorithmic thinking",
      ],
    },
  ],

  experience: [
    {
      role: "Technical Intern",
      company: "SoftSensor.ai",
      type: "Remote",
      location: "Remote",
      duration: "May 2026 – June 2026",
      description:
        "Engineered backend services for Orbit, designing scalable APIs and efficient relational database architecture.",
      highlights: [
        "Built 51+ RESTful APIs and designed 10+ relational database tables, improving backend scalability, feature integration, production readiness, application performance, and data consistency.",
        "Engineered backend workflows for Orbit to support scalable workspace hierarchy, project tracking, and real-time collaboration.",
        "Optimized relational database queries and data models with Prisma and PostgreSQL for low-latency operations.",
      ],
      technologies: ["React.js", "Express.js", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Docker", "REST APIs"],
    },
    {
      role: "Software Developer Intern",
      company: "Kriscent Techno Hub Pvt Ltd",
      type: "On-site",
      location: "Kota, Rajasthan",
      duration: "June 2025 – July 2025",
      description:
        "Delivered web applications by integrating REST APIs and implementing end-to-end application workflows.",
      highlights: [
        "Delivered web applications by integrating REST APIs and implementing end-to-end application workflows.",
        "Established secure authentication and optimized performance to improve application responsiveness and usability.",
        "Refactored frontend components to enhance cross-device responsiveness and accessibility.",
      ],
      technologies: ["React.js", "JavaScript", "REST APIs", "Tailwind CSS", "Firebase"],
    },
  ],

  achievements: [
    {
      title: "AIR 128 in AINCAT 2026",
      description: "Secured AIR 128 in AINCAT 2026 (Naukri Campus) among 4,00,000+ participants nationwide.",
      metric: "AIR 128 / 400K+",
    },
    {
      title: "500+ DSA Problems Solved",
      description: "Solved 500+ DSA and algorithmic problems across LeetCode and GeeksforGeeks, demonstrating algorithmic rigor in trees, graphs, dynamic programming, and data structures.",
      metric: "500+ Problems",
    },
    {
      title: "Top 20 Coders on GeeksforGeeks",
      description: "Ranked among the Top 20 coders in the GeeksforGeeks Institute Ranking among 2,000+ students.",
      metric: "Top 20 / 2,000+",
    },
    {
      title: "Finalist in 5+ Hackathons",
      description: "Finalist in 5+ national hackathons and ranked among the Top 5% of the Computer Science cohort.",
      metric: "Top 5% Cohort",
    },
    {
      title: "ESC 2023 Conference Coordinator",
      description: "Coordinated the ESC 2023 Conference with 200+ participants, leading event operations, logistics, and technical execution.",
      metric: "200+ Delegates",
    },
  ],

  skillCategories: {
    "Programming Languages": ["C++", "Python", "JavaScript", "TypeScript", "C", "Rust"],
    "Core CS": ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks", "Operating Systems"],
    "Web & Backend": ["React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "REST APIs", "JWT", "Socket.IO"],
    "Databases": ["SQL", "PostgreSQL", "MongoDB", "MySQL", "Redis", "Prisma"],
    "Tools & DevOps": ["Git", "GitHub", "Docker", "Postman", "Linux", "CI/CD", "Vite", "Vercel"],
    "AI & Blockchain": ["OpenAI API", "RAG", "AI Agents", "Solidity", "Ethereum", "Hardhat", "Web3.js", "Ethers.js"],
  },

  projects: [
    {
      id: "orbit",
      title: "Orbit",
      tagline: "Workspace Management & Real-Time Collaboration Platform",
      category: "Full Stack",
      featured: true,
      description:
        "A full-stack collaboration platform for workspace management, project tracking, and real-time collaboration. Engineered backend services, designed 10+ relational models, and created robust workflows for team coordination.",
      problem:
        "Modern development teams face fragmented collaboration tools that lack real-time synchronization, structured task hierarchies, and resilient backend architecture.",
      contribution:
        "Engineered backend services with Express.js, PostgreSQL, and Prisma. Built 51+ RESTful APIs, designed 10+ relational models, integrated Redis caching and Socket.IO for real-time collaboration with Docker containerization.",
      tech: ["React.js", "Tailwind CSS", "Express.js", "PostgreSQL", "Prisma", "Redis", "Socket.IO", "Docker", "JWT"],
      github: "https://github.com/lakshay-porwal/Orbit",
      live: "https://orbit-seven-hazel.vercel.app/",
      image: "/images_project/orbit.png",
      metrics: "Built 51+ APIs and designed 10+ relational tables for real-time scale",
    },
    {
      id: "garuda-ai",
      title: "Garuda AI",
      tagline: "AI-Powered Career Guidance & Interview Assistant",
      category: "AI / ML",
      featured: true,
      description:
        "An AI-powered LLM-based assistant for career guidance, interview preparation, and technical query resolution with JWT authentication and Redis-accelerated caching.",
      problem:
        "Candidates preparing for technical interviews lack personalized, instant feedback and suffer from high latency in repetitive AI queries.",
      contribution:
        "Developed full-stack architecture with React.js frontend and Node.js/Express backend. Integrated JWT Authentication, Redis Caching, and OpenAI APIs, reducing response times by 35%.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Redis", "JWT", "OpenAI API"],
      github: "https://github.com/lakshay-porwal/GarudaAI",
      live: "https://garuda-ai-z2ye.vercel.app/",
      image: "/images_project/garuda_ai.png",
      metrics: "Improved response speed by 35% with Redis caching and OpenAI streaming",
    },
    {
      id: "votechain",
      title: "VoteChain",
      tagline: "Decentralized Ethereum Voting Platform",
      category: "Blockchain",
      featured: true,
      description:
        "A decentralized voting dApp for secure, transparent, and tamper-proof voting processes on Ethereum. Eliminates central tampering and secures elections with smart contract cryptography.",
      problem:
        "Traditional digital voting systems rely on centralized servers vulnerable to unauthorized manipulation, opacity, and single points of failure.",
      contribution:
        "Architected Solidity smart contracts, implemented voter authorization and ballot tallying logic on Ethereum with Hardhat, integrated MetaMask via Web3.js, reduced gas costs by 25%, and enabled wallet-based authentication.",
      tech: ["React.js", "Solidity", "Ethereum", "Hardhat", "Web3.js", "MetaMask"],
      github: "https://github.com/lakshay-porwal/VoteChain-Hackathon-Project-",
      live: "https://vote-chain-hackathon-project.vercel.app/",
      image: "/images_project/project.png",
      metrics: "Reduced gas costs by 25% and enabled wallet-based authentication",
    },
    {
      id: "recipedia",
      title: "Recipedia",
      tagline: "Responsive Recipe Discovery & Meal Planning App",
      category: "Full Stack",
      featured: false,
      description:
        "A recipe discovery application built with React and Vite that guides home chefs from ingredients in their pantry to step-by-step cooking workflows.",
      problem:
        "Finding meals based on partial ingredients is frequently difficult on generic blogs cluttered with ads and slow load times.",
      contribution:
        "Designed responsive mobile-first UI in React, integrated public culinary REST APIs, built keyword filtering, and optimized rendering to achieve 30% faster search retrieval.",
      tech: ["React.js", "Vite", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/lakshay-porwal/Recipedia",
      live: "https://recipedia-flax.vercel.app/",
      image: "/images_project/image.png",
      metrics: "Reduced recipe search latency by ~30% with optimized client state",
    },
    {
      id: "eaglesync-ai",
      title: "EagleSyncAI",
      tagline: "AI Career Intelligence & Interview Practice Workspace",
      category: "AI / ML",
      featured: false,
      description:
        "An AI-driven career intelligence workspace that turns candidate profiles, problem-solving history, and target roles into continuous, actionable preparation loops.",
      problem:
        "Engineers preparing for technical interviews lack personalized feedback on their problem-solving blind spots and structured study progression.",
      contribution:
        "Built modular React 19 + TypeScript frontend and Node.js backend integrating AI prompts to generate tailored assessments, progress tracking, and readiness feedback.",
      tech: ["React 19", "TypeScript", "Node.js", "Express.js", "AI Integration"],
      github: "https://github.com/lakshay-porwal/EagleSyncAI",
      live: "https://eagle-sync-ai.vercel.app/",
      image: "/images_project/eaglesync_ai.png",
      metrics: "Personalized multi-tier career feedback loop for technical candidates",
    },
    {
      id: "lumora",
      title: "Lumora",
      tagline: "Smart Building Energy Optimization & Telemetry Platform",
      category: "Full Stack",
      featured: false,
      description:
        "A smart building analytics and energy-optimization platform designed to ingest sensor telemetry, monitor zone occupancy, and automate HVAC and lighting schedules for conservation.",
      problem:
        "Commercial facilities waste substantial electrical energy heating, cooling, and lighting unoccupied spaces due to static schedules.",
      contribution:
        "Implemented real-time telemetry dashboards, anomaly detection triggers, automated scheduling algorithms, and responsive system status visualization.",
      tech: ["React.js", "TypeScript", "Node.js", "IoT Telemetry", "Tailwind CSS"],
      github: "https://github.com/lakshay-porwal",
      live: null,
      image: "/images_project/lumora.png",
      metrics: "Real-time occupancy-aware scheduling and energy load monitoring",
    },
    {
      id: "algochat",
      title: "AlgoChat",
      tagline: "AI-Assisted DSA Learning Chatbot",
      category: "AI / ML",
      featured: false,
      description:
        "An educational chatbot built to guide computer science students through data structures and algorithms using structured decision-tree workflows and interactive hints.",
      problem:
        "Beginners learning DSA often get stuck on specific edge cases without guided, step-by-step algorithmic hints.",
      contribution:
        "Created logic flows, algorithmic hints taxonomy, and interactive web interface boosting study engagement.",
      tech: ["JavaScript", "Decision Trees", "AI Logic", "HTML5/CSS3"],
      github: "https://github.com/lakshay-porwal/CHATBOT_DSA",
      live: "https://lakshay-porwal.github.io/CHATBOT_DSA/",
      image: "/images_project/algo_chat.png",
      metrics: "Boosted learning efficiency by 40% with structured problem flows",
    },
  ],
};
