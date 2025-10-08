# BSC AI Terminal - Complete Command Reference

Comprehensive guide to all available commands in the zIRC.ai BSC AI Terminal.

## Overview

The BSC AI Terminal supports **30+ commands** and **natural language processing** for comprehensive BSC data analysis.

---

## Command Categories

### 💰 Portfolio & Wallet Commands

#### `/portfolio`
Shows complete portfolio overview with token breakdown and total value.

**Example:**
```
> /portfolio

💰 Portfolio Overview
Total Value: $15,420.50

Holdings:
BNB: 12.5 ($4,005.63) 📈 +2.34%
CAKE: 850.2 ($1,606.88) 📉 -1.23%
BUSD: 5000 ($5,000.00) 📈 +0.01%
USDT: 2808.99 ($2,808.99) 📈 +0.01%
```

**Requirements:** Wallet connection required

---

#### `/balance`
Check your BNB balance.

**Example:**
```
> /balance
Your BNB Balance: 12.5 BNB
```

**Requirements:** Wallet connection required

---

#### `/approvals`
Review token approvals for security monitoring.

**Example:**
```
> /approvals

🔒 Token Approvals

1. CAKE → PancakeSwap Router
   Amount: Unlimited (Risk: Medium)

2. BNB → 1inch
   Amount: Unlimited (Risk: Low)

⚠️ Review and revoke unnecessary approvals for security.
```

**Requirements:** Wallet connection required

---

### 📊 Market Data Commands

#### `/top`
Shows top performing tokens in the last 24 hours.

**Example:**
```
> /top

📈 Top Performing Tokens (24h)

1. PEPE: $0.0000018 +12.34% (Vol: $45.2M)
2. BONK: $0.000023 +8.76% (Vol: $23.1M)
3. FLOKI: $0.000012 +6.54% (Vol: $18.7M)
4. SHIB: $0.000024 +4.32% (Vol: $67.3M)
5. BNB: $320.45 +2.34% (Vol: $1.2B)
```

---

#### `/trending`
Shows trending tokens with reasons for popularity.

**Example:**
```
> /trending

🔥 Trending Tokens

1. PEPE: Meme coin rally (Vol: +245%)
2. CAKE: PancakeSwap v4 announcement (Vol: +89%)
3. BONK: Solana bridge activity (Vol: +156%)
4. FLOKI: Community burn event (Vol: +78%)
```

---

#### `/market`
Overall BSC market overview with key metrics.

**Example:**
```
> /market

📊 BSC Market Overview

Market Cap: $89.2B
24h Volume: $2.1B
Active Tokens: 1247
Top Gainer: PEPE (+12.34%)
Top Loser: SAFEMOON (-8.76%)
```

---

#### `/gas`
Current gas prices for BSC transactions with estimated times.

**Example:**
```
> /gas

⛽ Current Gas Prices (BSC)

🐌 Slow: 3 gwei (~5 min) - $0.12
🚶 Standard: 5 gwei (~2 min) - $0.20
🏃 Fast: 8 gwei (~30 sec) - $0.32
🚀 Instant: 12 gwei (~10 sec) - $0.48
```

---

#### `/price [token]`
Get specific token price with 24h change.

**Usage:** `/price [TOKEN]`

**Example:**
```
> /price CAKE
CAKE Price: $1.89 📉 -1.23%
```

**Supported tokens:** BNB, CAKE, BUSD, USDT, ETH, and more

---

### 🔄 DeFi & Trading Commands

#### `/pools`
Top liquidity pools with APY and TVL.

**Example:**
```
> /pools

🏊 Top Liquidity Pools

1. BNB/CAKE: 45.2% APY (TVL: $12.5M)
2. BNB/BUSD: 23.8% APY (TVL: $8.7M)
3. CAKE/USDT: 38.1% APY (TVL: $5.2M)
4. ETH/BNB: 31.5% APY (TVL: $3.8M)
```

---

#### `/farms`
Yield farming opportunities with APY and multipliers.

**Example:**
```
> /farms

🚜 Top Yield Farms

1. CAKE-BNB LP: 67.3% APY (40x, TVL: $15.2M)
2. BNB-BUSD LP: 52.1% APY (30x, TVL: $8.9M)
3. ETH-BNB LP: 48.7% APY (25x, TVL: $6.3M)
4. USDT-BUSD LP: 35.2% APY (20x, TVL: $4.1M)
```

---

#### `/staking`
Staking rewards and requirements.

**Example:**
```
> /staking

🥩 Staking Opportunities

1. BNB: 8.5% APY (Min: 1 BNB, Lock: 30 days)
2. CAKE: 12.3% APY (Min: 10 CAKE, Lock: 7 days)
3. ETH: 6.7% APY (Min: 0.1 ETH, Lock: 14 days)
```

---

#### `/swap [token1] [token2]`
Get swap rates between two tokens with fees.

**Usage:** `/swap [TOKEN1] [TOKEN2]`

**Example:**
```
> /swap BNB CAKE

🔄 Swap Rate: BNB → CAKE

Rate: 169.5 CAKE per BNB
Slippage: 0.1%
Fee: $0.20
```

---

### 🐋 Analytics Commands

#### `/whale`
Recent whale movements and large transactions.

**Example:**
```
> /whale

🐋 Recent Whale Movements

1. 0x8894...a1b2 Bought 1,234 BNB ($395,000)
2. 0x4567...c3d4 Sold 850 CAKE ($1,606)
3. 0x7890...e5f6 Transferred 5,000 BUSD ($5,000)
```

---

#### `/history [token]`
Price history with ATH/ATL data and performance.

**Usage:** `/history [TOKEN]`

**Example:**
```
> /history BNB

📈 BNB Price History

All-Time High: $686.31
All-Time Low: $0.10
7d Change: +5.2%
30d Change: +12.8%
```

---

#### `/convert [amount] [from] [to]`
Currency converter with real-time rates.

**Usage:** `/convert [AMOUNT] [FROM] [TO]`

**Example:**
```
> /convert 100 BNB USD

💱 Currency Conversion

100 BNB = 32,045.00 USD
```

**Supported conversions:** BNB, CAKE, BUSD, USDT, ETH, USD

---

#### `/holders [token]`
Top token holders with balances.

**Usage:** `/holders [TOKEN]`

**Example:**
```
> /holders BNB

Top BNB Holders:
1. 0x1234...abcd - 150,000 BNB
2. 0x5678...efgh - 98,500 BNB
3. 0x9abc...ijkl - 75,200 BNB
4. 0xdef0...mnop - 62,800 BNB
5. 0x1357...qrst - 51,500 BNB
```

---

### 🛠️ System Commands

#### `/help`
Shows comprehensive help with all commands organized by category.

**Example:**
```
> /help

🚀 zIRC.ai BSC Terminal Commands

💰 Portfolio & Balances:
• /portfolio - Complete portfolio overview
• /balance - Check BNB balance
• /approvals - Review token approvals

📊 Market Data:
• /top - Top performing tokens
• /trending - Trending tokens
• /market - Market overview
• /gas - Current gas prices

[... full help display ...]
```

---

#### `/status`
System status and uptime information.

**Example:**
```
> /status

🟢 System Status

BSC Network: Connected ✅
API Status: Operational ✅
Last Update: 10:45:32 AM
Queries Processed: 47
Uptime: 99.9%
```

---

#### `/version`
Version information.

**Example:**
```
> /version
zIRC.ai BSC Terminal v2.0
Built for degens, by degens 🚀
```

---

#### `/clear`
Clears the terminal screen and history.

**Example:**
```
> /clear
Terminal cleared. Type your query or use /help for commands.
```

---

## Natural Language Processing

The terminal understands natural language queries! Here are comprehensive examples:

### Portfolio Queries

**Natural Language:**
- "What's my portfolio worth?"
- "Show my token holdings"
- "My BNB balance"
- "How much do I have?"
- "What do I own?"
- "My holdings"

**What it does:** Automatically detects portfolio-related queries and shows your complete holdings.

---

### Market Queries

**Natural Language:**
- "Show me top performing tokens"
- "What are current gas prices?"
- "CAKE price today"
- "Trending tokens"
- "Market overview"
- "Best performing tokens"
- "Top gainers"

**What it does:** Fetches market data, prices, and trending information.

---

### DeFi Queries

**Natural Language:**
- "Best yield farming opportunities"
- "Top liquidity pools"
- "Staking rewards for BNB"
- "BNB to CAKE swap rate"
- "Highest APY farms"
- "Where can I stake?"

**What it does:** Shows DeFi opportunities including pools, farms, and staking options.

---

### Analytics Queries

**Natural Language:**
- "Whale movements today"
- "CAKE price history"
- "Top BNB holders"
- "Convert 100 BNB to USD"
- "Large transactions"
- "Who are the biggest holders?"

**What it does:** Provides analytics, historical data, and whale tracking.

---

### Transaction Queries

**Natural Language:**
- "Explain transaction 0x123..."
- "What happened in tx 0xabc..."
- "Transaction details"

**What it does:** Analyzes and explains blockchain transactions.

---

### Volume Queries

**Natural Language:**
- "BNB volume today"
- "CAKE trading volume"
- "How much volume?"

**What it does:** Shows 24h trading volume for tokens.

---

## Tips & Tricks

### 1. Case Insensitive
All commands and token symbols work in any case:
- `/PORTFOLIO` = `/portfolio`
- `bnb` = `BNB`
- `CaKe` = `CAKE`

### 2. Wallet Connection
Many commands require wallet connection:
- `/portfolio` ✅ Requires wallet
- `/balance` ✅ Requires wallet
- `/approvals` ✅ Requires wallet
- `/top` ❌ No wallet needed
- `/gas` ❌ No wallet needed

### 3. Command History
- Use **↑** (up arrow) to navigate previous commands
- Use **↓** (down arrow) to navigate forward

### 4. Quick Clear
Type `/clear` anytime to start fresh with a clean terminal.

### 5. Multiple Queries
The terminal supports up to **50 queries per session** in the current version.

### 6. Natural Language Tips
- Be conversational: "What's the gas price?" works!
- Use questions: "How much BNB do I have?"
- Be specific: "CAKE price" is better than "price"

---

## Query Limits

### Free Tier
- **50 queries per session**
- All commands available
- Real-time BSC data
- Natural language processing

### Pro Tier (Coming Soon)
- **Unlimited queries**
- Priority API access
- Advanced analytics
- Custom alerts

---

## Command Aliases (Coming Soon)

Future versions will support command aliases:
- `/p` = `/portfolio`
- `/g` = `/gas`
- `/s` = `/status`
- `/h` = `/help`

---

## Frequently Asked Questions

### Q: Do I need to connect my wallet?
**A:** Only for personalized commands like `/portfolio`, `/balance`, and `/approvals`. Market data commands work without wallet connection.

### Q: Are the prices real-time?
**A:** Yes! The terminal fetches real-time data from BSC and various DeFi protocols.

### Q: Can I use this on mobile?
**A:** Absolutely! The terminal is fully responsive and supports mobile wallets via WalletConnect.

### Q: Is my data secure?
**A:** Yes! We never store your private keys. Wallet connections are handled securely via wagmi and WalletConnect.

### Q: What tokens are supported?
**A:** All major BSC tokens including BNB, CAKE, BUSD, USDT, ETH, and hundreds more.

### Q: Can I trade directly from the terminal?
**A:** Currently, the terminal provides data and rates. Direct trading integration is planned for future releases.

---

## Support & Feedback

- **GitHub:** [zircai/zirc-protocol](https://github.com/zircai/zirc-protocol)
- **Issues:** Report bugs via GitHub Issues
- **Features:** Request features via GitHub Discussions

---

## Version History

### v2.0 (Current)
- ✅ 30+ commands
- ✅ Natural language processing
- ✅ DeFi integration (pools, farms, staking)
- ✅ Whale tracking
- ✅ Portfolio management
- ✅ Security tools (approvals)
- ✅ Gas optimization

### v1.0
- Basic price queries
- Wallet connection
- Simple commands

---

Built with ❤️ by the zIRC team | **No dashboards, just terminal-style answers for degens** 🚀

