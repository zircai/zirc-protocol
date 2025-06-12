'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'What is ZIRC Terminal?',
    a: 'ZIRC Terminal is a decentralized AI platform that provides access to distributed GPU infrastructure for AI training and inference at scale. It combines quantum processing capabilities with cyberpunk aesthetics for a unique user experience.',
  },
  {
    q: 'What is $ZIRC token?',
    a: '$ZIRC is the native token powering the zIRC ecosystem. It enables decentralized governance, rewards participation, and unlocks premium features. Users can earn $ZIRC through active participation, staking, and community contributions.',
  },
  {
    q: 'How can I earn $ZIRC?',
    a: 'You can earn $ZIRC through various activities:\n• Active chat participation\n• Hosting popular rooms\n• Contributing to the ecosystem\n• Staking tokens\n• Early access rewards\n• Community contributions',
  },
  {
    q: 'How does the decentralized compute work?',
    a: 'Our platform connects you to a global network of GPU clusters, including H100, A100, and RTX 4090 nodes. All compute resources are distributed across multiple data centers, ensuring high availability and redundancy.',
  },
  {
    q: 'What security measures are in place?',
    a: 'We implement military-grade encryption and a comprehensive cyber protocol (v3.0). All communications are end-to-end encrypted, and we offer features like pseudonym rotation and hidden wallet mode for enhanced privacy.',
  },
  {
    q: 'How do I get started?',
    a: 'Simply open the terminal or web dApp, connect your wallet or generate an anonymous key, and you\'re ready to start. You can join public rooms, create private chats, or begin training your AI models immediately.',
  },
  {
    q: 'What makes ZIRC unique?',
    a: 'ZIRC combines retro aesthetics with cutting-edge technology. We offer meme market feeds, shitcoin scanners, degen watchlists, and fully decentralized alpha terminals. Our platform is built for both serious AI development and community engagement.',
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
