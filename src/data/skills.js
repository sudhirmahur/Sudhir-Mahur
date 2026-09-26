import {
  FileCode2,
  Braces,
  Terminal as TerminalIcon,
  Atom,
  Wind,
  Layers,
  MousePointerClick,
  Server,
  Boxes,
  Layout,
  Globe,
  Database,
  GitBranch,
  AppWindow,
  SendHorizonal,
  CreditCard,
  KeyRound,
  Mail,
  ShieldCheck,
  Eye,
} from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: Braces, level: 90, description: "Core language across the stack" },
      { name: "Python", icon: TerminalIcon, level: 75, description: "Scripting & backend logic" },
      { name: "HTML5", icon: FileCode2, level: 92, description: "Semantic, accessible markup" },
      { name: "CSS3", icon: Layout, level: 88, description: "Modern layout & responsive UI" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "React.js", icon: Atom, level: 90, description: "Component-driven interfaces" },
      { name: "Redux", icon: Layers, level: 82, description: "Complex state management" },
      { name: "Tailwind CSS", icon: Wind, level: 88, description: "Utility-first styling" },
      { name: "Bootstrap", icon: MousePointerClick, level: 78, description: "Rapid responsive UI" },
      { name: "Axios", icon: SendHorizonal, level: 85, description: "API integration" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    skills: [
      { name: "Node.js", icon: Server, level: 85, description: "Server-side JavaScript" },
      { name: "Express.js", icon: Boxes, level: 84, description: "REST API design" },
      { name: "Django", icon: Globe, level: 68, description: "Python web framework" },
      { name: "REST APIs", icon: SendHorizonal, level: 86, description: "CRUD & data integration" },
    ],
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MongoDB", icon: Database, level: 82, description: "Document data modelling" },
      { name: "MySQL", icon: Database, level: 72, description: "Relational data storage" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", icon: GitBranch, level: 86, description: "Version control workflows" },
      { name: "GitHub", icon: GithubIcon, level: 86, description: "Collaboration & CI" },
      { name: "VS Code", icon: AppWindow, level: 90, description: "Daily editor" },
      { name: "Postman", icon: SendHorizonal, level: 84, description: "API testing" },
    ],
  },
  {
    id: "integrations",
    title: "Integrations",
    skills: [
      { name: "Razorpay", icon: CreditCard, level: 80, description: "Payment gateway integration" },
      { name: "JWT Authentication", icon: ShieldCheck, level: 80, description: "Secure auth flows" },
      { name: "OTP Verification", icon: KeyRound, level: 78, description: "Identity verification" },
      { name: "Email APIs", icon: Mail, level: 78, description: "Transactional notifications" },
    ],
  },
  {
    id: "accessibility",
    title: "Accessibility",
    skills: [
      { name: "WCAG 2.1", icon: Eye, level: 84, description: "Standards-driven compliance" },
    ],
  },
];
