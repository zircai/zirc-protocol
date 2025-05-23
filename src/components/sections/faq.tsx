"use client";
import { useState } from 'react';

const FAQS = [
  {
    q: 'Why no servers?',
    a: 'The protocol is fully peer-to-peer. Messages are relayed and stored by the network, not by any central server.'
  },
  {
    q: 'How is it encrypted?',
    a: 'All messages are end-to-end encrypted using modern cryptography. Zero-knowledge: only you and your recipient can read your messages.'
  },
  {
    q: 'Will it stay free?',
    a: 'Yes. The protocol and reference client are open source and free to use, forever.'
  },
  {
    q: 'Can I build on it?',
    a: 'Absolutely! The protocol is open, extensible, and designed for hackers. Fork it, extend it, or build your own client.'
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-16 md:py-28 lg:py-32 bg-black border-b border-neon-green/20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-mono font-bold text-white mb-12">
          FAQ
        </h2>
        <div className="max-w-2xl mx-auto">
          {FAQS.map((item, i) => (
            <div key={i} className="mb-4 border border-neon-green/30 rounded bg-black/70">
              <button
                className="w-full text-left px-6 py-4 font-mono text-neon-green text-lg focus:outline-none flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span>{item.q}</span>
                <span className="text-neon-green">{open === i ? '-' : '+'}</span>
              </button>
              {open === i && (
                <div
                  id={`faq-panel-${i}`}
                  className="px-6 pb-4 pt-2 text-gray-300 font-mono text-base whitespace-pre-line border-t border-neon-green/20 bg-black"
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
