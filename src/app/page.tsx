import Hero from '@/components/sections/hero';
import KeyFeatures from '@/components/sections/key-features';
import HowItWorks from '@/components/sections/how-it-works';
import Community from '@/components/sections/community';
import { FAQ } from '@/components/sections/faq';

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <Community />
      <FAQ />
    </>
  );
}
