'use client';

import { useEffect, useState } from 'react';

const logs = [
  {
    user: 'boot',
    command: 'DevLog 001',
    content: 'Woke up thinking: what if BSC data wasn\'t trapped in dashboards, but flowing through terminals?'
  },
  {
    user: 'dev',
    command: 'Push v0.0.4',
    content: 'BSC data streams go live. Real-time alpha for those who query.'
  },
  {
    user: 'root',
    command: 'Patch Notes',
    content: `– Integrated Etherscan V2 Multichain API
– Added CoinGecko price feeds
– Implemented natural language query parser`
  },
  {
    user: 'system',
    command: 'Thought Dump',
    content: 'If BSCScan had an AI assistant, it would look like us.'
  },
  {
    user: 'user',
    command: './dream',
    content: `I saw neon letters pulsing through the dark.
They whispered: "Query BNB. Find alpha. ZIRC is live."`
  }
];

export default function RootPage() {
  const [visibleLogs, setVisibleLogs] = useState<number[]>([]);

  useEffect(() => {
    const showLogs = () => {
      logs.forEach((_, index) => {
        setTimeout(() => {
          setVisibleLogs(prev => [...prev, index]);
        }, index * 2000); // Show each log with a 2-second delay
      });
    };

    showLogs();
  }, []);

  return (
    <div className="min-h-screen bg-black p-4 md:p-8">
      <div className="max-w-3xl mx-auto">
        <div className="terminal-text text-[#00ff00] font-mono space-y-6">
          {logs.map((log, index) => (
            <div
              key={index}
              className={`opacity-0 transition-opacity duration-1000 ${
                visibleLogs.includes(index) ? 'opacity-100' : ''
              }`}
            >
              <div className="flex items-start space-x-2">
                <span className="text-[#00ff00]">[{log.user}@zirc ~]#</span>
                <span className="text-[#00ff00]">{log.command}</span>
              </div>
              <div className="mt-2 pl-4 text-[#00ff00]/80 whitespace-pre-line">
                {log.content}
              </div>
            </div>
          ))}
          {visibleLogs.length === logs.length && (
            <div className="text-[#00ff00] font-mono animate-blink">_</div>
          )}
        </div>
      </div>
    </div>
  );
} 