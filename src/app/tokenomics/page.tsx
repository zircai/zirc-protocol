import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '$ZIRC Tokenomics | BSC AI Terminal',
  description: 'Deep dive into $ZIRC token economics: supply, utility, governance, and how it powers the first AI terminal for Binance Smart Chain. For investors, DAO voters, and BSC degens.',
  keywords: [
    'ZIRC Tokenomics',
    'BSC Token Economics',
    'AI Terminal Token',
    'BNB Chain Tokenomics',
    'Crypto Token Utility',
    'BSC Governance',
    'DeFi Tokenomics',
    'BEP-20 Token',
  ],
};

const Divider = ({ label }: { label: string }) => (
  <div className="my-12 flex items-center gap-4">
    <div className="flex-1 border-t border-neon-green/30" />
    <span className="font-mono text-neon-green text-xs uppercase tracking-widest">{label}</span>
    <div className="flex-1 border-t border-neon-green/30" />
  </div>
);

const TokenomicsPage = () => {
  return (
    <section className="min-h-screen bg-black py-12 text-white font-mono">
      <div className="container mx-auto max-w-3xl px-4">
        {/* 1. Intro Section */}
        <h1 className="text-4xl md:text-5xl font-bold text-neon-green mb-2">$ZIRC Tokenomics</h1>
        <h2 className="text-xl md:text-2xl text-neon-green mb-4">The economic design behind the first AI terminal for BSC.</h2>
        <p className="mb-8 text-gray-300">This page is for investors, DAO voters, and BSC degens who want to understand how $ZIRC powers BSC intelligence. Dive into the token mechanics, governance, and future of the zIRC protocol.</p>

        <Divider label="Token Philosophy" />
        {/* 2. Token Philosophy */}
        <h3 className="text-2xl text-neon-green mb-2">Why $ZIRC?</h3>
        <p className="mb-4 text-gray-300">zIRC needed its own token to align incentives across users, developers, and the BSC ecosystem. $ZIRC enables a sustainable model where users pay for premium queries, developers earn from API usage, and the community governs feature development. Every mechanic—from staking to governance—prioritizes user value and protocol sustainability. The goal: a protocol where value flows to those who query, analyze, and build on BSC data.</p>
        <ul className="mb-8 list-disc list-inside text-gray-400">
          <li>Query-to-earn: Rewards active users and data contributors</li>
          <li>Sustainable model: Revenue from Pro tier funds development</li>
          <li>Open ecosystem: Developers can build on zIRC APIs</li>
        </ul>

        <Divider label="Supply & Emission" />
        {/* 3. Token Supply & Emission Schedule */}
        <div className="overflow-x-auto mb-6">
          <table className="w-full border border-neon-green/30 text-sm">
            <thead>
              <tr className="bg-black/70 text-neon-green">
                <th className="p-3 border-b border-neon-green/20 text-left">Allocation</th>
                <th className="p-3 border-b border-neon-green/20 text-right">%</th>
                <th className="p-3 border-b border-neon-green/20 text-left">Vesting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border-b border-neon-green/10">Community & Airdrop</td>
                <td className="p-3 border-b border-neon-green/10 text-right">30%</td>
                <td className="p-3 border-b border-neon-green/10">Over 18 months</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-neon-green/10">Team & Devs</td>
                <td className="p-3 border-b border-neon-green/10 text-right">20%</td>
                <td className="p-3 border-b border-neon-green/10">1-year cliff, 3-year vesting</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-neon-green/10">Treasury & Grants</td>
                <td className="p-3 border-b border-neon-green/10 text-right">20%</td>
                <td className="p-3 border-b border-neon-green/10">DAO-managed proposals</td>
              </tr>
              <tr>
                <td className="p-3 border-b border-neon-green/10">Liquidity & Exchanges</td>
                <td className="p-3 border-b border-neon-green/10 text-right">20%</td>
                <td className="p-3 border-b border-neon-green/10">Gradual, event-based</td>
              </tr>
              <tr>
                <td className="p-3">Reserve</td>
                <td className="p-3 text-right">10%</td>
                <td className="p-3">Strategic usage</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ul className="mb-8 text-gray-400 text-xs">
          <li>Total supply cap: <span className="text-neon-green font-bold">1,000,000,000 $ZIRC</span></li>
          <li>Inflation: <span className="text-neon-green font-bold">None (fixed supply)</span></li>
          <li>Burn logic: <span className="text-neon-green font-bold">Protocol-level burns on spam/abuse, future DAO proposals</span></li>
        </ul>

        <Divider label="Advanced Utility" />
        {/* 4. Advanced Utility */}
        <h3 className="text-2xl text-neon-green mb-2">What can you do with $ZIRC?</h3>
        <ul className="mb-8 list-disc list-inside text-gray-400">
          <li>Stake $ZIRC to unlock unlimited BSC queries (no daily limits)</li>
          <li>Access premium BSC data: whale tracking, advanced analytics, custom alerts</li>
          <li>Use developer APIs to build BSC analytics tools and integrations</li>
          <li>Vote on protocol upgrades, feature priorities, and treasury allocation</li>
          <li>Earn protocol revenue share from Pro subscriptions (5-15% based on stake)</li>
          <li>Future: Multi-chain expansion (Ethereum, Arbitrum, Base)</li>
        </ul>

        <Divider label="Governance" />
        {/* 5. Governance Framework */}
        <h3 className="text-2xl text-neon-green mb-2">How does governance work?</h3>
        <ul className="mb-4 list-disc list-inside text-gray-400">
          <li>Voting: <span className="text-neon-green">1 token = 1 vote</span> (with future quadratic/rep-based options)</li>
          <li>Delegation: Token holders can delegate votes to trusted community members</li>
          <li>Proposal lifecycle: Idea → Discussion → Vote → On-chain execution</li>
          <li>DAO treasury: Managed by token holder votes, funds protocol growth and grants</li>
          <li>Examples: Protocol upgrades, feature launches, grant approvals, treasury spend</li>
        </ul>
        <div className="mb-8">
          <Link href="/governance" className="text-neon-green underline mr-4">View Governance</Link>
          <Link href="https://snapshot.org/#/zirc.eth" className="text-neon-green underline" target="_blank">Snapshot Voting</Link>
        </div>

        <Divider label="Fair Distribution" />
        {/* 6. Fair Distribution */}
        <h3 className="text-2xl text-neon-green mb-2">Keeping it fair</h3>
        <ul className="mb-8 list-disc list-inside text-gray-400">
          <li>No bot farming: Airdrops based on real terminal usage, not wallet activity</li>
          <li>Query-to-earn: Rewards genuine users who contribute to data quality</li>
          <li>Anti-spam: Rate limits prevent query abuse and bot manipulation</li>
          <li>Future: Proof-of-query validation for advanced features</li>
        </ul>

        <Divider label="Roadmap" />
        {/* 7. Roadmap */}
        <div className="mb-8">
          <ul className="text-gray-300 text-sm space-y-2">
            <li><span className="text-neon-green">Q2 2025:</span> $ZIRC launch on BSC + Free tier</li>
            <li><span className="text-neon-green">Q3 2025:</span> Pro tier + Staking rewards + DAO governance</li>
            <li><span className="text-neon-green">Q4 2025:</span> Advanced analytics + Developer APIs + Revenue sharing</li>
            <li><span className="text-neon-green">Q1 2026:</span> Multi-chain expansion (Ethereum, Arbitrum, Base)</li>
          </ul>
        </div>

        <Divider label="Resources" />
        {/* 8. Resources Section */}
        <div className="mb-12 grid gap-4 md:grid-cols-2">
          <a href="https://etherscan.io/address/0x123..." target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">Smart Contract</span>
            <div className="text-xs text-gray-400 mt-1">0x123... (Etherscan)</div>
          </a>
          <a href="https://github.com/zirc-protocol" target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">GitHub Repo</span>
            <div className="text-xs text-gray-400 mt-1">zirc-protocol</div>
          </a>
          <a href="https://forum.zirc.ai" target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">Governance Forum</span>
            <div className="text-xs text-gray-400 mt-1">forum.zirc.ai</div>
          </a>
          <a href="https://snapshot.org/#/zirc.eth" target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">Snapshot Voting</span>
            <div className="text-xs text-gray-400 mt-1">snapshot.org</div>
          </a>
          <a href="/whitepaper.pdf" target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">Whitepaper PDF</span>
            <div className="text-xs text-gray-400 mt-1">Download</div>
          </a>
          <a href="/audit-report.pdf" target="_blank" className="block border border-neon-green/30 rounded p-4 hover:bg-neon-green/10 transition">
            <span className="text-neon-green font-bold">Audit Report</span>
            <div className="text-xs text-gray-400 mt-1">Download</div>
          </a>
        </div>

        <Divider label="Get Involved" />
        {/* 9. CTA Section */}
        <div className="text-center mb-8 flex flex-col md:flex-row gap-4 justify-center">
          <Link href="/airdrop" className="bg-neon-green text-black px-8 py-4 font-mono text-lg rounded shadow hover:bg-white transition">Claim Airdrop</Link>
          <Link href="/governance" className="border border-neon-green text-neon-green px-8 py-4 font-mono text-lg rounded shadow hover:bg-neon-green hover:text-black transition">View Governance</Link>
          <a href="https://forum.zirc.ai" target="_blank" className="border border-neon-green text-neon-green px-8 py-4 font-mono text-lg rounded shadow hover:bg-neon-green hover:text-black transition">Join Forum</a>
        </div>
      </div>
    </section>
  );
};

export default TokenomicsPage; 