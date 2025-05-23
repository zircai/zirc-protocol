import React from 'react';

const CareersPage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="text-neon-green mb-2 font-mono text-sm">
              CAREERS
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              Join Us
            </h1>
            <p className="mb-8 font-mono text-xl leading-relaxed text-gray-300">
              Help us build the future of decentralized AI and collective
              intelligence.
            </p>
            <button className="hover:bg-neon-green mx-auto flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              VIEW OPENINGS
              <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersPage;
