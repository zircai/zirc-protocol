'use client';

import { useEffect, useState } from 'react';
import MatrixRain from './components/MatrixRain';
import TypewriterText from './components/TypewriterText';

const messages = [
  "Data isn't locked in dashboards. It flows through terminals.",
  "BSC forgot its degens. We didn't.",
  "We're not building another explorer. We're building intelligence.",
  "No SQL. No dashboards. Just AI-powered alpha.",
  "Your queries, your data, your terminal.",
  "This is zIRC. You're already querying."
];

export default function MatrixPage() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    if (currentMessageIndex < messages.length) {
      const timer = setTimeout(() => {
        setCurrentMessageIndex(prev => prev + 1);
      }, 4000); // Show each message for 4 seconds
      return () => clearTimeout(timer);
    }
  }, [currentMessageIndex]);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="space-y-8 text-center">
          {messages.slice(0, currentMessageIndex + 1).map((message, index) => (
            <TypewriterText
              key={index}
              text={message}
              delay={index * 4000}
              className="text-[#00ff00] font-mono text-xl md:text-2xl"
            />
          ))}
          {currentMessageIndex === messages.length - 1 && (
            <div className="text-[#00ff00] font-mono text-2xl animate-blink">_</div>
          )}
        </div>
      </div>
    </div>
  );
} 