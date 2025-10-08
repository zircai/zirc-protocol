'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is zIRC.ai BSC Terminal?',
    a: 'zIRC.ai is an AI-powered terminal for Binance Smart Chain that lets you ask natural questions about BSC data and get instant, terminal-style answers. No dashboards, just direct AI responses for degens.',
  },
  {
    q: 'How do I use the AI Terminal?',
    a: 'Connect your wallet and start asking questions! Try commands like:\n• "show CAKE price"\n• "top BNB holders"\n• "my BNB balance"\n• "BNB volume today"\n• "/help" for all commands',
  },
  {
    q: 'What BSC data can I query?',
    a: 'You can ask about:\n• Token prices (BNB, CAKE, BUSD, etc.)\n• Wallet balances and top holders\n• Trading volume and market data\n• Transaction details\n• General BSC network info',
  },
  {
    q: 'Do I need to pay to use it?',
    a: 'Free tier includes 10 queries per day. Pro users get unlimited queries, premium data feeds, and advanced features. Connect your wallet to start with the free tier.',
  },
  {
    q: 'Is my wallet data secure?',
    a: 'Yes! We only read your wallet address for balance queries. We never store private keys or sensitive data. All queries are processed securely and your wallet remains in your control.',
  },
  {
    q: 'What makes zIRC.ai different?',
    a: 'Unlike traditional DeFi dashboards, zIRC.ai uses a terminal interface with AI to give you direct answers. It\'s designed for degens who want fast, no-nonsense BSC data without complex UIs.',
  },
  {
    q: 'Can I use it without connecting a wallet?',
    a: 'Yes! You can ask general BSC questions without connecting a wallet. However, connecting your wallet unlocks personal features like balance queries and personalized insights.',
  },
  {
    q: 'What are the tokenomics of $ZIRC?',
    a: '$ZIRC has a fair and transparent distribution:\n• 30% Community & Airdrop\n• 20% Team & Devs\n• 20% Treasury & Grants\n• 20% Liquidity & Exchanges\n• 10% Reserve\nLearn more about our tokenomics on the dedicated page.',
  },
  {
    q: 'Is there a free tier?',
    a: 'Yes! We offer a generous free plan that includes basic access to the platform. For advanced features like unlimited compute, priority support, and custom integrations, check out our Startup and Enterprise plans.',
  }
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="border-neon-green/20 border-b bg-black py-16 md:py-28 lg:py-32">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-mono text-3xl font-bold text-white md:text-5xl">
          FAQ
        </h2>
        <div className="mx-auto max-w-2xl">
          {FAQS.map((item, i) => (
            <div
              key={i}
              className="border-neon-green/30 mb-4 rounded border bg-black/70"
            >
              <button
                className="text-neon-green flex w-full items-center justify-between px-6 py-4 text-left font-mono text-lg focus:outline-none"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{item.q}</span>
                <span className="text-neon-green">
                  {open === i ? '-' : '+'}
                </span>
              </button>
              {open === i && (
                <div
                  id={`faq-panel-${i}`}
                  className="border-neon-green/20 border-t bg-black px-6 pt-2 pb-4 font-mono text-base whitespace-pre-line text-gray-300"
                  style={{ fontFamily: 'monospace' }}
                >
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
