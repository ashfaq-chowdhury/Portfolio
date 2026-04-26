# Carlos Portfolio - Next.js

A modern, responsive portfolio website built with Next.js and Docker.

## Quick Start

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

### Production Build

```bash
npm run build
npm start
```

## Docker

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

## Project Structure

```
.
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── public/                # Static assets
├── package.json           # NPM dependencies
├── next.config.mjs        # Next.js configuration
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
