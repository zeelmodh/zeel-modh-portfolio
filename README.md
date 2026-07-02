# Zeel Modh - Premium Engineering Portfolio

A world-class, dark luxury, enterprise-grade personal portfolio website for **Zeel Modh**, Senior Android & Flutter Developer, Team Lead, and Mobile Architect with 4.5+ years of experience.

This application is built with a premium design system resembling elite product websites (like Stripe, Vercel, Linear, and Apple) featuring smooth animations, keyboard shortcuts, and interactive system design diagrams.

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (CSS-first variables theme)
- **Animations**: Framer Motion + Lenis Smooth Scroll
- **Icons**: Lucide React + React Icons
- **Routing**: React Router (Hash Router for zero-config static refreshes)
- **Deployment**: GitHub Pages (`gh-pages` branch & automated GitHub Actions workflow)

---

## 📁 Repository Structure

```
src/
├── animations/         # Framer Motion transitions and custom easings
├── assets/             # Resume CV PDF and media resources
├── components/         # Reusable UI widgets
│   ├── ui/             # Command palette, orbits, buttons, stat tickers
│   └── layout/         # Responsive Navbar, footer, and progress utilities
├── constants/          # Main resume datasets (15 projects, history, certifications)
├── hooks/              # Custom hooks: useLenis, useKeyPress
├── layouts/            # Layout shells and page-transition wrappers
├── pages/              # Main view screens (Home, Projects, Details, Architecture)
├── styles/             # Tailwind CSS v4 configuration and global scroll normalization
├── types/              # Domain-specific TypeScript declarations
└── utils/              # Helper utilities (classname merge, clipboard)
```

---

## ⚡ Setup & Development

### 1. Installation
Install the project dependencies using Yarn:
```bash
yarn install
```

### 2. Run Development Server
Spin up the local development engine:
```bash
yarn dev
```
The site will be served locally at `http://localhost:5173/zeelmodh-portfolio/`.

### 3. Compilation
Check TypeScript compile and build the distribution bundle:
```bash
yarn build
```

---

## 🚀 Deployment Guide (GitHub Pages)

We have configured two methods to deploy this site directly to GitHub Pages.

### Method A: Automated GitHub Actions (Recommended)
This repository includes a pre-configured CI/CD workflow at [deploy.yml](file:///Users/dhruvpatellimerr/Documents/Vatsal/Zeel/Portfolio/.github/workflows/deploy.yml).

1. Push your changes to the `main` or `master` branch.
2. The Action will automatically install packages, compile TypeScript, build assets, and deploy to the `gh-pages` branch.
3. In your GitHub Repository Settings under **Pages**, ensure the build source is set to **Deploy from a branch** and target the **`gh-pages`** branch (pointing to `/` root folder).

### Method B: Manual Command-Line Deploy
Alternatively, you can build and publish directly from your terminal:

```bash
yarn deploy
```
This runs the `gh-pages` publishing script, building the app and pushing it to the target deployment branch in a single command.
