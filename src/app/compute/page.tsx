import React from 'react';

const ComputePage = () => {
  return (
    <section className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green font-mono text-sm mb-2">PRIME COMPUTE</div>
            <h1 className="text-4xl md:text-6xl font-mono text-white mb-6">
              Scalable. Cheap. Fast.
            </h1>
            <p className="text-xl text-gray-300 font-mono leading-relaxed">
              Access distributed GPU infrastructure for AI training and inference at scale.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">GPU Clusters</h3>
              <p className="text-gray-300 font-mono text-sm">
                Access H100, A100, RTX 4090 and other high-performance GPUs across global data centers.
              </p>
            </div>
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Distributed Training</h3>
              <p className="text-gray-300 font-mono text-sm">
                Scale your model training across multiple nodes with automated orchestration.
              </p>
            </div>
            <div className="border border-neon-green/30 bg-black/50 p-6">
              <h3 className="text-lg font-mono text-neon-green mb-4">Cost Optimization</h3>
              <p className="text-gray-300 font-mono text-sm">
                Dynamic pricing and spot instances reduce compute costs by up to 90%.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="bg-white text-black px-8 py-4 font-mono text-lg hover:bg-neon-green transition-all duration-300 flex items-center gap-2 mx-auto mb-8">
              GET COMPUTE
              <span>→</span>
            </button>
            <p className="text-gray-400 font-mono text-sm">
              Join thousands of researchers and engineers building the future of AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputePage; 