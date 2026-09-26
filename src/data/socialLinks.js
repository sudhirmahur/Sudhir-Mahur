import { Mail, FileText, Phone } from "lucide-react";
import GithubIcon from "../components/icons/GithubIcon";
import LinkedinIcon from "../components/icons/LinkedinIcon";

// Single source of truth for every outbound link used across the site.
// Update these values and every component referencing them updates too.
export const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/sudhirmahur",
    icon: GithubIcon,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/sudhirmahur",
    icon: LinkedinIcon,
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:sudhirmahur29@gmail.com",
    icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+918477959291",
    icon: Phone,
  },
{
  id: "resume",
  label: "View Resume",
  href: " /Sudhir_Resume.pdf",
  icon: FileText,
},
];

export const contactInfo = {
  name: "Sudhir Mahur",
  role: "Full Stack Developer",
  email: "sudhirmahur29@gmail.com",
  phone: "+91 8477959291",
  location: "Ghaziabad, U.P, India",
  availability: "Open to opportunities",
};
