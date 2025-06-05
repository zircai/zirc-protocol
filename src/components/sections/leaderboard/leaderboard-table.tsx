import { cn } from "@/lib/utils"

const MOCK_DATA = [
  {
    rank: 1,
    handle: "zeroSync",
    zPoints: 15000,
    echoRank: "L5",
    messages: 12450,
    status: "active",
  },
  {
    rank: 2,
    handle: "ghost.worm",
    zPoints: 12800,
    echoRank: "L4",
    messages: 10200,
    status: "asleep",
  },
  {
    rank: 3,
    handle: "glitchNode",
    zPoints: 11500,
    echoRank: "L4",
    messages: 8900,
    status: "active",
  },
  {
    rank: 4,
    handle: "cipher.sand",
    zPoints: 9800,
    echoRank: "L3",
    messages: 7600,
    status: "ghosting",
  },
  {
    rank: 5,
    handle: "void.pulse",
    zPoints: 8500,
    echoRank: "L3",
    messages: 6200,
    status: "active",
  },
]

export function LeaderboardTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#61D040]/20">
            <th className="px-4 py-2 text-left">RANK</th>
            <th className="px-4 py-2 text-left">HANDLE</th>
            <th className="px-4 py-2 text-left">ZPOINTS</th>
            <th className="px-4 py-2 text-left">ECHO RANK</th>
            <th className="px-4 py-2 text-left">MESSAGES</th>
            <th className="px-4 py-2 text-left">STATUS</th>
          </tr>
        </thead>
        <tbody>
          {MOCK_DATA.map((row) => (
            <tr
              key={row.handle}
              className="border-b border-[#61D040]/10 hover:bg-[#61D040]/5 transition-colors"
            >
              <td className="px-4 py-2">#{row.rank}</td>
              <td className="px-4 py-2 font-bold">{row.handle}</td>
              <td className="px-4 py-2">{row.zPoints.toLocaleString()}</td>
              <td className="px-4 py-2">{row.echoRank}</td>
              <td className="px-4 py-2">{row.messages.toLocaleString()}</td>
              <td className="px-4 py-2">
                <span
                  className={cn(
                    "inline-block px-2 py-1 rounded text-xs",
                    row.status === "active" && "bg-[#61D040]/20",
                    row.status === "asleep" && "bg-yellow-500/20",
                    row.status === "ghosting" && "bg-gray-500/20"
                  )}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
} 