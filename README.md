# Carlos Portfolio - Next.js

A modern, responsive portfolio website built with Next.js and Docker, featuring a powerful admin panel for managing projects and profile information.

## ✨ Features

- 📱 Responsive portfolio website
- 🎛️ **Admin Dashboard** - Manage projects and profile
- 🐳 Docker support
- ⚡ Next.js 14 with TypeScript
- 🎨 Tailwind CSS styling

## 🚀 Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

Visit [http://localhost:3000/admin](http://localhost:3000/admin) for the admin panel.

### Production Build

```bash
npm run build
npm start
```

## 🐳 Docker

### Build & Run with Docker

```bash
docker build -t carlos-portfolio .
docker run -p 3000:3000 carlos-portfolio
```

### Using Docker Compose

```bash
docker-compose up --build
```

The portfolio will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
.
├── app/
│   ├── admin/                 # Admin Dashboard
│   │   ├── page.tsx          # Admin main page
│   │   ├── admin.module.css   # Admin styles
│   │   └── components/        # Admin components
│   ├── api/
│   │   ├── projects/         # Projects CRUD API
│   │   └── profile/          # Profile API
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Portfolio home page
├── data/
│   ├── projects.json         # Projects data
│   └── profile.json          # Profile data
├── public/                   # Static assets
├── package.json              # NPM dependencies
├── next.config.mjs           # Next.js configuration
├── Dockerfile             # Multi-stage Docker build
└── docker-compose.yml     # Container orchestration
```

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Modern, responsive design
- 🐳 Production-ready Dockerfile (multi-stage build)
- 📦 Optimized for containerization
- 🔒 Non-root user in container for security

## Environment

- Node.js: 20 (Alpine)
- Next.js: 14.2.5
- React: 18.2.0
- TypeScript: 5.5.4
=======
# Portfolio
>>>>>>> bd5c821e1b3fcdfbc5855c80a2e3c3a21b41a752
