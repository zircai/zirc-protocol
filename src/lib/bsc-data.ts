import axios from 'axios';

// BSC Data API configuration
const BSC_API_BASE = 'https://api.bscscan.com/api';
const MORALIS_API_BASE = 'https://deep-index.moralis.io/api/v2.2';

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

  // Get BNB balance for an address
  async getBNBBalance(address: string): Promise<string> {
    try {
      const response = await axios.get(BSC_API_BASE, {
        params: {
          module: 'account',
          action: 'balance',
          address: address,
          tag: 'latest',
          apikey: this.apiKey
        }
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

  // Get token price (using Moralis for better data)
  async getTokenPrice(symbol: string): Promise<TokenPrice | null> {
    try {
      // For demo purposes, using mock data
      // In production, integrate with Moralis or CoinGecko API
      const mockPrices: Record<string, TokenPrice> = {
        'BNB': { symbol: 'BNB', price: 320.45, change24h: 2.34, marketCap: 48000000000 },
        'CAKE': { symbol: 'CAKE', price: 1.89, change24h: -1.23, marketCap: 450000000 },
        'BUSD': { symbol: 'BUSD', price: 1.00, change24h: 0.01, marketCap: 1200000000 },
      };

      return mockPrices[symbol.toUpperCase()] || null;
    } catch (error) {
      console.error('Error fetching token price:', error);
      return null;
    }
  }

  // Get top holders (mock data for now)
  async getTopHolders(token: string, limit: number = 10): Promise<BSCData[]> {
    // Mock data - in production, use BSCScan API or Moralis
    const mockHolders: BSCData[] = [
      { address: '0x8894...a1b2', balance: '1234567.89', symbol: 'BNB', name: 'Binance' },
      { address: '0x4567...c3d4', balance: '987654.32', symbol: 'BNB', name: 'Whale #1' },
      { address: '0x7890...e5f6', balance: '654321.10', symbol: 'BNB', name: 'Whale #2' },
      { address: '0x1234...5678', balance: '321098.76', symbol: 'BNB', name: 'Whale #3' },
      { address: '0xabcd...efgh', balance: '210987.65', symbol: 'BNB', name: 'Whale #4' },
    ];

    return mockHolders.slice(0, limit);
  }

  // Get transaction details
  async getTransaction(txHash: string): Promise<any> {
    try {
      const response = await axios.get(BSC_API_BASE, {
        params: {
          module: 'proxy',
          action: 'eth_getTransactionByHash',
          txhash: txHash,
          apikey: this.apiKey
        }
      });
      
      return response.data.result;
    } catch (error) {
      console.error('Error fetching transaction:', error);
      return null;
    }
  }
}

// Create a singleton instance
export const bscDataService = new BSCDataService(process.env.NEXT_PUBLIC_BSC_API_KEY || 'demo');
