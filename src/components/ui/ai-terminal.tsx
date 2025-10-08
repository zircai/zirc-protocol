'use client';

import { useState, useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';
import { aiService, AIResponse } from '@/lib/ai-service';

interface TerminalLine {
  id: string;
  type: 'user' | 'ai' | 'system' | 'data' | 'error';
  content: string;
  data?: any;
  timestamp: number;
}

export default function AITerminal() {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      id: '1',
      type: 'system',
      content: 'zIRC.ai BSC Terminal Ready. Type your query or use /help for commands.',
      timestamp: Date.now()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const { address, isConnected } = useAccount();
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  useEffect(() => {
    if (isConnected && address) {
      addLine('system', `Wallet connected: ${address.slice(0, 6)}...${address.slice(-4)}`);
    }
  }, [isConnected, address]);

  const addLine = (type: 'user' | 'ai' | 'system' | 'data' | 'error', content: string, data?: any) => {
    const newLine: TerminalLine = {
      id: Date.now().toString(),
      type,
      content,
      data,
      timestamp: Date.now()
    };
    setLines(prev => [...prev, newLine]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isProcessing) return;

    const query = input.trim();
    setInput('');
    addLine('user', `> ${query}`);

    if (query === '/help') {
      addLine('ai', `🚀 zIRC.ai BSC Terminal Commands

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
• "Whale movements today"`);
      return;
    }

    if (query === '/clear') {
      setLines([{
        id: '1',
        type: 'system',
        content: 'Terminal cleared. Type your query or use /help for commands.',
        timestamp: Date.now()
      }]);
      return;
    }

    setIsProcessing(true);
    addLine('ai', '[AI] Processing...');

    try {
      const response = await aiService.processQuery(query, address);
      
      // Remove the processing line
      setLines(prev => prev.slice(0, -1));
      
      if (response.type === 'error') {
        addLine('ai', `[ERROR] ${response.content}`);
      } else if (response.type === 'data') {
        addLine('ai', `[AI] ${response.content}`);
        if (response.data) {
          // Add formatted data if available
          addLine('ai', JSON.stringify(response.data, null, 2));
        }
      } else {
        addLine('ai', `[AI] ${response.content}`);
      }
    } catch (error) {
      setLines(prev => prev.slice(0, -1));
      addLine('ai', `[ERROR] Failed to process query: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const getLineStyle = (line: TerminalLine) => {
    switch (line.type) {
      case 'user':
        return 'text-neon-green';
      case 'ai':
        return 'text-neon-cyan';
      case 'system':
        return 'text-yellow-400';
      case 'data':
        return 'text-green-400';
      case 'error':
        return 'text-red-400';
      default:
        return 'text-white';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-black/90 border border-neon-green/40 rounded-lg overflow-hidden">
      {/* Terminal Header */}
      <div className="bg-black/60 border-b border-neon-green/20 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="text-neon-cyan text-sm font-mono">
          {isConnected ? `degen@bsc` : `guest@bsc`}
        </div>
      </div>

      {/* Terminal Content */}
      <div 
        ref={terminalRef}
        className="h-96 overflow-y-auto p-4 font-mono text-sm space-y-1"
      >
        {lines.map((line) => (
          <div key={line.id} className={getLineStyle(line)}>
            {line.type === 'user' && (
              <span className="text-neon-green">user@bsc:~$ </span>
            )}
            {line.type === 'ai' && (
              <span className="text-neon-cyan">[AI] </span>
            )}
            {line.type === 'system' && (
              <span className="text-neon-green">[SYSTEM] </span>
            )}
            <span className="whitespace-pre-wrap">{line.content}</span>
          </div>
        ))}
        {isProcessing && (
          <div className="text-neon-cyan">
            <span className="animate-pulse">█</span>
          </div>
        )}
      </div>

      {/* Terminal Input */}
      <form onSubmit={handleSubmit} className="border-t border-neon-green/20 bg-black/60 p-4">
        <div className="flex items-center space-x-2">
          <span className="text-neon-green font-mono">
            {isConnected ? `degen@bsc:~$` : `guest@bsc:~$`}
          </span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={isConnected ? "Ask about BSC data..." : "Connect wallet to start..."}
            disabled={!isConnected}
            className="flex-1 bg-transparent text-white font-mono outline-none disabled:text-gray-500 disabled:cursor-not-allowed"
            autoFocus
          />
        </div>
      </form>

      {/* Query Counter */}
      <div className="bg-black/40 px-4 py-2 text-xs text-gray-400 border-t border-neon-green/10">
        Queries: {aiService.getQueryCount()}/{aiService.getMaxQueries()} 
        {aiService.getQueryCount() >= aiService.getMaxQueries() && (
          <span className="text-red-400 ml-2">• Upgrade to Pro for unlimited queries</span>
        )}
      </div>
    </div>
  );
}
