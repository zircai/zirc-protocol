import Image from 'next/image';
import Link from 'next/link';

import { ArrowRight, Terminal, Zap } from 'lucide-react';

import { Button } from '../ui/button';

const About = () => {
  return (
    <section className="bg-black py-24 md:py-32">
      <div className="container">
        <div className="max-w-xl lg:translate-x-24">
          <h2 className="text-neon-green mb-4 font-mono text-2xl font-semibold md:text-3xl">
            About zIRC.ai
          </h2>

          <h1 className="max-w-[600px] flex-1 text-3xl leading-13 font-semibold tracking-tight text-balance md:text-4xl lg:text-5xl text-white">
            We&apos;re building the first AI-powered terminal for Binance Smart Chain.
          </h1>
        </div>

        {/* Large Image Below */}
        <div className="relative mt-12 flex items-start gap-4">
          <div className="max-lg:-translate-x-20">
            <Image
              src="/images/about/1.webp"
              alt="Modern workspace with an iMac displaying 'DO MORE'"
              width={770}
              height={444}
              className="aspect-video object-cover"
            />
          </div>
          {/* Right Column - Image */}
          <div className="border-mint-50 -right-10 bottom-0 aspect-[1.5/1.4] w-[max(20vw,220px)] translate-y-20 max-lg:absolute max-lg:border-[16px] lg:-translate-y-20">
            <Image
              src="/images/about/2.webp"
              alt="Person working on a laptop"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text Below Image */}
        <div className="mt-28 max-w-xl lg:mt-10 lg:translate-x-24">
          <p className="text-lg leading-6 text-gray-300 font-mono">
            Blockchain data has changed, is changing, and will continue to change — for
            the better. Now is the time for BSC intelligence to be degen-first and
            terminal-first. But in order to do this — it needs a new foundation.
          </p>
        </div>

        <div className="mt-6 space-y-6 md:mt-8 md:space-y-8 lg:mt-10 lg:space-y-10">
          {/* Dynamic System Section */}
          <h2 className="max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:translate-x-24 text-white font-mono">
            We were always told that blockchain data needs complex dashboards.
          </h2>
          <p className="max-w-xl text-lg lg:translate-x-24 text-gray-300 font-mono">
            Everyone tried fixing the problem by adding more charts, SQL queries,
            and layers of complexity. We spent years using BSCScan, Dune Analytics,
            and Nansen, encountering this problem firsthand. The existing solutions
            don&apos;t work for degens. We believe BSC data needs natural language
            and AI. But we had to start from ground zero.
          </p>
          <div className="grid gap-6 py-6 md:grid-cols-2 lg:py-10">
            <Image
              src="/images/about/3.webp"
              alt="Team members collaborating"
              width={600}
              height={400}
            />
            <Image
              src="/images/about/4.webp"
              alt="Team meeting in a conference room"
              width={600}
              height={400}
            />
          </div>

          {/* Timeline Section */}
          <p className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24 text-gray-300 font-mono">
            We started building zIRC in 2024 and launched the BSC AI Terminal in 2025. Every
            single feature has been built from scratch — with no unnecessary
            complexity or outdated dashboards. We are purpose-built to make
            BSC data accessible for the next generation of degens.
          </p>

          {/* Team Section */}
          <h2 className="ml-auto max-w-xl text-2xl leading-8 font-semibold md:text-3xl lg:-translate-x-24 text-white font-mono">
            We are a team of BSC degens — not your standard blockchain startup.
          </h2>
          <div className="ml-auto max-w-xl text-lg leading-6 lg:-translate-x-24 text-gray-300 font-mono">
            <p>
              We are community-owned, sustainable, and we keep our
              team focused. We&apos;re building for degens who want instant BSC alpha,
              not institutions who need complex analytics. Right now we&apos;re focused on
              delivering the best AI terminal for BSC. If you&apos;d like to contribute,
              join our community:
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-neon-green text-neon-green hover:bg-neon-green hover:text-black mt-6 border md:mt-8 lg:mt-10"
            >
              <Link href="https://x.com/zircai" target="_blank" rel="noopener noreferrer" className="">
                <span className="flex items-center gap-2 text-start whitespace-pre-wrap">
                  Join Community
                  <ArrowRight className="size-4 stroke-3" />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
