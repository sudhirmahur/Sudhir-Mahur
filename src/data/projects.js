// Replace the placeholder github/live values with real URLs once available.
// liveUrl left as "#" renders a disabled-style "Live Demo" badge instead of a broken link.

export const projects = [
  {
    id: "wizly",
    title: "Wizly — E-commerce Platform",
    description:
      "A full-stack e-commerce platform with a customer-facing site and admin panel, handling inventory, membership tiers, and end-to-end order management.",
    image: null,
    tags: ["MERN Stack", "Redux", "Tailwind CSS", "Razorpay"],
    features: [
      "Inventory tracking, discounts, prime/normal member tags",
      "Dynamic CMS for content management",
      "Cart system with order tracking",
      "Razorpay payment integration",
      "Role-based access control",
    ],
    githubUrl: "https://github.com/sudhirmahur/wizly",
    liveUrl: "#",
    category: "Full Stack",
  },

  {
    id: "millio",
    title: "Millio — Task & Workflow Management",
    description:
      "An internal task and workflow management system built to streamline team operations, with configurable permissions and a full audit trail.",
    image: null,
    tags: ["MERN Stack", "Redux", "Tailwind CSS"],
    features: [
      "Role-based access control with configurable permissions",
      "Task workflows with audit history",
      "Status, assignment, and action tracking",
    ],
    githubUrl: "https://github.com/sudhirmahur/millio",
    liveUrl: "#",
    category: "Full Stack",
  },

  {
    id: "mongobite",
    title: "MongoBite — Food Platform",
    description:
      "A food ordering platform with full CRUD for users and restaurant records, integrated payments, and real-time order status updates.",
    image: null,
    tags: ["MERN Stack", "Redux", "Tailwind CSS", "Razorpay"],
    features: [
      "CRUD for users and restaurant records",
      "Razorpay payment integration",
      "Real-time order status updates",
      "Responsive UI with Bootstrap & Tailwind CSS",
    ],
    githubUrl: "https://github.com/sudhirmahur/mongobite",
    liveUrl: "https://quickbite1-ashen.vercel.app/",
    category: "Full Stack",
  },

  {
    id: "spendly",
    title: "Spendly — Expense Tracker",
    description:
      "A full-stack MERN expense management application for tracking income and expenses, managing categories and workspaces, and viewing financial summaries through a responsive dashboard.",
    image: null,
    tags: ["MERN Stack", "React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    features: [
      "User authentication and protected routes",
      "Income and expense transaction management",
      "Category and workspace management",
      "Financial summary dashboard",
      "REST API integration with Node.js and Express",
      "MongoDB database integration",
      "Responsive React frontend",
    ],
    githubUrl: "https://github.com/sudhirmahur/spendly-frontend",
    liveUrl: "https://spendly-frontend-mu.vercel.app/",
    category: "Full Stack",
  },

  {
    id: "dna-admin-panel",
    title: "DNA Admin Panel",
    description:
      "An admin dashboard for a medical education platform, managing students, teachers, and courses through a clean, filterable interface.",
    image: null,
    tags: ["React.js", "Tailwind CSS"],
    features: [
      "Reusable React components",
      "Axios API integration",
      "React Router navigation",
      "Data filtering, search & pagination",
    ],
    githubUrl: "https://github.com/sudhirmahur/dna-admin-panel",
    liveUrl: "#",
    category: "Frontend",
  },

  {
    id: "suru-design",
    title: "Suru Design — Creative Frontend",
    description:
      "A modern React-based frontend website focused on clean visual design, responsive layouts, smooth interactions, and reusable UI components.",
    image: null,
    tags: ["React.js", "Vite", "Tailwind CSS", "Responsive Design"],
    features: [
      "Modern responsive UI",
      "Reusable React components",
      "Responsive layouts across devices",
      "Interactive frontend experience",
      "Clean and structured component architecture",
    ],
    githubUrl: "#",
    liveUrl: "https://suru-design.vercel.app/",
    category: "Frontend",
  },

  {
    id: "lavaniya-bio-farm",
    title: "Lavaniya Bio Farm — Business Website",
    description:
      "A responsive business website for Lavaniya Bio Farm, designed with a modern visual interface to present the brand, products, and business information.",
    image: null,
    tags: ["React.js", "Vite", "Tailwind CSS", "Responsive Design"],
    features: [
      "Responsive business website",
      "Modern landing page design",
      "Reusable React components",
      "Mobile-friendly layouts",
      "Interactive UI sections",
    ],
    githubUrl: "#",
    liveUrl: "https://lavaniya-bio-farm.vercel.app/",
    category: "Frontend",
  },

  {
    id: "weather-podcast",
    title: "Weather Podcast — Weather Experience",
    description:
      "A frontend weather and podcast experience combining weather information with podcast-style content in an interactive and responsive interface.",
    image: null,
    tags: ["React.js", "Vite", "API Integration", "Tailwind CSS"],
    features: [
      "Weather information interface",
      "Podcast-style content experience",
      "Responsive React UI",
      "API-based data integration",
      "Interactive frontend components",
    ],
    githubUrl: "#",
    liveUrl: "https://weather-podcast-tau.vercel.app/",
    category: "Frontend",
  },

  {
    id: "eagle",
    title: "Eagle — Cab Service Website",
    description:
      "A modern frontend website for a cab and transportation service, designed to provide a professional booking-focused experience with responsive layouts.",
    image: null,
    tags: ["React.js", "Vite", "Tailwind CSS", "Responsive Design"],
    features: [
      "Professional cab service interface",
      "Responsive landing page",
      "Service-focused sections",
      "Modern navigation and UI",
      "Mobile-friendly design",
    ],
    githubUrl: "#",
    liveUrl: "https://eagle-beige.vercel.app/",
    category: "Frontend",
  },

  {
    id: "blog-management",
    title: "Blog Management System",
    description:
      "A React-based blog management frontend with a clean dashboard interface for managing blog content. The frontend is currently deployed and functional, while the backend deployment is still in progress.",
    image: null,
    tags: ["React.js", "Vite", "Tailwind CSS", "REST API"],
    features: [
      "Blog management dashboard",
      "React-based component architecture",
      "Responsive user interface",
      "Blog content management UI",
      "Frontend deployment on Vercel",
      "Backend integration ready",
    ],
    githubUrl: "#",
    liveUrl: "https://blog-management-ten-blue.vercel.app/",
    category: "Frontend",
  },
];

export const projectFilters = ["All", "Full Stack", "Frontend"];