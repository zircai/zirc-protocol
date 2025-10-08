import axios from 'axios';

// Etherscan V2 Multichain API configuration
// Using Etherscan V2 API which supports 60+ chains including BSC
// Reference: https://docs.etherscan.io/v2-migration
const ETHERSCAN_V2_BASE = 'https://api.etherscan.io/v2/api';
const BSC_CHAIN_ID = 56; // Binance Smart Chain
const ETH_CHAIN_ID = 1; // Ethereum Mainnet

export interface BSCData {
  address: string;
  balance: string;
  symbol: string;
  name: string;
}

export interface TokenPrice {
  symbol: string;
  price: number;
  change24h: number;
  marketCap: number;
}

export class BSCDataService {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  // Get BNB balance for an address using Etherscan V2 Multichain API
  async getBNBBalance(address: string): Promise<string> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'account',
          action: 'balance',
          address: address,
          tag: 'latest',
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      if (response.data.status === '1') {
        // Convert wei to BNB (18 decimals)
        const balance = parseFloat(response.data.result) / Math.pow(10, 18);
        return balance.toFixed(4);
      }
      throw new Error('Failed to fetch BNB balance');
    } catch (error) {
      console.error('Error fetching BNB balance:', error);
      return '0.0000';
    }
  }

  // Get token price (using CoinGecko free API)
  async getTokenPrice(symbol: string): Promise<TokenPrice | null> {
    try {
      // CoinGecko coin IDs mapping (blue chips + memecoins)
      const coinGeckoIds: Record<string, string> = {
        'BNB': 'binancecoin',
        'CAKE': 'pancakeswap-token',
        'BUSD': 'binance-usd',
        'USDT': 'tether',
        'ETH': 'ethereum',
        'BTCB': 'bitcoin-bep2',
        'USDC': 'usd-coin',
        // BSC Memecoins 🚀
        'FLOKI': 'floki',
        'BABYDOGE': 'baby-doge-coin',
        'SAFEMOON': 'safemoon-2',
        'SHIB': 'shiba-inu',
        'PEPE': 'pepe',
        'BONK': 'bonk',
        'DOGE': 'dogecoin',
      };

      const coinId = coinGeckoIds[symbol.toUpperCase()];
      if (!coinId) {
        console.warn(`No CoinGecko ID found for ${symbol}`);
        return null;
      }

      // Using CoinGecko's free public API (no key needed)
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/simple/price`,
        {
          params: {
            ids: coinId,
            vs_currencies: 'usd',
            include_24hr_change: true,
            include_market_cap: true
          },
          timeout: 5000
        }
      );

      const data = response.data[coinId];
      if (!data) {
        console.warn(`No price data returned for ${symbol}`);
        return null;
      }

      return {
        symbol: symbol.toUpperCase(),
        price: data.usd || 0,
        change24h: data.usd_24h_change || 0,
        marketCap: data.usd_market_cap || 0
      };
    } catch (error) {
      console.error('Error fetching token price:', error);
      // Fallback to mock data if API fails
      const fallbackPrices: Record<string, TokenPrice> = {
        'BNB': { symbol: 'BNB', price: 320.45, change24h: 2.34, marketCap: 48000000000 },
        'CAKE': { symbol: 'CAKE', price: 1.89, change24h: -1.23, marketCap: 450000000 },
        'BUSD': { symbol: 'BUSD', price: 1.00, change24h: 0.01, marketCap: 1200000000 },
      };
      return fallbackPrices[symbol.toUpperCase()] || null;
    }
  }

  // Get top holders using BSCScan API
  async getTopHolders(tokenAddress: string, limit: number = 10): Promise<BSCData[]> {
    try {
      // Note: BSCScan's tokenholderlist requires a contract address
      // For BNB, we'll use mock data as it's the native token
      if (!tokenAddress || tokenAddress.toLowerCase() === 'bnb') {
        // Mock data for BNB (native token doesn't have holder list API)
        const mockHolders: BSCData[] = [
          { address: '0x8894E0a0c962CB723c1976a4421c95949bE2D4E3', balance: '1234567.89', symbol: 'BNB', name: 'Binance Hot Wallet' },
          { address: '0x28C6c06298d514Db089934071355E5743bf21d60', balance: '987654.32', symbol: 'BNB', name: 'Binance 2' },
          { address: '0x21a31Ee1afC51d94C2eFcCAa2092aD1028285549', balance: '654321.10', symbol: 'BNB', name: 'Binance 3' },
          { address: '0xDFd5293D8e347dFe59E90eFd55b2956a1343963d', balance: '321098.76', symbol: 'BNB', name: 'Binance 4' },
          { address: '0x56Eddb7aa87536c09CCc2793473599fD21A8b17F', balance: '210987.65', symbol: 'BNB', name: 'Binance 5' },
        ];
        return mockHolders.slice(0, limit);
      }

      // For BEP-20 tokens, use Etherscan V2 Multichain API
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'token',
          action: 'tokenholderlist',
          contractaddress: tokenAddress,
          page: 1,
          offset: limit,
          apikey: this.apiKey
        },
        timeout: 5000
      });

      if (response.data.status === '1' && response.data.result) {
        return response.data.result.map((holder: any) => ({
          address: holder.TokenHolderAddress,
          balance: (parseFloat(holder.TokenHolderQuantity) / Math.pow(10, 18)).toFixed(2),
          symbol: 'TOKEN',
          name: `${holder.TokenHolderAddress.slice(0, 6)}...${holder.TokenHolderAddress.slice(-4)}`
        }));
      }

      // Fallback to mock data
      return [];
    } catch (error) {
      console.error('Error fetching top holders:', error);
      // Return mock data as fallback
      const mockHolders: BSCData[] = [
        { address: '0x8894...a1b2', balance: '1234567.89', symbol: 'TOKEN', name: 'Holder 1' },
        { address: '0x4567...c3d4', balance: '987654.32', symbol: 'TOKEN', name: 'Holder 2' },
        { address: '0x7890...e5f6', balance: '654321.10', symbol: 'TOKEN', name: 'Holder 3' },
      ];
      return mockHolders.slice(0, limit);
    }
  }

  // Get transaction details using Etherscan V2 Multichain API
  async getTransaction(txHash: string): Promise<any> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'proxy',
          action: 'eth_getTransactionByHash',
          txhash: txHash,
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      return response.data.result;
    } catch (error) {
      console.error('Error fetching transaction:', error);
      return null;
    }
  }

  // Get BEP-20 token balance for an address using Etherscan V2 Multichain API
  async getTokenBalance(address: string, contractAddress: string): Promise<string> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'account',
          action: 'tokenbalance',
          contractaddress: contractAddress,
          address: address,
          tag: 'latest',
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      if (response.data.status === '1') {
        // Convert to readable format (assuming 18 decimals)
        const balance = parseFloat(response.data.result) / Math.pow(10, 18);
        return balance.toFixed(4);
      }
      return '0.0000';
    } catch (error) {
      console.error('Error fetching token balance:', error);
      return '0.0000';
    }
  }

  // Get transaction list for an address using Etherscan V2 Multichain API
  async getTransactionList(address: string, limit: number = 10): Promise<any[]> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'account',
          action: 'txlist',
          address: address,
          startblock: 0,
          endblock: 99999999,
          page: 1,
          offset: limit,
          sort: 'desc',
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      if (response.data.status === '1') {
        return response.data.result;
      }
      return [];
    } catch (error) {
      console.error('Error fetching transaction list:', error);
      return [];
    }
  }

  // Get BNB price using Etherscan V2 Multichain API
  async getBNBPrice(): Promise<number> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'stats',
          action: 'bnbprice',
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      if (response.data.status === '1') {
        return parseFloat(response.data.result.ethusd);
      }
      return 0;
    } catch (error) {
      console.error('Error fetching BNB price:', error);
      return 0;
    }
  }

  // Test API connection using Etherscan V2 Multichain API
  async testConnection(): Promise<boolean> {
    try {
      const response = await axios.get(ETHERSCAN_V2_BASE, {
        params: {
          chainid: BSC_CHAIN_ID,
          module: 'stats',
          action: 'bnbprice',
          apikey: this.apiKey
        },
        timeout: 5000
      });
      
      return response.data.status === '1';
    } catch (error) {
      console.error('API connection test failed:', error);
      return false;
    }
  }
}

// Create a singleton instance
export const bscDataService = new BSCDataService(process.env.NEXT_PUBLIC_BSC_API_KEY || 'demo');
