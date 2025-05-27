import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'zIRC Tokenomics',
  description: 'Deep dive into the economic design, mechanics, governance, vesting, and future role of $ZIRC in the decentralized terminal protocol.',
  keywords: [
    'zIRC',
    'Tokenomics',
    'Cryptocurrency',
    'Token Distribution',
    'Governance',
    'DeFi',
    'Decentralized',
    'Blockchain',
    'Token Utility',
    'DAO',
    'Vesting',
    'Anti-Sybil',
  ],
  openGraph: {
    title: 'zIRC Tokenomics – The Economic Design Behind Decentralized Communication',
    description: 'Deep dive into the economic design, mechanics, governance, vesting, and future role of $ZIRC in the decentralized terminal protocol.',
    type: 'website',
  },
};

const TokenomicsPage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Intro Section */}
          <div className="mb-16">
            <div className="text-neon-green mb-2 font-mono text-sm">
              $ZIRC
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              zIRC Tokenomics
            </h1>
            <p className="mb-4 font-mono text-xl leading-relaxed text-gray-300">
              The economic design behind a decentralized, terminal-native protocol.
            </p>
            <p className="font-mono text-lg text-gray-400">
              For contributors, DAO voters, and degens who want to understand how $ZIRC works under the hood.
            </p>
          </div>

          {/* Token Philosophy */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Token Philosophy
            </h2>
            <div className="space-y-6">
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Why $ZIRC?
                  </h3>
                  <p className="mb-4 font-mono text-sm text-gray-300">
                    $ZIRC was designed to align incentives across the entire zIRC ecosystem, from users and moderators to developers and protocols. It's not just another token—it's the economic backbone of a truly decentralized communication network.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Anti-Extractive Design
                  </h3>
                  <p className="mb-4 font-mono text-sm text-gray-300">
                    Unlike traditional platforms that extract value from users, $ZIRC is designed to empower the community. Every economic mechanism is built to reward genuine participation and contribution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Token Supply & Emission Schedule */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Token Supply & Emission
            </h2>
            <div className="overflow-hidden rounded-lg border border-neon-green/30">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-neon-green/30 bg-black/50">
                    <th className="p-4 text-left font-mono text-sm text-neon-green">Allocation</th>
                    <th className="p-4 text-center font-mono text-sm text-neon-green">%</th>
                    <th className="p-4 text-left font-mono text-sm text-neon-green">Vesting</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-sm">
                  <tr className="border-b border-neon-green/30">
                    <td className="p-4 text-gray-300">Community & Airdrop</td>
                    <td className="p-4 text-center text-gray-300">30%</td>
                    <td className="p-4 text-gray-300">Over 18 months</td>
                  </tr>
                  <tr className="border-b border-neon-green/30">
                    <td className="p-4 text-gray-300">Team & Devs</td>
                    <td className="p-4 text-center text-gray-300">20%</td>
                    <td className="p-4 text-gray-300">1-year cliff, 3-year vesting</td>
                  </tr>
                  <tr className="border-b border-neon-green/30">
                    <td className="p-4 text-gray-300">Treasury & Grants</td>
                    <td className="p-4 text-center text-gray-300">20%</td>
                    <td className="p-4 text-gray-300">DAO-managed proposals</td>
                  </tr>
                  <tr className="border-b border-neon-green/30">
                    <td className="p-4 text-gray-300">Liquidity & Exchanges</td>
                    <td className="p-4 text-center text-gray-300">20%</td>
                    <td className="p-4 text-gray-300">Gradual, event-based</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-gray-300">Reserve</td>
                    <td className="p-4 text-center text-gray-300">10%</td>
                    <td className="p-4 text-gray-300">Strategic usage</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-6 space-y-2 font-mono text-sm text-gray-400">
              <p>• Total Supply: 1,000,000,000 $ZIRC</p>
              <p>• No inflation mechanism</p>
              <p>• Burn mechanism for protocol fees</p>
            </div>
          </div>

          {/* Advanced Utility */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Advanced Utility
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Staking & Access
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Create gated chatrooms</li>
                    <li>• Unlock premium features</li>
                    <li>• Access CLI bots</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Monetization
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Plugin marketplace</li>
                    <li>• Bot monetization</li>
                    <li>• Message highlighting</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Incentives
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Moderation rewards</li>
                    <li>• Security bounties</li>
                    <li>• Community grants</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Future Features
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Bandwidth limits</li>
                    <li>• Custom CLI tools</li>
                    <li>• Protocol integrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Governance Framework */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Governance Framework
            </h2>
            <div className="space-y-6">
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Voting Mechanics
                  </h3>
                  <p className="mb-4 font-mono text-sm text-gray-300">
                    Quadratic voting ensures that large token holders can't dominate decisions. Each token holder's voting power is calculated as the square root of their token balance.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Proposal Lifecycle
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>1. Discussion on forum</li>
                    <li>2. Temperature check</li>
                    <li>3. Formal proposal</li>
                    <li>4. On-chain vote</li>
                    <li>5. Implementation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Anti-Sybil Design */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Anti-Sybil Design
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Identity Validation
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• zk-Proofs</li>
                    <li>• POAP verification</li>
                    <li>• Soulbound tokens</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="border-neon-green/30 bg-black/50">
                <CardContent className="p-6">
                  <h3 className="text-neon-green mb-4 font-mono text-lg">
                    Anti-Farm Measures
                  </h3>
                  <ul className="space-y-2 font-mono text-sm text-gray-300">
                    <li>• Behavior analysis</li>
                    <li>• Reputation scoring</li>
                    <li>• Time-locked rewards</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Roadmap */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Roadmap
            </h2>
            <div className="space-y-4">
              <div className="border-neon-green/30 border bg-black/50 p-6">
                <div className="text-neon-green mb-2 font-mono text-sm">
                  Q3 2025
                </div>
                <h3 className="mb-2 font-mono text-lg text-white">
                  DAO Launch
                </h3>
                <p className="font-mono text-sm text-gray-300">
                  Initial governance framework and treasury management
                </p>
              </div>
              <div className="border-neon-green/30 border bg-black/50 p-6">
                <div className="text-neon-green mb-2 font-mono text-sm">
                  Q4 2025
                </div>
                <h3 className="mb-2 font-mono text-lg text-white">
                  Plugin Monetization
                </h3>
                <p className="font-mono text-sm text-gray-300">
                  Staking features and plugin marketplace launch
                </p>
              </div>
              <div className="border-neon-green/30 border bg-black/50 p-6">
                <div className="text-neon-green mb-2 font-mono text-sm">
                  Q1 2026
                </div>
                <h3 className="mb-2 font-mono text-lg text-white">
                  zkChat & L2
                </h3>
                <p className="font-mono text-sm text-gray-300">
                  Privacy features and layer 2 deployment
                </p>
              </div>
              <div className="border-neon-green/30 border bg-black/50 p-6">
                <div className="text-neon-green mb-2 font-mono text-sm">
                  Q2 2026
                </div>
                <h3 className="mb-2 font-mono text-lg text-white">
                  Community & Integrations
                </h3>
                <p className="font-mono text-sm text-gray-300">
                  Grant program and protocol partnerships
                </p>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div className="mb-16">
            <h2 className="text-neon-green mb-6 font-mono text-2xl">
              Resources
            </h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Link href="https://etherscan.io/address/0x..." target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  Smart Contract
                </Button>
              </Link>
              <Link href="https://github.com/zirc" target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  GitHub Repo
                </Button>
              </Link>
              <Link href="https://forum.zirc.ai" target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  Governance Forum
                </Button>
              </Link>
              <Link href="https://snapshot.org/#/zirc" target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  Snapshot Voting
                </Button>
              </Link>
              <Link href="/whitepaper.pdf" target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  Whitepaper
                </Button>
              </Link>
              <Link href="/audit.pdf" target="_blank">
                <Button variant="outline" className="w-full border-neon-green/30 text-neon-green hover:bg-neon-green/10">
                  Audit Report
                </Button>
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="mb-8 flex flex-wrap justify-center gap-4">
              <Button className="bg-neon-green text-black hover:bg-neon-green/90">
                CLAIM AIRDROP
              </Button>
              <Link href="/governance">
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
                  View Governance
                </Button>
              </Link>
              <Link href="https://forum.zirc.ai">
                <Button variant="outline" className="border-neon-green text-neon-green hover:bg-neon-green/10">
                  Join Forum
                </Button>
              </Link>
            </div>
            <p className="font-mono text-sm text-gray-400">
              Join the zIRC ecosystem and help shape the future of decentralized communication.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsPage; 