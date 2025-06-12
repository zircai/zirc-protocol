"use client";

import { useEffect, useRef, useState } from "react";
import { Music, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio("https://cdn1.suno.ai/bb198e87-17e3-4e2b-a6cf-3f902bdb7c52.mp3");
      audioRef.current.loop = true;
    }
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  // Ensure play is triggered by user interaction for browser compatibility
  const handleToggle = () => {
    setPlaying((p) => {
      const next = !p;
      if (audioRef.current) {
        if (next) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch(() => {});
        } else {
          audioRef.current.pause();
        }
      }
      return next;
    });
  };

  // Keep paused state in sync if user toggles
  useEffect(() => {
    if (!audioRef.current) return;
    if (!playing) {
      audioRef.current.pause();
    }
  }, [playing]);

  return (
    <div className="group relative">
      <button
        aria-label={playing ? "Stop the noise" : "Play Chiptune"}
        title={playing ? "Stop the noise" : "Play Chiptune"}
        onClick={handleToggle}
        className="ml-2 border-neon-green text-neon-green hover:bg-neon-green flex h-8 w-8 items-center justify-center border transition-all duration-300 hover:text-black"
      >
        {playing ? <Music className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
      </button>
    </div>
  );
} 