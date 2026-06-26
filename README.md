# Muhammad Sajid — Portfolio Website

**Live:** https://portfolio-website-kappa-orpin-99.vercel.app

A personal portfolio website built with React, Vite, Tailwind CSS, and an Express backend for the contact form.

## Overview

Single-page portfolio for a Full-Stack MERN Developer. Sections include hero, about, skills, projects, achievements, and contact. The Express backend handles contact form submissions and sends emails via the Resend API.

## Tech Stack

**Frontend**
- React 19 + Vite
- Tailwind CSS
- Framer Motion
- Iconify

**Backend**
- Node.js + Express
- Resend (email API)
- express-rate-limit

## Features

- Fully responsive single-page layout
- Animated hero with interactive dot canvas background
- Skill categories: Frontend, Backend, Databases, Tools, Concepts
- Project showcase with paginated grid (desktop) and full list (mobile)
- Contact form with client + server validation, rate limiting, and email delivery
- Scroll-aware navbar with mobile icon nav
- Error boundaries around canvas and main content
- Request logging on the backend

## Project Structure

```text
Portfolio-Website/
  backend/
    server.js          # Express server — contact API + email
    .env.example       # Environment variable template
    package.json
  frontend/
    public/
      icon.png         # Browser tab favicon
      resume.pdf
    src/
      assets/          # Images
      components/      # Layout, sections, UI components
      constants/       # Animation + UI constants
      context/         # AppContext provider
      data/            # portfolioData.js — all content lives here
      hooks/           # useContactForm, useTiltAnimation, useAppContext
      services/        # contactService.js
      utils/           # navigation helpers
    index.html
    tailwind.config.js
    vite.config.js
  package.json         # Root — runs both apps with concurrently
  README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install Dependencies

From the repository root:

```bash
npm run install:all
```

Or install each app separately:

```bash
npm install --prefix backend
npm install --prefix frontend
```

### Environment Setup

Copy the backend example env and fill in your values:

```bash
cp backend/.env.example backend/.env
```

```env
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
CONTACT_RECEIVER=you@example.com
RESEND_API_KEY=re_your_resend_api_key
```

> Both `CONTACT_RECEIVER` and `RESEND_API_KEY` are validated at startup — the server will not boot without them.

### Run in Development

Start both apps from the repository root:

```bash
npm run dev
```

Or individually:

```bash
npm run dev:frontend   # http://localhost:5173
npm run dev:backend    # http://localhost:5000
```

The frontend proxies `/api` requests to the backend in development.

### Build

```bash
npm run build --prefix frontend
```

## Customisation

All portfolio content — name, role, about text, skills, projects, achievements, social links, and contact info — is defined in a single file:

```
frontend/src/data/portfolioData.js
```

Edit that file to update any content without touching component code.

## Contact

- Email: muhammadsajidrajput20@gmail.com
- GitHub: https://github.com/Muhammad-Sajid-Rajput
- LinkedIn: https://www.linkedin.com/in/muhammad-sajid-066248264/

## License

MIT
