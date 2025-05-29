import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { FloatingTokens } from '@/components/ui/floating-tokens';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '$ZIRC Token | zIRC',
  description: 'The native token powering zIRC. Earn, tip, access premium features, and govern the protocol with $ZIRC.',
  keywords: [
    'zIRC',
    'Token',
    'Cryptocurrency',
    'DeFi',
    'Decentralized',
    'Blockchain',
    'Token Utility',
    'Tokenomics',
  ],
  openGraph: {
    title: '$ZIRC Token – Powering the Terminal',
    description: 'The native token powering zIRC. Earn, tip, access premium features, and govern the protocol with $ZIRC.',
    type: 'website',
  },
};

const TokenPage = () => {
  return (
    <section className="relative min-h-screen bg-black">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"
        style={{
          backgroundPosition: '-1px -1px',
        }}
      />
      
      {/* Floating Tokens */}
      <FloatingTokens />
      
      <div className="container relative py-16 md:py-28 lg:py-32">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="mb-4 text-4xl font-bold text-[#61D040] md:text-6xl">$ZIRC Token</h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-zinc-400">
            The fuel behind the terminal. Talk, earn, and govern with $ZIRC.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/holders" passHref legacyBehavior>
              <a className="inline-flex items-center justify-center rounded-md bg-[#61D040] px-4 py-2 font-mono text-base font-medium text-black transition-colors hover:bg-[#61D040]/90 focus:outline-none focus:ring-2 focus:ring-[#61D040] focus:ring-offset-2">
                Holders' Benefits
              </a>
            </Link>
            <Link href="/tokenomics" passHref legacyBehavior>
              <a className="inline-flex items-center justify-center rounded-md border border-[#61D040] bg-transparent px-4 py-2 font-mono text-base font-medium text-[#61D040] transition-colors hover:bg-[#61D040]/10 focus:outline-none focus:ring-2 focus:ring-[#61D040] focus:ring-offset-2">
                Read Full Tokenomics
              </a>
            </Link>
          </div>
        </div>

        {/* What is $ZIRC Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">What is $ZIRC?</h2>
          <p className="text-lg text-zinc-400">
            $ZIRC is the native token powering zIRC. It rewards real participation, unlocks new features, and gives you a voice in protocol governance. zIRC is more than a chat app—it's a decentralized social layer with built-in economic coordination.
          </p>
        </div>

        {/* Utility Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">Utility</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-zinc-800 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#61D040]">Earn</h3>
                <p className="text-zinc-400">
                  Earn $ZIRC by chatting, hosting rooms, contributing bots, or spreading alpha.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#61D040]">Tip</h3>
                <p className="text-zinc-400">
                  Instantly tip contributors, mods, and devs from your wallet or in-chat.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#61D040]">Access</h3>
                <p className="text-zinc-400">
                  Stake $ZIRC to unlock encrypted rooms, premium nodes, or dev tools.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#61D040]">Govern</h3>
                <p className="text-zinc-400">
                  Vote on protocol upgrades, community funding, and feature proposals.
                </p>
              </CardContent>
            </Card>
            <Card className="border-zinc-800 bg-black/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold text-[#61D040]">Build</h3>
                <p className="text-zinc-400">
                  Use $ZIRC to launch bots, create plugins, or bridge chains.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tokenomics Section */}
        <div className="mb-16">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">Tokenomics</h2>
          <div className="overflow-hidden rounded-lg border border-zinc-800">
            <table className="w-full">
              <thead>
                <tr className="border-b border-zinc-800 bg-black/50">
                  <th className="p-4 text-left text-[#61D040]">Use Case</th>
                  <th className="p-4 text-right text-[#61D040]">Allocation</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-400">Community & Airdrop</td>
                  <td className="p-4 text-right text-zinc-400">30%</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-400">Team & Devs</td>
                  <td className="p-4 text-right text-zinc-400">20%</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-400">Treasury & Grants</td>
                  <td className="p-4 text-right text-zinc-400">20%</td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="p-4 text-zinc-400">Liquidity & Exchanges</td>
                  <td className="p-4 text-right text-zinc-400">20%</td>
                </tr>
                <tr>
                  <td className="p-4 text-zinc-400">Reserve</td>
                  <td className="p-4 text-right text-zinc-400">10%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How to Get $ZIRC Section */}
        <div className="text-center">
          <h2 className="mb-6 text-2xl font-bold text-white md:text-3xl">How to Get $ZIRC</h2>
          <div className="mb-8 space-y-2 text-zinc-400">
            <p>• Claim via early access / chat usage</p>
            <p>• Earn by participating</p>
            <p>• Trade on supported DEXs (coming soon)</p>
          </div>
          <div className="flex justify-center gap-4">
            <Button className="bg-[#61D040] text-black hover:bg-[#61D040]/90">
              Claim Airdrop
            </Button>
            <Button variant="outline" className="border-[#61D040] text-[#61D040] hover:bg-[#61D040]/10">
              Connect Wallet
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenPage; 