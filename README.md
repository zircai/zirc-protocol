# zIRC.ai - BSC AI Terminal

AI-powered terminal for Binance Smart Chain. Ask natural questions about BSC data, get instant insights. No dashboards, just terminal-style answers for degens.

🚀 **Live Demo**: [View on Vercel](https://vercel.com/zircai99/simple)

## Features

- 🤖 **AI-Powered Queries** - Natural language BSC data analysis
- 🔗 **Wallet Integration** - MetaMask, Trust Wallet, WalletConnect, Coinbase
- 💰 **Real-time Prices** - Live BSC token prices and market data
- 🎯 **Terminal Interface** - Retro CLI aesthetic for crypto natives
- 📱 **Mobile Support** - Responsive design with mobile wallet connections
- 🔄 **DeFi Integration** - Pools, farms, staking, and swap data
- 🐋 **Whale Tracking** - Monitor large transactions and movements
- ⛽ **Gas Optimization** - Real-time gas prices for BSC
- 🔒 **Security Tools** - Token approval monitoring
- 📊 **30+ Commands** - Comprehensive command system

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

## Available Commands

The BSC AI Terminal supports **30+ commands** organized by category:

### 💰 Portfolio & Wallet
- `/portfolio` - Complete portfolio overview with token breakdown
- `/balance` - Check your BNB balance
- `/approvals` - Review token approvals for security

### 📊 Market Data
- `/top` - Top performing tokens (24h)
- `/trending` - Trending tokens with reasons
- `/market` - Overall BSC market overview
- `/gas` - Current gas prices (slow/standard/fast/instant)
- `/price [token]` - Get specific token price

### 🔄 DeFi & Trading
- `/pools` - Top liquidity pools with APY
- `/farms` - Yield farming opportunities
- `/staking` - Staking rewards and options
- `/swap [token1] [token2]` - Get swap rates and fees

### 🐋 Analytics
- `/whale` - Recent whale movements
- `/history [token]` - Price history with ATH/ATL
- `/convert [amount] [from] [to]` - Currency converter
- `/holders [token]` - Top token holders

### 🛠️ System
- `/help` - Show all available commands
- `/status` - System status and uptime
- `/version` - Version information
- `/clear` - Clear terminal

## Natural Language Queries

You can also use natural language instead of commands:

**Portfolio:**
- "What's my portfolio worth?"
- "Show my token holdings"
- "How much BNB do I have?"

**Market:**
- "Show me top performing tokens"
- "What are current gas prices?"
- "CAKE price today"

**DeFi:**
- "Best yield farming opportunities"
- "Top liquidity pools"
- "Staking rewards for BNB"

**Analytics:**
- "Whale movements today"
- "CAKE price history"
- "Top BNB holders"

## Tech Stack

- Next.js 15 / App Router
- Tailwind CSS 4
- Wagmi v2 (wallet integration)
- React Query (data fetching)
- WalletConnect v2 (mobile wallets)
- shadcn/ui components

## Documentation

- [Terminal Commands Guide](./TERMINAL-COMMANDS.md) - Complete command reference
- [Wallet Setup Guide](./WALLET-SETUP.md) - Wallet integration setup
- [Implementation Details](./IMPLEMENTATION-COMPLETE.md) - Technical implementation
- [API Setup Guide](./API-SETUP-GUIDE.md) - API configuration

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