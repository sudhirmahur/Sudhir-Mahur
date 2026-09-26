# Sudhir — Frontend Developer Portfolio

A modern, animated personal portfolio built with React, Vite, Tailwind CSS, React Router, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
├── assets/          Images and icons
├── components/      Reusable UI components
│   └── sections/    Page sections (Hero, About, Skills, etc.)
├── context/         Theme context/provider
├── data/            Content — projects, skills, experience, education, social links
├── hooks/           useTheme, useCountUp, scroll animation variants
├── layouts/         MainLayout (header + footer shell)
├── pages/           Route-level pages
├── routes/          React Router route definitions
├── App.jsx
├── main.jsx
└── index.css
```

## Customizing content

All editable content lives in `src/data/`:

- `socialLinks.js` — GitHub, LinkedIn, email, and resume link (points to `/public/resume.pdf`)
- `projects.js` — project cards; set `liveUrl` to a real URL once deployed, otherwise it renders a "Live demo coming soon" state
- `skills.js`, `experience.js`, `education.js` — update with your own details

## Resume

Add your resume file to `public/resume.pdf` — the Header and Hero "Resume" buttons already link to `/resume.pdf`.

## Theme

Dark mode is the default. The toggle in the header persists the user's choice to `localStorage` and falls back to system preference only when no choice has been saved yet.

## Accessibility

Semantic landmarks, visible focus states, labeled form fields, and `prefers-reduced-motion` support are built in.
