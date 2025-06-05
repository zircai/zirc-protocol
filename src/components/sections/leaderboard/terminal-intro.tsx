import { cn } from "@/lib/utils"

export function TerminalIntro() {
  return (
    <div className="space-y-2">
      <div className="flex items-center space-x-2">
        <span className="text-[#61D040]">&gt;</span>
        <span className="animate-pulse">LEADERBOARD MODE: LOCAL OPERATORS</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-[#61D040]">&gt;</span>
        <span className="animate-pulse">leaderboard --scan local</span>
      </div>
      <div className="h-px w-full bg-[#61D040]/20 mt-4" />
    </div>
  )
} 