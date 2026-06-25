# Portfolio Website

A personal portfolio website built with React, Vite, Tailwind CSS, and a small Express backend for the contact form.

## Overview

The frontend presents a single-page portfolio with sections for the hero, about, skills, projects, achievements, and contact details. The backend handles contact form submissions and sends email through SMTP.

## Tech Stack

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- Iconify
- Express
- Nodemailer

## Features

- Responsive single-page layout
- Animated hero and section reveals
- Project showcase with card-based navigation
- Contact form with validation and rate limiting
- Reusable UI components and shared portfolio data

## Project Structure

```text
Portfolio-Website/
  backend/
    server.js
    package.json
  frontend/
    public/
    src/
    index.html
    vite.config.js
  README.md
```

## Getting Started

### Prerequisites

- Node.js 18 or newer
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

### Run in Development

Start both apps together from the repository root:

```bash
npm run dev
```

Frontend development server:

```bash
npm run dev:frontend
```

Backend development server:

```bash
npm run dev:backend
```

The frontend runs on `http://localhost:5173` and proxies `/api` requests to the backend on `http://localhost:5000`.

## Backend Environment Variables

Create a backend `.env` file with the SMTP settings required for sending contact emails:

```env
PORT=5000
FRONTEND_ORIGIN=http://localhost:5173
CONTACT_RECEIVER=you@example.com
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=you@example.com
SMTP_PASS=your-smtp-password
FROM_EMAIL=you@example.com
```

The backend validates `CONTACT_RECEIVER` on startup and returns `503` from the contact endpoint until SMTP is configured.

## Build

Build the frontend for production:

```bash
npm run build --prefix frontend
```

## Contact

- Email: muhammadsajidrajput20@gmail.com
- GitHub: https://github.com/Muhammad-Sajid-Rajput
- LinkedIn: https://www.linkedin.com/in/muhammad-sajid-066248264/

## License

This project is licensed under the MIT License.
