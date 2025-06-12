import { Metadata } from "next"
import { LeaderboardTable } from "@/components/sections/leaderboard/leaderboard-table"
import { UserStats } from "@/components/sections/leaderboard/user-stats"
import { TerminalIntro } from "@/components/sections/leaderboard/terminal-intro"
import { TerminalFooter } from "@/components/sections/leaderboard/terminal-footer"

export const metadata: Metadata = {
  title: "zIRC Leaderboard",
  description: "Local operators leaderboard for zIRC network",
}

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-black text-[#61D040] font-mono">
      <div className="container mx-auto px-4 py-8">
        <TerminalIntro />
        <div className="mt-8 space-y-8">
          <LeaderboardTable />
          <UserStats />
        </div>
        <TerminalFooter />
      </div>
    </div>
  )
} 