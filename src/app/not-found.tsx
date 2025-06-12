'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { MatrixRain } from '@/components/ui/matrix-rain';

export default function NotFound() {
  const [showHelp, setShowHelp] = useState(false);
  const [input, setInput] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && input.toLowerCase() === 'help') {
        setShowHelp(true);
        setTimeout(() => {
          router.push('/');
        }, 3000);
      } else if (e.key === 'Backspace') {
        setInput((prev) => prev.slice(0, -1));
      } else if (e.key.length === 1) {
        setInput((prev) => prev + e.key);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [input, router]);

  return (
    <div className="relative min-h-screen bg-black">
      <MatrixRain />
      <div className="container flex min-h-screen flex-col items-center justify-center py-28 text-center">
        <div className="relative z-10 max-w-2xl font-mono">
          <h1 className="mb-6 text-6xl font-bold text-[#61D040] sm:text-7xl lg:text-8xl">
            404
          </h1>
          <h2 className="mb-8 text-2xl font-bold text-[#61D040] sm:text-3xl">
            YOU ARE OFF-CHAIN
          </h2>

          <div className="space-y-4 text-left text-lg text-[#61D040]">
            <p>{'>'} This page does not exist in your current layer of reality.</p>
            <p>{'>'} Connect to zIRC to regain access to the signal.</p>
            <p className="mt-8">{'>'} Type 'help' and enter to continue.</p>
          </div>

          {showHelp ? (
            <div className="mt-8 space-y-4 text-left text-lg text-[#61D040]">
              <p>{'>'} Reestablishing node...</p>
              <p>{'>'} Redirecting to zirc.ai</p>
            </div>
          ) : (
            <div className="mt-8 flex items-center text-left text-lg text-[#61D040]">
              <span>{'>'}</span>
              <span className="ml-2">{input}</span>
              <span className="animate-blink ml-1">█</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
