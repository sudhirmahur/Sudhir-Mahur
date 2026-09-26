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
    githubUrl: "https://github.com/sudhirmahur29/wizly",
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
    githubUrl: "https://github.com/sudhirmahur29/millio",
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
    githubUrl: "https://github.com/sudhirmahur29/mongobite",
    liveUrl: "#",
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
    githubUrl: "https://github.com/sudhirmahur29/dna-admin-panel",
    liveUrl: "#",
    category: "Frontend",
  },
];

export const projectFilters = ["All", "Full Stack", "Frontend"];
