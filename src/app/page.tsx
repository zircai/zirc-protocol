import { FAQ } from '@/components/sections/faq';
import Hero from '@/components/sections/hero';
import HowItWorks from '@/components/sections/how-it-works';
import KeyFeatures from '@/components/sections/key-features';

export default function Home() {
  return (
    <>
      <Hero />
      <KeyFeatures />
      <HowItWorks />
      <FAQ />
    </>
  );
}
