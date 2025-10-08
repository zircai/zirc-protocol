'use client';

import { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string | string[];
  timestamp: number;
}

const commands = {
  'whoami': 'degen@bsc-terminal',
  'zirc --version': 'v0.1.6-alpha-bsc-terminal',
  'sudo moon': 'Permission denied. Stake more $ZIRC to unlock whale features.',
  'ping bsc': 'BSC network: 56ms latency. Status: OPERATIONAL',
  'help': [
    'Available BSC AI Terminal commands:',
    '  whoami              - Check your identity',
    '  show [token] price  - Get token price (e.g., show BNB price)',
    '  my balance          - Check your BNB balance',
    '  top [token] holders - View top holders',
    '  tx [hash]           - Explain transaction',
    '  volume [token]      - Get 24h trading volume',
    '  lore                - View zIRC lore',
    '  clear               - Clear terminal',
    '  help                - Show this help'
  ],
  'show BNB price': '[AI] BNB Price: $1,319.78 (+2.34% 24h) | MCap: $48.2B',
  'show CAKE price': '[AI] CAKE Price: $1.89 (-1.23% 24h) | MCap: $450M',
  'my balance': 'Connect wallet to check your BSC balance',
  'top BNB holders': '[AI] Top: Binance Hot Wallet (1.38M BNB), 0x28C6...1d60 (987K BNB)',
  'volume BNB': '[AI] BNB 24h Volume: $2.1B (+15.2%)',
  'lore': '"They built dashboards. We built terminals. BSC intelligence, unlocked."',
  'clear': ''
};

export default function WhoamiPage() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Command[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  // Focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = async (cmd: string) => {
    if (!cmd.trim()) return;

    // Add command to history
    setHistory(prev => [...prev, { input: cmd, output: '', timestamp: Date.now() }]);
    setIsTyping(true);

    // Simulate typing delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Get command response
    const response = commands[cmd as keyof typeof commands] || 'Command not found. Type "help" for available commands.';
    setHistory(prev => prev.map((item, i) => 
      i === prev.length - 1 ? { ...item, output: response } : item
    ));
    setIsTyping(false);
    setInput('');

    // Handle clear command
    if (cmd === 'clear') {
      setHistory([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      handleCommand(input);
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div 
          ref={terminalRef}
          className="bg-black border border-[#00ff00]/30 p-4 h-[80vh] overflow-y-auto font-mono text-[#00ff00]"
        >
          {/* Welcome Message */}
          <div className="mb-4">
            <div className="text-[#00ff00]/60">Welcome to zIRC BSC AI Terminal v0.1.6</div>
            <div className="text-[#00ff00]/40">Type "help" for available BSC query commands</div>
            <div className="text-[#00ff00]/40">Try: show BNB price, my balance, top BNB holders</div>
          </div>

          {/* Command History */}
          {history.map((cmd, index) => (
            <div key={index} className="mb-4">
              <div className="flex items-start space-x-2">
                <span className="text-[#00ff00]">[user@zirc ~]#</span>
                <span>{cmd.input}</span>
              </div>
              {cmd.output && (
                <div className="mt-2 pl-4 text-[#00ff00]/80">
                  {Array.isArray(cmd.output) ? (
                    cmd.output.map((line, i) => (
                      <div key={i}>{line}</div>
                    ))
                  ) : (
                    cmd.output
                  )}
                </div>
              )}
            </div>
          ))}

          {/* Current Input */}
          <div className="flex items-start space-x-2">
            <span className="text-[#00ff00]">[user@zirc ~]#</span>
            <div className="flex-1 flex items-center">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isTyping}
                className="bg-transparent border-none outline-none text-[#00ff00] font-mono flex-1"
                autoFocus
              />
              {!isTyping && <span className="animate-blink">_</span>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 