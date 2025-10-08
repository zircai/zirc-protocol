# Zirc Protocol

A Next.js application for the Zirc Protocol project.

🚀 **Live Demo**: [View on Vercel](https://vercel.com/zircai99/simple)

## Screenshot

![Streamline NextJS Template screenshot](./public/og-image.jpg)

## Getting Started

```bash
npm install
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Nextjs 15 / App Router
- Tailwind 4
- shadcn/ui

## Contributors

This project is maintained by the current development team.

## Deploy on Vercel

### First Time Setup

1. Install Vercel CLI globally (if not already installed):
```bash
npm i -g vercel
```

2. Link your project to Vercel:
```bash
vercel link
```

3. Deploy to production:
```bash
vercel --prod
```

### Subsequent Deployments

After the initial setup, you can deploy by:

1. **Automatic deployments**: Push to the `main` branch on GitHub
   - Vercel will automatically build and deploy

2. **Manual deployments**: Use the Vercel CLI
```bash
vercel --prod
```

### Environment Variables

If you need environment variables, add them in:
- Vercel Dashboard: Project Settings → Environment Variables
- Or use: `vercel env add`