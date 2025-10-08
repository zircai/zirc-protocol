# zIRC.ai - BSC AI Terminal

AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data, get instant insights. No dashboards, just terminal-style answers for degens.

🚀 **Live Demo**: [View on Vercel](https://vercel.com/zircai99/simple)

## Features

- 🤖 **AI-Powered Queries** - Natural language BSC data analysis
- 🔗 **Wallet Integration** - MetaMask, Trust Wallet, WalletConnect, Coinbase
- 💰 **Real-time Prices** - Live BSC token prices and market data
- 🎯 **Terminal Interface** - Retro CLI aesthetic for crypto natives
- 📱 **Mobile Support** - Responsive design with mobile wallet connections

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the homepage, or [http://localhost:3000/terminal](http://localhost:3000/terminal) for the AI Terminal.

## Environment Setup

Create `.env.local`:

```bash
# Required for WalletConnect (mobile wallets)
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

Get your WalletConnect Project ID from [cloud.walletconnect.com](https://cloud.walletconnect.com)

## Usage

1. **Connect Wallet** - Click "Connect Wallet" in the navbar
2. **Visit Terminal** - Go to `/terminal` or click "Terminal" in navbar
3. **Ask Questions** - Try queries like:
   - "CAKE price"
   - "my balance"
   - "top BNB holders"
   - "BNB volume today"

## Tech Stack

- Next.js 15 / App Router
- Tailwind CSS 4
- Wagmi v2 (wallet integration)
- React Query (data fetching)
- WalletConnect v2 (mobile wallets)
- shadcn/ui components

## Documentation

- [Wallet Setup Guide](./WALLET-SETUP.md)
- [Implementation Details](./IMPLEMENTATION-COMPLETE.md)
- [API Setup Guide](./API-SETUP-GUIDE.md)

## Contributors

This project is maintained by the zIRC development team.

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