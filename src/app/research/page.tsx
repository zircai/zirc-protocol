import React from 'react';

const ResearchPage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green font-mono text-sm mb-2">PRIME INTELLECT</div>
            <h1 className="text-4xl md:text-6xl font-mono text-white mb-6">
              Find Compute. Train models.
              <br />
              Co-Own Intelligence.
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              Collaborative AI research platform enabling distributed model development and collective ownership.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Model Training</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Train large language models, scientific AI, and specialized models through distributed training.
              </p>
              <ul className="text-gray-400 font-mono text-xs space-y-1">
                <li>• Multi-node distributed training</li>
                <li>• Model checkpointing and versioning</li>
                <li>• Automated hyperparameter optimization</li>
              </ul>
            </div>
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Collective Ownership</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Contribute compute and data to jointly own the resulting AI innovations and breakthroughs.
              </p>
              <ul className="text-gray-400 font-mono text-xs space-y-1">
                <li>• Decentralized model governance</li>
                <li>• Revenue sharing protocols</li>
                <li>• Open source contributions</li>
              </ul>
            </div>
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Research Tools</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Advanced tools for AI research including experiment tracking and collaboration features.
              </p>
              <ul className="text-gray-400 font-mono text-xs space-y-1">
                <li>• Experiment management</li>
                <li>• Dataset sharing and versioning</li>
                <li>• Peer review and collaboration</li>
              </ul>
            </div>
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Scientific Breakthroughs</h3>
              <p className="text-gray-300 font-mono text-sm mb-4">
                Focus on AI applications that advance scientific understanding and benefit humanity.
              </p>
              <ul className="text-gray-400 font-mono text-xs space-y-1">
                <li>• Protein folding models</li>
                <li>• Climate simulation AI</li>
                <li>• Medical research applications</li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-white text-black px-8 py-4 font-mono text-lg hover:bg-neon-green transition-all duration-300 flex items-center gap-2 mx-auto mb-8">
              GET STARTED
              <span>→</span>
            </button>
            <p className="text-gray-400 font-mono text-sm">
              Join the movement to democratize AI development and collective intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPage; 