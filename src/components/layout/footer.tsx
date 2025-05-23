import Link from 'next/link';
import { Terminal, Shield, Cpu, Database, Network, Github, Twitter, Linkedin } from 'lucide-react';

const ASCII_ART = `
╔═══════════════════════════════════════════════╗
║           ZCHAT_PUMPFUN TERMINAL v2.1.0          ║
║         COPYRIGHT 2025 - CYBER_CORP           ║
╚═══════════════════════════════════════════════╝
`;

const navigation = [
  {
    title: 'CORE_MODULES',
    icon: Terminal,
    links: [
      { name: 'ZCHAT_PUMPFUN_CORE', href: '/', status: 'ONLINE' },
      { name: 'QUANTUM_PROC', href: '/#quantum', status: 'ACTIVE' },
      { name: 'DATA_MATRIX', href: '/#data', status: 'SECURE' },
      { name: 'CYBER_NET', href: '/#network', status: 'LINKED' },
    ],
  },
  {
    title: 'SYSTEM_INFO',
    icon: Shield,
    links: [
      { name: 'PROTOCOLS', href: '/about', status: 'VERIFIED' },
      { name: 'UPGRADE_PATH', href: '/pricing', status: 'AVAILABLE' },
    ],
  },
  {
    title: 'INTERFACE',
    icon: Cpu,
    links: [
      { name: 'HELP_MATRIX', href: '/faq', status: 'READY' },
      { name: 'COMM_CHANNEL', href: '/contact', status: 'OPEN' },
    ],
  },
  {
    title: 'LEGAL_FRAMEWORK',
    icon: Database,
    links: [
      { name: 'SERVICE_TERMS', href: '/terms', status: 'ACTIVE' },
      { name: 'PRIVACY_PROTOCOL', href: '/privacy', status: 'SECURED' },
    ],
  },
];

const socialNetworks = [
  { 
    icon: Github, 
    href: 'https://github.com', 
    label: 'GITHUB_REPO',
    status: 'PUBLIC'
  },
  { 
    icon: Twitter, 
    href: 'https://twitter.com', 
    label: 'TWITTER_FEED',
    status: 'LIVE'
  },
  { 
    icon: Linkedin, 
    href: 'https://linkedin.com', 
    label: 'LINKEDIN_NET',
    status: 'ACTIVE'
  },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const systemTime = new Date().toLocaleTimeString();

  return (
    <footer className="bg-black border-t-2 border-neon-green">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neon-green/10 via-neon-cyan/10 to-neon-blue/10 border-b border-neon-green/30">
        <div className="container mx-auto px-6 py-16 text-center">
          <div className="border border-neon-cyan/50 bg-black/50 p-8 max-w-4xl mx-auto">
            <div className="font-mono text-neon-cyan text-sm mb-4">
              {'>'} SYSTEM_INITIALIZATION_PROMPT
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-neon-green font-mono uppercase mb-4">
              ACTIVATE_ZCHAT_PUMPFUN
            </h2>
            <p className="text-xl text-neon-cyan font-mono mb-8">
              {'>'} QUANTUM_PROCESSING_AWAITS_YOUR_COMMAND
              <br />
              {'>'} FUTURE_PRODUCTIVITY_MODE: STANDBY
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <button className="retro-button px-8 py-4 text-lg">
                  INITIALIZE_SESSION
                </button>
              </Link>
              <Link href="/pricing">
                <button className="border-2 border-neon-cyan text-neon-cyan px-8 py-4 font-mono uppercase hover:bg-neon-cyan hover:text-black transition-all duration-300">
                  VIEW_UPGRADE_MATRIX
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ASCII Art Section */}
      <div className="bg-black/50 border-b border-neon-green/30">
        <div className="container mx-auto px-6 py-8">
          <pre className="text-neon-green text-xs font-mono text-center overflow-x-auto">
            {ASCII_ART}
          </pre>
        </div>
      </div>

      {/* Navigation Grid */}
      <div className="border-b border-neon-green/30 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {navigation.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.title} className="border border-neon-green/30 bg-black/30 p-6">
                  <div className="flex items-center gap-2 mb-6">
                    <Icon className="w-5 h-5 text-neon-cyan" />
                    <h3 className="font-mono text-sm font-bold text-neon-green uppercase">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.name} className="flex items-center justify-between">
                        <Link
                          href={link.href}
                          className="text-neon-cyan hover:text-neon-green transition-colors font-mono text-sm uppercase"
                        >
                          {link.name}
                        </Link>
                        <span className="text-xs text-neon-blue font-mono">
                          [{link.status}]
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* System Status & Social */}
      <div className="border-b border-neon-green/30 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* System Status */}
            <div className="border border-neon-blue/30 bg-black/30 p-6">
              <h3 className="font-mono text-sm font-bold text-neon-blue uppercase mb-4 flex items-center gap-2">
                <Network className="w-4 h-4" />
                NETWORK_STATUS
              </h3>
              <div className="space-y-2 text-xs font-mono">
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
            <div className="border border-neon-purple/30 bg-black/30 p-6">
              <h3 className="font-mono text-sm font-bold text-neon-purple uppercase mb-4">
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
                      className="flex items-center justify-between p-2 border border-neon-purple/20 hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-neon-purple group-hover:animate-pulse" />
                        <span className="font-mono text-xs text-neon-cyan uppercase">
                          {network.label}
                        </span>
                      </div>
                      <span className="text-xs text-neon-purple font-mono">
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
          <div className="bg-black border border-neon-green/50 p-4 mb-4 font-mono text-sm">
            <div className="text-neon-green">
              $ system_info --copyright
            </div>
            <div className="text-neon-cyan mt-1">
              © {currentYear} ZCHAT_PUMPFUN_CORP - ALL_RIGHTS_RESERVED
            </div>
            <div className="text-neon-blue mt-1">
              POWERED_BY: QUANTUM_PROCESSORS | SECURITY: CYBER_PROTOCOL_v3.0
            </div>
            <div className="text-neon-green mt-2 flex items-center">
              USER@ZCHAT_PUMPFUN:~$ 
              <span className="animate-blink ml-1">█</span>
            </div>
          </div>

          {/* Fine Print */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-neon-green/70">
            <div>
              ZCHAT_PUMPFUN TERMINAL - LICENSED UNDER CYBERPUNK_LICENSE_v2.1
            </div>
            <div>
              BUILD: #{Math.floor(Math.random() * 9999).toString().padStart(4, '0')} | 
              VERSION: 2.1.0_BETA
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
