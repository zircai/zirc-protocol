'use client';

import { useState, useEffect, useRef } from 'react';

interface Command {
  input: string;
  output: string | string[];
  timestamp: number;
}

const commands = {
  'whoami': 'anonymous.degen@zirc',
  'zirc --version': 'v0.1.6-alpha-nightshift',
  'sudo moon': 'Permission denied. You are not a whale.',
  'ping mother': 'Request timed out.',
  'help': [
    'Try: whoami, tip, join, sudo su, connect, lore, clear',
    'Available commands:',
    '  whoami    - Check your identity',
    '  tip       - Send $ZIRC tokens',
    '  join      - Join a channel',
    '  sudo su   - Elevate privileges',
    '  connect   - Connect to network',
    '  lore      - View zIRC lore',
    '  clear     - Clear terminal',
    '  help      - Show this help'
  ],
  'tip': 'Sent 6.9 $ZIRC to mod@alpha.channel ✔',
  'connect irc.zirc.ai': '...connected. Room: /alpha-terminal',
  'lore': '"They built servers. We built shadows."',
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
            <div className="text-[#00ff00]/60">Welcome to zIRC Terminal v0.1.6</div>
            <div className="text-[#00ff00]/40">Type "help" for available commands</div>
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