import React from 'react';

const CareersPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-neon-green font-mono text-sm mb-2">CAREERS</div>
            <h1 className="text-4xl md:text-6xl font-mono text-white mb-6">
              Join Us
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed mb-8">
              Help us build the future of decentralized AI and collective intelligence.
            </p>
            <button className="bg-white text-black px-8 py-4 font-mono text-lg hover:bg-neon-green transition-all duration-300 flex items-center gap-2 mx-auto">
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