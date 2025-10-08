# 🔐 Wallet Connection Setup Guide

## Quick Start

The zIRC BSC Terminal now has full wallet integration! Users can connect their wallets to query balances, check holdings, and interact with BSC data.

## Supported Wallets

### Browser Wallets (Desktop)
1. **MetaMask** - Most popular, works immediately
2. **Trust Wallet Browser Extension** - BSC native wallet
3. **Binance Wallet Extension** - Official Binance wallet
4. **Coinbase Wallet Extension**

### Mobile Wallets (via WalletConnect)
1. **Trust Wallet Mobile** - Largest BSC mobile wallet
2. **MetaMask Mobile**
3. **Coinbase Wallet Mobile**
4. **Rainbow Wallet**
5. **300+ other WalletConnect-compatible wallets**

## Environment Setup

### Required for WalletConnect (Mobile Wallets)

To enable mobile wallet connections via WalletConnect, you need a Project ID:

1. Visit [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Sign up or log in (free)
3. Create a new project
4. Copy your Project ID
5. Add to your environment variables:

```bash
# .env.local
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```

**Without this:**
- ✅ MetaMask, Trust Wallet, and other browser extensions will still work
- ❌ Mobile wallets via WalletConnect won't be available

### Optional: Custom BSC RPC

By default, the app uses Binance's public RPC endpoint (`https://bsc-dataseed.binance.org/`).

For production or higher reliability, use a dedicated RPC provider:

```bash
# .env.local (optional)
NEXT_PUBLIC_BSC_RPC_URL=https://your-custom-rpc-endpoint
```

**Recommended RPC Providers:**
- [Ankr](https://www.ankr.com/rpc/bsc/) - Free tier available
- [QuickNode](https://www.quicknode.com/chains/bsc) - Paid, very reliable
- [Alchemy](https://www.alchemy.com/) - Paid, enterprise-grade

## Testing Wallet Connection

### Local Development

1. Start the dev server:
```bash
npm run dev
```

2. Navigate to [http://localhost:3000/terminal](http://localhost:3000/terminal)

3. Click "Connect Wallet"

4. Select your wallet:
   - **MetaMask**: Should connect immediately if extension is installed
   - **Trust Wallet**: Requires Trust Wallet browser extension
   - **WalletConnect**: Requires Project ID (see above)

### Adding BSC Network to MetaMask

If BSC isn't already in your MetaMask:

1. Open MetaMask
2. Click network dropdown (top of extension)
3. Click "Add Network" → "Add a network manually"
4. Enter BSC details:
   - **Network Name**: Binance Smart Chain
   - **RPC URL**: https://bsc-dataseed.binance.org/
   - **Chain ID**: 56
   - **Symbol**: BNB
   - **Block Explorer**: https://bscscan.com

Or visit [chainlist.org](https://chainlist.org) and search "BSC" to add it automatically.

## Features After Connection

Once wallet is connected, users can:

✅ **Query Their Balance**
- "my balance"
- "check my holdings"
- "/balance"

✅ **Personalized Data**
- Terminal shows connected address
- Real-time BNB balance display
- Transaction history (coming soon)

✅ **Enhanced Queries**
- "show top BNB holders"
- "CAKE price"
- "BNB volume today"

## Troubleshooting

### "Wallet not detected"
- **Solution**: Install [MetaMask](https://metamask.io/) browser extension
- Make sure you're using a supported browser (Chrome, Firefox, Brave, Edge)

### "Wrong network"
- **Solution**: Switch to BSC (Chain ID: 56) in your wallet
- See "Adding BSC Network to MetaMask" above

### "WalletConnect not working"
- **Solution**: Add your WalletConnect Project ID to `.env.local`
- Restart the dev server after adding environment variables

### "Transaction failed"
- **Solution**: Ensure you have enough BNB for gas fees
- Check your wallet is on BSC, not Ethereum

### "Connection rejected"
- **Solution**: Click "Connect" again and approve the connection in your wallet popup
- Check that popup blockers aren't blocking the wallet popup

## Production Deployment

### Vercel

1. Go to your Vercel project
2. Settings → Environment Variables
3. Add:
   ```
   NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id
   ```
4. Redeploy

### Other Platforms

Add `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` to your deployment environment variables.

## Security Best Practices

### For Users
- ✅ Always verify you're connecting to the correct domain
- ✅ Never share your seed phrase
- ✅ Only connect to trusted applications
- ✅ Review transactions before signing

### For Developers
- ✅ Never store private keys in code
- ✅ Use environment variables for API keys
- ✅ Always validate user addresses on backend
- ✅ Implement rate limiting for queries
- ✅ Use HTTPS in production

## Wallet Connection Flow

```
User clicks "Connect Wallet"
    ↓
Modal shows available wallets
    ↓
User selects wallet (e.g., MetaMask)
    ↓
Wallet popup asks for permission
    ↓
User approves connection
    ↓
Terminal shows connected address
    ↓
User can now query BSC data with personalized features
```

## Advanced Configuration

### Adding More Wallets

To add support for additional wallets, edit `src/lib/wagmi.ts`:

```typescript
import { injected } from 'wagmi/connectors'

// Add custom wallet
injected({
  target: {
    id: 'your-wallet',
    name: 'Your Wallet Name',
    provider: (window: any) => window.yourWallet,
  },
  shimDisconnect: true,
})
```

### Switching Networks

The app is currently BSC-only. To add multi-chain support:

```typescript
// src/lib/wagmi.ts
import { bsc, mainnet, polygon } from 'wagmi/chains'

const config = createConfig({
  chains: [bsc, mainnet, polygon],
  // ... rest of config
})
```

## Resources

- [WagmiWeb3 Documentation](https://wagmi.sh/)
- [WalletConnect Docs](https://docs.walletconnect.com/)
- [MetaMask Developer Docs](https://docs.metamask.io/)
- [BSCScan API](https://docs.bscscan.com/)
- [Trust Wallet Developer Guide](https://developer.trustwallet.com/)

## Need Help?

- Check the [API Setup Guide](./API-SETUP-GUIDE.md) for backend setup
- Review [Next.js docs](https://nextjs.org/docs) for framework questions
- File an issue on GitHub
- Join the community on Twitter: [@zircai](https://x.com/zircai)

---

**Status**: ✅ Fully Implemented - Wallet connection is ready for production use!
