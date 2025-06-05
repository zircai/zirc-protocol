import { Metadata } from "next"
import { LabsGrid } from "@/components/sections/labs/labs-grid"
import { TerminalIntro } from "@/components/sections/labs/terminal-intro"
import { TerminalFooter } from "@/components/sections/labs/terminal-footer"

export const metadata: Metadata = {
  title: "zIRC Labs",
  description: "Experimental ideas and community proposals for the zIRC ecosystem",
}

export default function LabsPage() {
  return (
    <div className="min-h-screen bg-black text-[#61D040] font-mono">
      <div className="container mx-auto px-4 py-8">
        <TerminalIntro />
        <div className="mt-8">
          <LabsGrid />
        </div>
        <TerminalFooter />
      </div>
    </div>
  )
} 