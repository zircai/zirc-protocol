# 🔑 API Setup Guide for zIRC BSC Terminal

## Current Status
Your API key `DZE4CAX2ASP7J97UG2Z3IVVDQFRCI5Q5PU` is from **Etherscan** (Ethereum), but we need **BSCScan** (Binance Smart Chain) for BSC data.

## Option 1: Get BSCScan API Key (Recommended)

### Step 1: Create BSCScan Account
1. Go to https://bscscan.com/
2. Click "Sign In" → "Sign Up"
3. Complete registration

### Step 2: Generate API Key
1. Log in to BSCScan
2. Go to https://bscscan.com/myapikey
3. Click "Add" to create a new API key
4. Name it "zIRC BSC Terminal"
5. Copy the API key

### Step 3: Update .env.local
Replace the current API key in `.env.local`:
```bash
NEXT_PUBLIC_BSC_API_KEY=YOUR_NEW_BSCSCAN_API_KEY_HERE
```

## Option 2: Use Ethereum Instead

If you prefer to use Ethereum blockchain:
1. Keep your current Etherscan API key
2. We'll update the code to use Ethereum instead of BSC
3. Tokens: ETH, USDT, USDC, etc.

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

### BSCScan Free Tier
- 5 calls/second
- 10,000 calls/day

### CoinGecko Free Tier
- 10-50 calls/minute
- No daily limit

## Need Help?

If you're stuck:
1. Verify you're on https://bscscan.com (not etherscan.io)
2. Check your API key is copied correctly
3. Restart the dev server after updating .env.local

---

**Current Workaround**: The app will use CoinGecko for prices (free, no key) and mock data for holder lists until you add a BSCScan API key.
