export function UserStats() {
  return (
    <div className="bg-[#61D040]/5 p-6 rounded-lg border border-[#61D040]/20">
      <h2 className="text-xl font-bold mb-4">YOUR STATS</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Messages Sent</p>
          <p className="font-bold">1,204 sparks ignited</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Channels Joined</p>
          <p className="font-bold">9 circuits tapped</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">zPoints</p>
          <p className="font-bold">6,932 zPts</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Echo Rank</p>
          <p className="font-bold">L2</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Time Connected</p>
          <p className="font-bold">3d 6h</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Whispers Heard</p>
          <p className="font-bold">41 terminal mentions</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Uptime</p>
          <p className="font-bold">4d 12h</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Longest Session</p>
          <p className="font-bold">8h 23m</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Commands Executed</p>
          <p className="font-bold">247 protocols</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Terminals Opened</p>
          <p className="font-bold">5 nodes active</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Message Velocity</p>
          <p className="font-bold">12.4 msgs/min</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Echoes Received</p>
          <p className="font-bold">156 pings</p>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-[#61D040]/60">Whispers Sent</p>
          <p className="font-bold">89 encrypted</p>
        </div>
      </div>
    </div>
  )
} 