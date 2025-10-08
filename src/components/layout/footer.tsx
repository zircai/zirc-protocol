import Link from 'next/link';

import {
  Terminal,
  Shield,
  Cpu,
  Database,
  Network,
  Github,
  Twitter,
  Linkedin,
} from 'lucide-react';

const ASCII_ART = `
╔═══════════════════════════════════════════════╗
║           ZIRC TERMINAL v2.1.0          ║
║         COPYRIGHT 2025 - CYBER_CORP           ║
╚═══════════════════════════════════════════════╝
`;

const socialNetworks = [
  {
    icon: Github,
    href: 'https://github.com/zircai/zirc-protocol',
    label: 'GITHUB_REPO',
    status: 'PUBLIC',
  },
  {
    icon: Twitter,
    href: 'https://x.com/zircai',
    label: 'TWITTER_FEED',
    status: 'LIVE',
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const systemTime = new Date().toLocaleString('en-US', {
    timeZone: 'UTC',
    hour12: false,
  });

  return (
    <footer className="border-neon-green border-t-2 bg-black">
      {/* CTA Section */}
      <div className="from-neon-green/10 via-neon-cyan/10 to-neon-blue/10 border-neon-green/30 border-b bg-gradient-to-r">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="border-neon-cyan/50 mx-auto max-w-4xl border bg-black/50 p-8">
            <div className="text-neon-cyan mb-4 font-mono text-sm">
              {'>'} SYSTEM_INITIALIZATION_PROMPT
            </div>
            <h2 className="text-neon-green mb-4 font-mono text-4xl font-bold uppercase md:text-6xl">
              ACTIVATE_BSC_TERMINAL
            </h2>
            <p className="text-neon-cyan mb-8 font-mono text-xl">
              {'>'} AI_PROCESSING_AWAITS_YOUR_COMMAND
              <br />
              {'>'} BSC_DATA_ACCESS_MODE: STANDBY
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a href="https://app.zirc.ai/" target="_blank" rel="noopener noreferrer">
                <button className="retro-button h-14 min-w-[240px] px-8 text-lg">
                  LAUNCH_TERMINAL
                </button>
              </a>
              <Link href="/pricing">
                <button className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan h-14 min-w-[240px] border-2 px-8 font-mono text-lg uppercase transition-all duration-300 hover:text-black">
                  VIEW_PRICING
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ASCII Art Section */}
      <div className="border-neon-green/30 border-b bg-black/50">
        <div className="container mx-auto px-6 py-8">
          <pre className="text-neon-green overflow-x-auto text-center font-mono text-xs">
            {ASCII_ART}
          </pre>
        </div>
      </div>

      {/* System Status & Social */}
      <div className="border-neon-green/30 border-b py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* System Status */}
            <div className="border-neon-blue/30 border bg-black/30 p-6">
              <h3 className="text-neon-blue mb-4 flex items-center gap-2 font-mono text-sm font-bold uppercase">
                <Network className="h-4 w-4" />
                NETWORK_STATUS
              </h3>
              <div className="space-y-2 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-neon-cyan">UPTIME:</span>
                  <span className="text-neon-green">99.9%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan">ACTIVE_NODES:</span>
                  <span className="text-neon-green">1,337</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan">SECURITY_LEVEL:</span>
                  <span className="text-neon-green">MAXIMUM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neon-cyan">LAST_UPDATE:</span>
                  <span className="text-neon-green">{systemTime}</span>
                </div>
              </div>
            </div>

            {/* Social Networks */}
            <div className="border-neon-purple/30 border bg-black/30 p-6">
              <h3 className="text-neon-purple mb-4 font-mono text-sm font-bold uppercase">
                EXTERNAL_NETWORKS
              </h3>
              <div className="space-y-3">
                {socialNetworks.map((network) => {
                  const Icon = network.icon;
                  return (
                    <Link
                      key={network.href}
                      href={network.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border-neon-purple/20 hover:border-neon-purple hover:bg-neon-purple/10 group flex items-center justify-between border p-2 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="text-neon-purple h-4 w-4 group-hover:animate-pulse" />
                        <span className="text-neon-cyan font-mono text-xs uppercase">
                          {network.label}
                        </span>
                      </div>
                      <span className="text-neon-purple font-mono text-xs">
                        [{network.status}]
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Terminal */}
      <div className="bg-black py-6">
        <div className="container mx-auto px-6">
          {/* Terminal Output */}
          <div className="border-neon-green/30 border bg-black/30 p-4">
            <div className="text-neon-green">$ system_info --copyright</div>
            <div className="text-neon-cyan mt-1">
              © {currentYear} ZIRC_CORP - ALL_RIGHTS_RESERVED
            </div>
            <div className="text-neon-blue mt-1">
              POWERED_BY: QUANTUM_PROCESSORS | SECURITY: CYBER_PROTOCOL_v3.0
            </div>
            <div className="text-neon-green mt-2 flex items-center">
              USER@ZIRC:TERMINAL:~$
              <span className="animate-blink ml-1">█</span>
            </div>
          </div>

          {/* Fine Print */}
          <div className="text-neon-green/70 flex flex-col items-center justify-between font-mono text-xs sm:flex-row">
            <div>
              ZIRC_TERMINAL - LICENSED UNDER CYBERPUNK_LICENSE_v2.1
            </div>
            <div>
              BUILD: #
              {Math.floor(Math.random() * 9999)
                .toString()
                .padStart(4, '0')}{' '}
              | VERSION: 2.1.0_BETA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
