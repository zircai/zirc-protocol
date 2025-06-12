import React from 'react';

const ResearchPage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green mb-2 font-mono text-sm">
              zIRC
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              Find Compute. Train models.
              <br />
              Co-Own Intelligence.
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Collaborative AI research platform enabling distributed model
              development and collective ownership.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2">
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Model Training
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Train large language models, scientific AI, and specialized
                models through distributed training.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Multi-node distributed training</li>
                <li>• Model checkpointing and versioning</li>
                <li>• Automated hyperparameter optimization</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Collective Ownership
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Contribute compute and data to jointly own the resulting AI
                innovations and breakthroughs.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Decentralized model governance</li>
                <li>• Revenue sharing protocols</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Research Tools
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Advanced tools for AI research including experiment tracking and
                collaboration features.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Experiment management</li>
                <li>• Dataset sharing and versioning</li>
                <li>• Peer review and collaboration</li>
              </ul>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Scientific Breakthroughs
              </h3>
              <p className="mb-4 font-mono text-sm text-gray-300">
                Focus on AI applications that advance scientific understanding
                and benefit humanity.
              </p>
              <ul className="space-y-1 font-mono text-xs text-gray-400">
                <li>• Protein folding models</li>
                <li>• Climate simulation AI</li>
                <li>• Medical research applications</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="hover:bg-neon-green mx-auto mb-8 flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              GET STARTED
              <span>→</span>
            </button>
            <p className="font-mono text-sm text-gray-400">
              Join the movement to democratize AI development and collective
              intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPage;
