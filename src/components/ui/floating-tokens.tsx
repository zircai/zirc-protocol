'use client';

import { useEffect, useState } from 'react';

interface Token {
  id: number;
  x: number;
  y: number;
  rotation: number;
  scale: number;
  speed: number;
}

export const FloatingTokens = () => {
  const [tokens, setTokens] = useState<Token[]>([]);

  useEffect(() => {
    // Create initial tokens
    const initialTokens: Token[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      rotation: Math.random() * 360,
      scale: 0.5 + Math.random() * 0.5,
      speed: 0.2 + Math.random() * 0.3,
    }));

    setTokens(initialTokens);

    // Animation loop
    const animate = () => {
      setTokens((prevTokens) =>
        prevTokens.map((token) => ({
          ...token,
          y: (token.y + token.speed) % 100,
          rotation: (token.rotation + 0.5) % 360,
        }))
      );
    };

    const interval = setInterval(animate, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {tokens.map((token) => (
        <div
          key={token.id}
          className="absolute text-[#61D040] opacity-20"
          style={{
            left: `${token.x}%`,
            top: `${token.y}%`,
            transform: `rotate(${token.rotation}deg) scale(${token.scale})`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
              fill="currentColor"
            />
            <path
              d="M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z"
              fill="currentColor"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}; 