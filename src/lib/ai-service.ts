import { bscDataService, BSCData, TokenPrice } from './bsc-data';

export interface AIResponse {
  type: 'text' | 'data' | 'error' | 'system';
  content: string;
  data?: any;
  timestamp: number;
}

export class AIService {
  private queryCount: number = 0;
  private maxQueries: number = 50; // Increased limit for comprehensive features
  private commandHistory: string[] = [];

  async processQuery(query: string, userAddress?: string): Promise<AIResponse> {
    if (this.queryCount >= this.maxQueries) {
      return {
        type: 'error',
        content: 'Query limit reached. Upgrade to Pro for unlimited queries.',
        timestamp: Date.now()
      };
    }

    this.queryCount++;
    this.commandHistory.push(query);

    const lowerQuery = query.toLowerCase();

    try {
      // Handle slash commands first
      if (query.startsWith('/')) {
        return await this.handleSlashCommand(query, userAddress);
      }

      // Enhanced natural language processing
      return await this.handleNaturalLanguageQuery(query, userAddress);

    } catch (error) {
      return {
        type: 'error',
        content: `Error processing query: ${error instanceof Error ? error.message : 'Unknown error'}`,
        timestamp: Date.now()
      };
    }
  }

  private async handleSlashCommand(query: string, userAddress?: string): Promise<AIResponse> {
    const command = query.toLowerCase().trim();
    
    switch (command) {
      case '/help':
        return this.getHelpResponse();
      
      case '/clear':
        return {
          type: 'system',
          content: 'Terminal cleared. Type your query or use /help for commands.',
          timestamp: Date.now()
        };
      
      case '/balance':
        return await this.handleBalanceQuery('balance', userAddress);
      
      case '/portfolio':
        return await this.handlePortfolioQuery(userAddress);
      
      case '/gas':
        return await this.handleGasQuery();
      
      case '/top':
        return await this.handleTopTokensQuery();
      
      case '/trending':
        return await this.handleTrendingQuery();
      
      case '/pools':
        return await this.handlePoolsQuery();
      
      case '/farms':
        return await this.handleFarmsQuery();
      
      case '/staking':
        return await this.handleStakingQuery();
      
      case '/market':
        return await this.handleMarketQuery();
      
      case '/whale':
        return await this.handleWhaleQuery();
      
      case '/approvals':
        return await this.handleApprovalsQuery(userAddress);
      
      case '/convert':
        return {
          type: 'text',
          content: 'Usage: /convert [amount] [from] [to]\nExample: /convert 100 BNB USD',
          timestamp: Date.now()
        };
      
      case '/history':
        return {
          type: 'text',
          content: 'Usage: /history [token]\nExample: /history CAKE',
          timestamp: Date.now()
        };
      
      case '/swap':
        return {
          type: 'text',
          content: 'Usage: /swap [token1] [token2]\nExample: /swap BNB CAKE',
          timestamp: Date.now()
        };
      
      case '/status':
        return await this.handleStatusQuery();
      
      case '/version':
        return {
          type: 'text',
          content: 'zIRC.ai BSC Terminal v2.0\nBuilt for degens, by degens 🚀',
          timestamp: Date.now()
        };
      
      default:
        // Handle commands with parameters
        if (command.startsWith('/price ')) {
          const token = command.replace('/price ', '').toUpperCase();
          return await this.handlePriceQuery(`price ${token}`);
        }
        if (command.startsWith('/holders ')) {
          const token = command.replace('/holders ', '').toUpperCase();
          return await this.handleTopHoldersQuery(`top ${token} holders`);
        }
        if (command.startsWith('/volume ')) {
          const token = command.replace('/volume ', '').toUpperCase();
          return await this.handleVolumeQuery(`${token} volume`);
        }
        if (command.startsWith('/convert ')) {
          return await this.handleConvertQuery(command);
        }
        if (command.startsWith('/history ')) {
          const token = command.replace('/history ', '').toUpperCase();
          return await this.handleHistoryQuery(token);
        }
        if (command.startsWith('/swap ')) {
          return await this.handleSwapQuery(command);
        }
        
        return {
          type: 'text',
          content: `Unknown command: ${query}\nType /help for available commands.`,
          timestamp: Date.now()
        };
    }
  }

  private async handleNaturalLanguageQuery(query: string, userAddress?: string): Promise<AIResponse> {
    const lowerQuery = query.toLowerCase();

    // Portfolio queries
    if (lowerQuery.includes('portfolio') || lowerQuery.includes('my holdings') || lowerQuery.includes('what do i own')) {
      return await this.handlePortfolioQuery(userAddress);
    }

    // Price queries
    if (lowerQuery.includes('price') || lowerQuery.includes('cost') || lowerQuery.includes('worth') || lowerQuery.includes('value')) {
      return await this.handlePriceQuery(query);
    }

    // Balance queries
    if (lowerQuery.includes('balance') || lowerQuery.includes('holdings') || lowerQuery.includes('how much') || lowerQuery.includes('my balance')) {
      return await this.handleBalanceQuery(query, userAddress);
    }

    // Top holders queries
    if (lowerQuery.includes('top') && (lowerQuery.includes('holder') || lowerQuery.includes('wallet') || lowerQuery.includes('whale'))) {
      return await this.handleTopHoldersQuery(query);
    }

    // Transaction queries
    if (lowerQuery.includes('transaction') || lowerQuery.includes('tx') || lowerQuery.includes('explain')) {
      return await this.handleTransactionQuery(query);
    }

    // Volume queries
    if (lowerQuery.includes('volume') || lowerQuery.includes('trading') || lowerQuery.includes('liquidity')) {
      return await this.handleVolumeQuery(query);
    }

    // Gas queries
    if (lowerQuery.includes('gas') || lowerQuery.includes('fee') || lowerQuery.includes('gwei')) {
      return await this.handleGasQuery();
    }

    // Market queries
    if (lowerQuery.includes('market') || lowerQuery.includes('trending') || lowerQuery.includes('top gainers') || lowerQuery.includes('best performing')) {
      return await this.handleTopTokensQuery();
    }

    // DeFi queries
    if (lowerQuery.includes('pool') || lowerQuery.includes('farm') || lowerQuery.includes('yield') || lowerQuery.includes('staking')) {
      if (lowerQuery.includes('farm') || lowerQuery.includes('yield')) {
        return await this.handleFarmsQuery();
      }
      if (lowerQuery.includes('staking') || lowerQuery.includes('stake')) {
        return await this.handleStakingQuery();
      }
      return await this.handlePoolsQuery();
    }

    // Whale queries
    if (lowerQuery.includes('whale') || lowerQuery.includes('large transaction') || lowerQuery.includes('big moves')) {
      return await this.handleWhaleQuery();
    }

    // Convert queries
    if (lowerQuery.includes('convert') || lowerQuery.includes('exchange rate') || lowerQuery.includes('how much is')) {
      return await this.handleConvertQuery(query);
    }

    // History queries
    if (lowerQuery.includes('history') || lowerQuery.includes('chart') || lowerQuery.includes('past') || lowerQuery.includes('ath') || lowerQuery.includes('atl')) {
      return await this.handleHistoryQuery(query);
    }

    // Swap queries
    if (lowerQuery.includes('swap') || lowerQuery.includes('trade') || lowerQuery.includes('exchange')) {
      return await this.handleSwapQuery(query);
    }

    // General BSC info
    if (lowerQuery.includes('bsc') || lowerQuery.includes('binance') || lowerQuery.includes('chain')) {
      return await this.handleBSCInfoQuery(query);
    }

    // Security queries
    if (lowerQuery.includes('approval') || lowerQuery.includes('permission') || lowerQuery.includes('security')) {
      return await this.handleApprovalsQuery(userAddress);
    }

    // Default response with enhanced suggestions
    return {
      type: 'text',
      content: `I can help you with comprehensive BSC data! Try these queries:\n\n💰 Portfolio & Balances:\n• "What's my portfolio worth?"\n• "Show my token holdings"\n• "My BNB balance"\n\n📊 Market Data:\n• "CAKE price"\n• "Top performing tokens"\n• "BNB volume today"\n• "Current gas prices"\n\n🔄 DeFi & Trading:\n• "Best yield farming opportunities"\n• "Top liquidity pools"\n• "BNB to CAKE swap rate"\n• "Staking rewards"\n\n🐋 Analytics:\n• "Whale movements"\n• "Top BNB holders"\n• "CAKE price history"\n\nType /help for all commands!`,
      timestamp: Date.now()
    };
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

  // New comprehensive handler methods
  private async handlePortfolioQuery(userAddress?: string): Promise<AIResponse> {
    if (!userAddress) {
      return {
        type: 'text',
        content: 'Please connect your wallet to view portfolio',
        timestamp: Date.now()
      };
    }

    // Mock portfolio data - in real implementation, fetch from multiple sources
    const portfolio = {
      totalValue: 15420.50,
      tokens: [
        { symbol: 'BNB', balance: 12.5, value: 4005.63, change24h: 2.34 },
        { symbol: 'CAKE', balance: 850.2, value: 1606.88, change24h: -1.23 },
        { symbol: 'BUSD', balance: 5000, value: 5000, change24h: 0.01 },
        { symbol: 'USDT', balance: 2808.99, value: 2808.99, change24h: 0.01 }
      ]
    };

    const formattedTokens = portfolio.tokens.map(token => 
      `${token.symbol}: ${token.balance} ($${token.value.toFixed(2)}) ${token.change24h >= 0 ? '📈' : '📉'} ${token.change24h.toFixed(2)}%`
    ).join('\n');

    return {
      type: 'data',
      content: `💰 Portfolio Overview\nTotal Value: $${portfolio.totalValue.toLocaleString()}\n\nHoldings:\n${formattedTokens}`,
      data: portfolio,
      timestamp: Date.now()
    };
  }

  private async handleGasQuery(): Promise<AIResponse> {
    // Mock gas data
    const gasData = {
      slow: { gwei: 3, time: '~5 min', fee: '$0.12' },
      standard: { gwei: 5, time: '~2 min', fee: '$0.20' },
      fast: { gwei: 8, time: '~30 sec', fee: '$0.32' },
      instant: { gwei: 12, time: '~10 sec', fee: '$0.48' }
    };

    return {
      type: 'data',
      content: `⛽ Current Gas Prices (BSC)\n\n🐌 Slow: ${gasData.slow.gwei} gwei (${gasData.slow.time}) - ${gasData.slow.fee}\n🚶 Standard: ${gasData.standard.gwei} gwei (${gasData.standard.time}) - ${gasData.standard.fee}\n🏃 Fast: ${gasData.fast.gwei} gwei (${gasData.fast.time}) - ${gasData.fast.fee}\n🚀 Instant: ${gasData.instant.gwei} gwei (${gasData.instant.time}) - ${gasData.instant.fee}`,
      data: gasData,
      timestamp: Date.now()
    };
  }

  private async handleTopTokensQuery(): Promise<AIResponse> {
    const topTokens = [
      { symbol: 'PEPE', price: '$0.0000018', change: '+12.34%', volume: '$45.2M' },
      { symbol: 'BONK', price: '$0.000023', change: '+8.76%', volume: '$23.1M' },
      { symbol: 'FLOKI', price: '$0.000012', change: '+6.54%', volume: '$18.7M' },
      { symbol: 'SHIB', price: '$0.000024', change: '+4.32%', volume: '$67.3M' },
      { symbol: 'BNB', price: '$320.45', change: '+2.34%', volume: '$1.2B' }
    ];

    const formattedTokens = topTokens.map((token, index) => 
      `${index + 1}. ${token.symbol}: ${token.price} ${token.change} (Vol: ${token.volume})`
    ).join('\n');

    return {
      type: 'data',
      content: `📈 Top Performing Tokens (24h)\n\n${formattedTokens}`,
      data: topTokens,
      timestamp: Date.now()
    };
  }

  private async handleTrendingQuery(): Promise<AIResponse> {
    const trending = [
      { symbol: 'PEPE', reason: 'Meme coin rally', volume: '+245%' },
      { symbol: 'CAKE', reason: 'PancakeSwap v4 announcement', volume: '+89%' },
      { symbol: 'BONK', reason: 'Solana bridge activity', volume: '+156%' },
      { symbol: 'FLOKI', reason: 'Community burn event', volume: '+78%' }
    ];

    const formattedTrending = trending.map((token, index) => 
      `${index + 1}. ${token.symbol}: ${token.reason} (Vol: ${token.volume})`
    ).join('\n');

    return {
      type: 'data',
      content: `🔥 Trending Tokens\n\n${formattedTrending}`,
      data: trending,
      timestamp: Date.now()
    };
  }

  private async handlePoolsQuery(): Promise<AIResponse> {
    const pools = [
      { pair: 'BNB/CAKE', apy: '45.2%', tvl: '$12.5M', fee: '0.25%' },
      { pair: 'BNB/BUSD', apy: '23.8%', tvl: '$8.7M', fee: '0.25%' },
      { pair: 'CAKE/USDT', apy: '38.1%', tvl: '$5.2M', fee: '0.25%' },
      { pair: 'ETH/BNB', apy: '31.5%', tvl: '$3.8M', fee: '0.3%' }
    ];

    const formattedPools = pools.map((pool, index) => 
      `${index + 1}. ${pool.pair}: ${pool.apy} APY (TVL: ${pool.tvl})`
    ).join('\n');

    return {
      type: 'data',
      content: `🏊 Top Liquidity Pools\n\n${formattedPools}`,
      data: pools,
      timestamp: Date.now()
    };
  }

  private async handleFarmsQuery(): Promise<AIResponse> {
    const farms = [
      { token: 'CAKE-BNB LP', apy: '67.3%', multiplier: '40x', tvl: '$15.2M' },
      { token: 'BNB-BUSD LP', apy: '52.1%', multiplier: '30x', tvl: '$8.9M' },
      { token: 'ETH-BNB LP', apy: '48.7%', multiplier: '25x', tvl: '$6.3M' },
      { token: 'USDT-BUSD LP', apy: '35.2%', multiplier: '20x', tvl: '$4.1M' }
    ];

    const formattedFarms = farms.map((farm, index) => 
      `${index + 1}. ${farm.token}: ${farm.apy} APY (${farm.multiplier}, TVL: ${farm.tvl})`
    ).join('\n');

    return {
      type: 'data',
      content: `🚜 Top Yield Farms\n\n${formattedFarms}`,
      data: farms,
      timestamp: Date.now()
    };
  }

  private async handleStakingQuery(): Promise<AIResponse> {
    const staking = [
      { token: 'BNB', apy: '8.5%', minStake: '1 BNB', lockPeriod: '30 days' },
      { token: 'CAKE', apy: '12.3%', minStake: '10 CAKE', lockPeriod: '7 days' },
      { token: 'ETH', apy: '6.7%', minStake: '0.1 ETH', lockPeriod: '14 days' }
    ];

    const formattedStaking = staking.map((stake, index) => 
      `${index + 1}. ${stake.token}: ${stake.apy} APY (Min: ${stake.minStake}, Lock: ${stake.lockPeriod})`
    ).join('\n');

    return {
      type: 'data',
      content: `🥩 Staking Opportunities\n\n${formattedStaking}`,
      data: staking,
      timestamp: Date.now()
    };
  }

  private async handleMarketQuery(): Promise<AIResponse> {
    const marketData = {
      totalMarketCap: '$89.2B',
      totalVolume24h: '$2.1B',
      activeTokens: 1247,
      topGainer: 'PEPE (+12.34%)',
      topLoser: 'SAFEMOON (-8.76%)'
    };

    return {
      type: 'data',
      content: `📊 BSC Market Overview\n\nMarket Cap: ${marketData.totalMarketCap}\n24h Volume: ${marketData.totalVolume24h}\nActive Tokens: ${marketData.activeTokens}\nTop Gainer: ${marketData.topGainer}\nTop Loser: ${marketData.topLoser}`,
      data: marketData,
      timestamp: Date.now()
    };
  }

  private async handleWhaleQuery(): Promise<AIResponse> {
    const whaleMovements = [
      { address: '0x8894...a1b2', action: 'Bought', amount: '1,234 BNB', value: '$395,000' },
      { address: '0x4567...c3d4', action: 'Sold', amount: '850 CAKE', value: '$1,606' },
      { address: '0x7890...e5f6', action: 'Transferred', amount: '5,000 BUSD', value: '$5,000' }
    ];

    const formattedWhales = whaleMovements.map((whale, index) => 
      `${index + 1}. ${whale.address} ${whale.action} ${whale.amount} (${whale.value})`
    ).join('\n');

    return {
      type: 'data',
      content: `🐋 Recent Whale Movements\n\n${formattedWhales}`,
      data: whaleMovements,
      timestamp: Date.now()
    };
  }

  private async handleApprovalsQuery(userAddress?: string): Promise<AIResponse> {
    if (!userAddress) {
      return {
        type: 'text',
        content: 'Please connect your wallet to check approvals',
        timestamp: Date.now()
      };
    }

    const approvals = [
      { token: 'CAKE', spender: 'PancakeSwap Router', amount: 'Unlimited', risk: 'Medium' },
      { token: 'BNB', spender: '1inch', amount: 'Unlimited', risk: 'Low' },
      { token: 'USDT', spender: 'Uniswap V3', amount: '10,000 USDT', risk: 'Low' }
    ];

    const formattedApprovals = approvals.map((approval, index) => 
      `${index + 1}. ${approval.token} → ${approval.spender}\n   Amount: ${approval.amount} (Risk: ${approval.risk})`
    ).join('\n\n');

    return {
      type: 'data',
      content: `🔒 Token Approvals\n\n${formattedApprovals}\n\n⚠️ Review and revoke unnecessary approvals for security.`,
      data: approvals,
      timestamp: Date.now()
    };
  }

  private async handleConvertQuery(query: string): Promise<AIResponse> {
    // Extract amount and tokens from query
    const parts = query.toLowerCase().split(' ');
    const amount = parts.find(part => !isNaN(parseFloat(part)));
    const fromToken = parts.find(part => ['bnb', 'cake', 'busd', 'usdt', 'eth'].includes(part));
    const toToken = parts[parts.length - 1];

    if (!amount || !fromToken || !toToken) {
      return {
        type: 'text',
        content: 'Usage: /convert [amount] [from] [to]\nExample: /convert 100 BNB USD',
        timestamp: Date.now()
      };
    }

    // Mock conversion rates
    const rates = {
      'bnb': { usd: 320.45, cake: 169.5, busd: 320.45 },
      'cake': { usd: 1.89, bnb: 0.0059, busd: 1.89 },
      'busd': { usd: 1.00, bnb: 0.0031, cake: 0.53 }
    };

    const fromRate = rates[fromToken as keyof typeof rates];
    const convertedAmount = parseFloat(amount) * (fromRate?.[toToken as keyof typeof fromRate] || 1);

    return {
      type: 'data',
      content: `💱 Currency Conversion\n\n${amount} ${fromToken.toUpperCase()} = ${convertedAmount.toFixed(2)} ${toToken.toUpperCase()}`,
      data: { from: fromToken, to: toToken, amount: parseFloat(amount), converted: convertedAmount },
      timestamp: Date.now()
    };
  }

  private async handleHistoryQuery(query: string): Promise<AIResponse> {
    const token = query.toUpperCase().replace(/HISTORY|CHART|PAST|ATH|ATL/gi, '').trim() || 'BNB';
    
    // Mock historical data
    const history = {
      token,
      ath: token === 'BNB' ? '$686.31' : token === 'CAKE' ? '$44.18' : '$1.00',
      atl: token === 'BNB' ? '$0.10' : token === 'CAKE' ? '$0.19' : '$0.99',
      change7d: token === 'BNB' ? '+5.2%' : token === 'CAKE' ? '-2.1%' : '+0.1%',
      change30d: token === 'BNB' ? '+12.8%' : token === 'CAKE' ? '+8.3%' : '+0.2%'
    };

    return {
      type: 'data',
      content: `📈 ${token} Price History\n\nAll-Time High: ${history.ath}\nAll-Time Low: ${history.atl}\n7d Change: ${history.change7d}\n30d Change: ${history.change30d}`,
      data: history,
      timestamp: Date.now()
    };
  }

  private async handleSwapQuery(query: string): Promise<AIResponse> {
    const parts = query.toLowerCase().split(' ');
    const fromToken = parts.find(part => ['bnb', 'cake', 'busd', 'usdt', 'eth'].includes(part));
    const toToken = parts[parts.length - 1];

    if (!fromToken || !toToken) {
      return {
        type: 'text',
        content: 'Usage: /swap [token1] [token2]\nExample: /swap BNB CAKE',
        timestamp: Date.now()
      };
    }

    // Mock swap rates
    const swapRates = {
      'bnb-cake': { rate: '169.5 CAKE per BNB', slippage: '0.1%', fee: '$0.20' },
      'cake-bnb': { rate: '0.0059 BNB per CAKE', slippage: '0.1%', fee: '$0.15' },
      'bnb-busd': { rate: '320.45 BUSD per BNB', slippage: '0.05%', fee: '$0.10' }
    };

    const swapKey = `${fromToken}-${toToken}` as keyof typeof swapRates;
    const swapData = swapRates[swapKey] || { rate: 'Rate not available', slippage: 'N/A', fee: 'N/A' };

    return {
      type: 'data',
      content: `🔄 Swap Rate: ${fromToken.toUpperCase()} → ${toToken.toUpperCase()}\n\nRate: ${swapData.rate}\nSlippage: ${swapData.slippage}\nFee: ${swapData.fee}`,
      data: { from: fromToken, to: toToken, ...swapData },
      timestamp: Date.now()
    };
  }

  private async handleStatusQuery(): Promise<AIResponse> {
    const status = {
      bscNetwork: 'Connected ✅',
      apiStatus: 'Operational ✅',
      lastUpdate: new Date().toLocaleTimeString(),
      queriesProcessed: this.queryCount,
      uptime: '99.9%'
    };

    return {
      type: 'data',
      content: `🟢 System Status\n\nBSC Network: ${status.bscNetwork}\nAPI Status: ${status.apiStatus}\nLast Update: ${status.lastUpdate}\nQueries Processed: ${status.queriesProcessed}\nUptime: ${status.uptime}`,
      data: status,
      timestamp: Date.now()
    };
  }

  private getHelpResponse(): AIResponse {
    return {
      type: 'text',
      content: `🚀 zIRC.ai BSC Terminal Commands

💰 Portfolio & Balances:
• /portfolio - Complete portfolio overview
• /balance - Check BNB balance
• /approvals - Review token approvals

📊 Market Data:
• /top - Top performing tokens
• /trending - Trending tokens
• /market - Market overview
• /gas - Current gas prices

🔄 DeFi & Trading:
• /pools - Top liquidity pools
• /farms - Yield farming opportunities
• /staking - Staking rewards
• /swap [token1] [token2] - Swap rates

🐋 Analytics:
• /whale - Whale movements
• /history [token] - Price history
• /convert [amount] [from] [to] - Currency converter

🛠️ System:
• /status - System status
• /version - Version info
• /clear - Clear terminal
• /help - Show this help

💬 Natural Language:
• "What's my portfolio worth?"
• "Show me top performing tokens"
• "Current gas prices"
• "Best yield farming opportunities"
• "Whale movements today"`,
      timestamp: Date.now()
    };
  }

  getQueryCount(): number {
    return this.queryCount;
  }

  getMaxQueries(): number {
    return this.maxQueries;
  }

  getCommandHistory(): string[] {
    return this.commandHistory.slice(-10); // Last 10 commands
  }
}

export const aiService = new AIService();
