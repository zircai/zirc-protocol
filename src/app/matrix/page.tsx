'use client';

import { useEffect, useState } from 'react';
import MatrixRain from './components/MatrixRain';
import TypewriterText from './components/TypewriterText';

const messages = [
  "Decentralization isn't the future. It's the default.",
  "The web forgot its roots. We didn't.",
  "We're not building a chat app. We're rebuilding a protocol.",
  "No servers. No gatekeepers. Just encrypted flow.",
  "Your words, your keys, your channel.",
  "This is zIRC. You're already inside."
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