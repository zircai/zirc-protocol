import { bscDataService, BSCData, TokenPrice } from './bsc-data';

export interface AIResponse {
  type: 'text' | 'data' | 'error';
  content: string;
  data?: any;
  timestamp: number;
}

export class AIService {
  private queryCount: number = 0;
  private maxQueries: number = 10; // Free tier limit

  async processQuery(query: string, userAddress?: string): Promise<AIResponse> {
    if (this.queryCount >= this.maxQueries) {
      return {
        type: 'error',
        content: 'Query limit reached. Upgrade to Pro for unlimited queries.',
        timestamp: Date.now()
      };
    }

    this.queryCount++;

    const lowerQuery = query.toLowerCase();

    try {
      // Price queries
      if (lowerQuery.includes('price') || lowerQuery.includes('cost')) {
        return await this.handlePriceQuery(query);
      }

      // Balance queries
      if (lowerQuery.includes('balance') || lowerQuery.includes('holdings')) {
        return await this.handleBalanceQuery(query, userAddress);
      }

      // Top holders queries
      if (lowerQuery.includes('top') && (lowerQuery.includes('holder') || lowerQuery.includes('wallet'))) {
        return await this.handleTopHoldersQuery(query);
      }

      // Transaction queries
      if (lowerQuery.includes('transaction') || lowerQuery.includes('tx')) {
        return await this.handleTransactionQuery(query);
      }

      // Volume queries
      if (lowerQuery.includes('volume') || lowerQuery.includes('trading')) {
        return await this.handleVolumeQuery(query);
      }

      // General BSC info
      if (lowerQuery.includes('bsc') || lowerQuery.includes('binance')) {
        return await this.handleBSCInfoQuery(query);
      }

      // Default response
      return {
        type: 'text',
        content: `I can help you with BSC data queries. Try asking about:\n• Token prices (e.g., "CAKE price")\n• Top holders (e.g., "top BNB holders")\n• Balances (e.g., "my BNB balance")\n• Transactions (e.g., "explain transaction 0x123...")\n• Volume data (e.g., "BNB volume today")`,
        timestamp: Date.now()
      };

    } catch (error) {
      return {
        type: 'error',
        content: `Error processing query: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: Date.now()
      };
    }
  }

  private async handlePriceQuery(query: string): Promise<AIResponse> {
    const tokens = ['BNB', 'CAKE', 'BUSD', 'USDT', 'ETH'];
    const foundToken = tokens.find(token => query.toUpperCase().includes(token));
    
    if (!foundToken) {
      return {
        type: 'text',
        content: 'Please specify a token (BNB, CAKE, BUSD, etc.)',
        timestamp: Date.now()
      };
    }

    const priceData = await bscDataService.getTokenPrice(foundToken);
    
    if (!priceData) {
      return {
        type: 'error',
        content: `Could not fetch price for ${foundToken}`,
        timestamp: Date.now()
      };
    }

    const changeEmoji = priceData.change24h >= 0 ? '📈' : '📉';
    const changeColor = priceData.change24h >= 0 ? 'text-green-400' : 'text-red-400';

    return {
      type: 'data',
      content: `${foundToken} Price: $${priceData.price.toFixed(2)} ${changeEmoji} ${priceData.change24h.toFixed(2)}%`,
      data: priceData,
      timestamp: Date.now()
    };
  }

  private async handleBalanceQuery(query: string, userAddress?: string): Promise<AIResponse> {
    if (!userAddress) {
      return {
        type: 'text',
        content: 'Please connect your wallet to check balances',
        timestamp: Date.now()
      };
    }

    const balance = await bscDataService.getBNBBalance(userAddress);
    
    return {
      type: 'data',
      content: `Your BNB Balance: ${balance} BNB`,
      data: { balance, address: userAddress },
      timestamp: Date.now()
    };
  }

  private async handleTopHoldersQuery(query: string): Promise<AIResponse> {
    const token = query.toUpperCase().includes('CAKE') ? 'CAKE' : 'BNB';
    const holders = await bscDataService.getTopHolders(token, 5);
    
    const formattedHolders = holders.map((holder, index) => 
      `${index + 1}. ${holder.address} - ${holder.balance} ${token}`
    ).join('\n');

    return {
      type: 'data',
      content: `Top ${token} Holders:\n${formattedHolders}`,
      data: holders,
      timestamp: Date.now()
    };
  }

  private async handleTransactionQuery(query: string): Promise<AIResponse> {
    // Extract transaction hash from query
    const txHashMatch = query.match(/0x[a-fA-F0-9]{64}/);
    
    if (!txHashMatch) {
      return {
        type: 'text',
        content: 'Please provide a valid transaction hash (0x...)',
        timestamp: Date.now()
      };
    }

    const txHash = txHashMatch[0];
    const txData = await bscDataService.getTransaction(txHash);
    
    if (!txData) {
      return {
        type: 'error',
        content: 'Transaction not found or invalid hash',
        timestamp: Date.now()
      };
    }

    return {
      type: 'data',
      content: `Transaction ${txHash.slice(0, 10)}...\nFrom: ${txData.from}\nTo: ${txData.to}\nValue: ${txData.value} wei`,
      data: txData,
      timestamp: Date.now()
    };
  }

  private async handleVolumeQuery(query: string): Promise<AIResponse> {
    // Mock volume data
    const volumeData = {
      'BNB': { volume24h: 1250000000, change: 15.2 },
      'CAKE': { volume24h: 45000000, change: -8.7 },
      'BUSD': { volume24h: 890000000, change: 3.1 }
    };

    const token = query.toUpperCase().includes('CAKE') ? 'CAKE' : 
                  query.toUpperCase().includes('BUSD') ? 'BUSD' : 'BNB';
    
    const data = volumeData[token as keyof typeof volumeData];
    const changeEmoji = data.change >= 0 ? '📈' : '📉';

    return {
      type: 'data',
      content: `${token} 24h Volume: $${data.volume24h.toLocaleString()} ${changeEmoji} ${data.change.toFixed(1)}%`,
      data: { token, ...data },
      timestamp: Date.now()
    };
  }

  private async handleBSCInfoQuery(query: string): Promise<AIResponse> {
    return {
      type: 'text',
      content: `BSC (Binance Smart Chain) Stats:\n• Chain ID: 56\n• Block Time: ~3 seconds\n• Gas Token: BNB\n• Total Supply: ~200M BNB\n• Active Validators: 21\n• TPS: ~160\n\nUse "show [token] price" for specific data.`,
      timestamp: Date.now()
    };
  }

  getQueryCount(): number {
    return this.queryCount;
  }

  getMaxQueries(): number {
    return this.maxQueries;
  }
}

export const aiService = new AIService();
