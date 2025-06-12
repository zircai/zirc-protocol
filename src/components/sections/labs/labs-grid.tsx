"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ArrowUp, ArrowDown, Plus } from "lucide-react"
import { SubmitIdeaForm } from "./submit-idea-form"

interface Idea {
  id: string
  title: string
  description: string
  votes: number
  isNew?: boolean
}

const INITIAL_IDEAS: Idea[] = [
  {
    id: "1",
    title: "zIRC Dino Game",
    description: "Matrix-style version of the Chrome Dino game with a Neo-inspired runner.",
    votes: 156,
  },
  {
    id: "2",
    title: "whoami Terminal Quiz",
    description: "An interactive terminal quiz that reveals your anonymous degen archetype.",
    votes: 142,
  },
  {
    id: "3",
    title: "Ghost Identity Generator",
    description: "Generate pseudonymous IDs using modules like ghost.worm, zeroSync, and proto.nym.",
    votes: 138,
  },
  {
    id: "4",
    title: "Leaderboard with Ghost Metrics",
    description: "Track messages sent, channels created, fake points, uptime — hinting at possible airdrops.",
    votes: 135,
  },
  {
    id: "5",
    title: "Fake 4chan-style ASCII Threads",
    description: "Discoverable retro-styled message boards seeded with lore, only accessible via hidden routes.",
    votes: 129,
  },
  {
    id: "6",
    title: "/zine Visual Collage",
    description: "Neo-grunge art zine with lyrics, posters, and rotating manifestos.",
    votes: 124,
  },
  {
    id: "7",
    title: "/matrix Philosophy Route",
    description: "A dive into the principles behind zIRC: freedom, anonymity, and retro-futurism.",
    votes: 118,
  },
  {
    id: "8",
    title: "/root Dev Logs",
    description: "Transparent and raw logs from the creators — timestamped thoughts and system notes.",
    votes: 115,
  },
  {
    id: "9",
    title: "/source Animated Lore Page",
    description: "Terminal-style page simulating typing, with rain animation and animated cursor.",
    votes: 112,
  },
  {
    id: "10",
    title: "Motion Loops from Runway",
    description: "Animated scenes like 'The Terminal is Waking Up' used as ambient drops.",
    votes: 108,
  },
  {
    id: "11",
    title: "OG Image Leaks",
    description: "Covert drops of Open Graph graphics on unknown routes like /void.",
    votes: 105,
  },
  {
    id: "12",
    title: "404 Glitch Game",
    description: "Hidden mini-game or glitch simulation on the 404 page, with ASCII visuals.",
    votes: 102,
  },
  {
    id: "13",
    title: "zIRC Music Mode",
    description: "Background audio with lo-fi or synthwave loops synced with typing/messaging.",
    votes: 98,
  },
  {
    id: "14",
    title: "Matrix Rain Skin",
    description: "An optional UI skin that adds falling green text for immersive hacking vibes.",
    votes: 95,
  },
  {
    id: "15",
    title: "Encrypted Channel Puzzle",
    description: "Access secret chat channels by solving puzzles or using fake command lines.",
    votes: 92,
  },
  {
    id: "16",
    title: "Degen Rank Generator",
    description: "Earn an unofficial 'rank' based on usage patterns. (All meaningless, of course.)",
    votes: 89,
  },
  {
    id: "17",
    title: "Dark Mode Switch Easter Egg",
    description: "Flip to 'hyperdark mode' with inverted color palettes and chaotic glitch sounds.",
    votes: 86,
  },
  {
    id: "18",
    title: "Neo-verse Timeline",
    description: "A visual roadmap of the zIRC timeline, real or fake — blurred to keep mystery.",
    votes: 83,
  },
  {
    id: "19",
    title: "Degen Achievement Badges",
    description: "Retro pixel-art badges for things like 'First 100 Messages' or 'Ghost Channel Creator.'",
    votes: 80,
  },
  {
    id: "20",
    title: "Command Prompt Mode",
    description: "Use / commands or > prompts to trigger hidden UI features.",
    votes: 77,
  },
  {
    id: "21",
    title: "Glitch-to-Discover Routes",
    description: "Typing known commands in chat (e.g., /wake, /pingvoid) reveals secret pages.",
    votes: 74,
  },
  {
    id: "22",
    title: "Anonymous Karma Stats",
    description: "Earn 'karma' based on participation — private to you, but rumors say it matters...",
    votes: 71,
  },
  {
    id: "23",
    title: "Retro Onboarding Adventure",
    description: "A gamified intro that mimics booting up your first terminal in 1998.",
    votes: 68,
  },
  {
    id: "24",
    title: "Cryptic zIRC Posters Generator",
    description: "Make your own propaganda-style poster for the protocol, with preset themes.",
    votes: 65,
  },
]

export function LabsGrid() {
  const [ideas, setIdeas] = useState<Idea[]>(INITIAL_IDEAS)
  const [votedIdeas, setVotedIdeas] = useState<Set<string>>(new Set())
  const [isSubmitFormOpen, setIsSubmitFormOpen] = useState(false)

  const handleVote = (id: string, increment: boolean) => {
    if (votedIdeas.has(id)) return

    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === id
          ? { ...idea, votes: idea.votes + (increment ? 1 : -1) }
          : idea
      )
    )
    setVotedIdeas((prev) => new Set([...prev, id]))
  }

  const handleSubmitIdea = (title: string, description: string) => {
    const newIdea: Idea = {
      id: String(Date.now()),
      title,
      description,
      votes: 0,
      isNew: true,
    }
    setIdeas((prev) => [newIdea, ...prev])
  }

  const sortedIdeas = [...ideas].sort((a, b) => b.votes - a.votes)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">Experimental Ideas</h2>
        <button
          className="flex items-center space-x-2 px-4 py-2 border border-[#61D040]/20 rounded hover:bg-[#61D040]/5 transition-colors"
          onClick={() => setIsSubmitFormOpen(true)}
        >
          <Plus className="w-4 h-4" />
          <span>Submit Idea</span>
        </button>
      </div>

      {sortedIdeas.length === 0 ? (
        <div className="text-center py-12 border border-[#61D040]/20 rounded">
          <p className="text-lg">The Terminal is listening. Submit your spark.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sortedIdeas.map((idea) => (
            <div
              key={idea.id}
              className={cn(
                "border rounded p-4 hover:border-[#61D040]/40 transition-colors relative",
                idea.isNew
                  ? "border-red-500/50 bg-red-500/5"
                  : "border-[#61D040]/20"
              )}
            >
              {idea.isNew && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                    NEW
                  </span>
                </div>
              )}
              <h3 className="font-bold mb-2">{idea.title}</h3>
              <p className="text-sm text-[#61D040]/80 mb-4">{idea.description}</p>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleVote(idea.id, true)}
                  disabled={votedIdeas.has(idea.id)}
                  className={cn(
                    "p-2 rounded hover:bg-[#61D040]/5 transition-colors",
                    votedIdeas.has(idea.id) && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
                <span className="font-mono">{idea.votes}</span>
                <button
                  onClick={() => handleVote(idea.id, false)}
                  disabled={votedIdeas.has(idea.id)}
                  className={cn(
                    "p-2 rounded hover:bg-[#61D040]/5 transition-colors",
                    votedIdeas.has(idea.id) && "opacity-50 cursor-not-allowed"
                  )}
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <SubmitIdeaForm
        isOpen={isSubmitFormOpen}
        onClose={() => setIsSubmitFormOpen(false)}
        onSubmit={handleSubmitIdea}
      />
    </div>
  )
} 