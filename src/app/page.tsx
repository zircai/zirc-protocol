import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import KeyFeatures from '@/components/sections/key-features';
import TokenPreview from '@/components/sections/token-preview';
import Roadmap from '@/components/sections/roadmap';
import WhyUs from '@/components/sections/why-us';

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <TokenPreview />
      <Roadmap />
      <WhyUs />
      <FAQ />
    </>
  );
}
