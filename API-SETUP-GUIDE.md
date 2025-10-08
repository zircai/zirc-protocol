# 🔑 API Setup Guide for zIRC BSC Terminal

## ✅ Current Status: WORKING!

Your API key `DZE4CAX2ASP7J97UG2Z3IVVDQFRCI5Q5PU` is an **Etherscan V2 Multichain API key** that works across **60+ blockchains** including BSC!

### What's Working:
- ✅ **BNB Price**: Real-time price data
- ✅ **Balance Checks**: Query any wallet's BNB balance
- ✅ **Transactions**: Get transaction details
- ✅ **Multi-chain Support**: BSC, Ethereum, Arbitrum, Base, Polygon, and 55+ more!

Reference: [Etherscan V2 Migration Guide](https://docs.etherscan.io/v2-migration)

## Etherscan V2 Multichain API (Current Setup)

### How It Works:

Your Etherscan API key now uses the **V2 Multichain API** format:

```
https://api.etherscan.io/v2/api?chainid=56&module=account&action=balance&address=0x...&apikey=YOUR_KEY
```

**Key Features:**
- Single API key for 60+ chains
- Just change the `chainid` parameter:
  - BSC: `chainid=56`
  - Ethereum: `chainid=1`
  - Arbitrum: `chainid=42161`
  - Base: `chainid=8453`
  - Polygon: `chainid=137`

### Supported Chains:

Your API key works on:
- ✅ Binance Smart Chain (BSC)
- ✅ Ethereum Mainnet
- ✅ Arbitrum One
- ✅ Base
- ✅ Polygon
- ✅ Optimism
- ✅ Avalanche C-Chain
- ✅ And 53+ more networks!

## Easy Multi-Chain Expansion

Want to add Ethereum or other chains to zIRC Terminal?
1. Just update the `chainid` parameter in the code
2. No new API keys needed!
3. Same rate limits apply across all chains

## Free APIs (No Key Required)

We've set up fallback to these free APIs:

### CoinGecko (Price Data)
- **Endpoint**: https://api.coingecko.com/api/v3/simple/price
- **Rate Limit**: 10-50 calls/minute (free tier)
- **No API key needed** for basic calls

### DeFiLlama (DeFi Data)
- **Endpoint**: https://api.llama.fi/
- **Rate Limit**: Generous
- **No API key needed**

## Testing Your Setup

Run the test script:
```bash
node test-bsc-api.js
```

You should see:
- ✅ BNB Price
- ✅ Balance Check
- ✅ Token Info

## Rate Limits

### Etherscan V2 Multichain API (Your Current Plan)
- 5 calls/second (across all chains)
- 10,000 calls/day (shared across all chains)
- Upgrade available for higher limits

### CoinGecko Free Tier
- 10-50 calls/minute
- No daily limit

## Test Results

Run `node test-bsc-api.js` to verify:

```
✅ BNB Price: $1,319.78
✅ Balance Check: 1,385,795 BNB (Binance Hot Wallet)
✅ API Connection: Working
```

## Need Help?

If you encounter issues:
1. Verify your API key in `.env.local`
2. Check you're using the V2 endpoint: `https://api.etherscan.io/v2/api`
3. Ensure `chainid` parameter is set correctly (56 for BSC)
4. Restart the dev server after updating `.env.local`

## Resources

- [Etherscan V2 Migration Guide](https://docs.etherscan.io/v2-migration)
- [Supported Chains List](https://docs.etherscan.io/supported-chains)
- [API Documentation](https://docs.etherscan.io/)

---

**Status**: ✅ **Fully Operational** - Your API key is working perfectly with BSC and 60+ other chains!
