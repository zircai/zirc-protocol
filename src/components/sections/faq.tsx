'use client';
import { useState } from 'react';

const FAQS = [
  {
    q: 'Why no servers?',
    a: 'The protocol is fully peer-to-peer. Messages are relayed and stored by the network, not by any central server.',
  },
  {
    q: 'How is it encrypted?',
    a: 'All messages are end-to-end encrypted using modern cryptography. Zero-knowledge: only you and your recipient can read your messages.',
  },
  {
    q: 'Will it stay free?',
    a: 'Yes. The protocol and reference client are open source and free to use, forever.',
  },
  {
    q: 'Can I build on it?',
    a: 'Absolutely! The protocol is open, extensible, and designed for hackers. Fork it, extend it, or build your own client.',
  },
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
