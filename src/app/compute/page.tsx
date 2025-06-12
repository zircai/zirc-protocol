import React from 'react';

const ComputePage = () => {
  return (
    <section className="min-h-screen bg-black py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12">
            <div className="text-neon-green mb-2 font-mono text-sm">
              PRIME COMPUTE
            </div>
            <h1 className="mb-6 font-mono text-4xl text-white md:text-6xl">
              Scalable. Cheap. Fast.
            </h1>
            <p className="font-mono text-xl leading-relaxed text-gray-300">
              Access distributed GPU infrastructure for AI training and
              inference at scale.
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                GPU Clusters
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Access H100, A100, RTX 4090 and other high-performance GPUs
                across global data centers.
              </p>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Distributed Training
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Scale your model training across multiple nodes with automated
                orchestration.
              </p>
            </div>
            <div className="border-neon-green/30 border bg-black/50 p-6">
              <h3 className="text-neon-green mb-4 font-mono text-lg">
                Cost Optimization
              </h3>
              <p className="font-mono text-sm text-gray-300">
                Dynamic pricing and spot instances reduce compute costs by up to
                90%.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <button className="hover:bg-neon-green mx-auto mb-8 flex items-center gap-2 bg-white px-8 py-4 font-mono text-lg text-black transition-all duration-300">
              GET COMPUTE
              <span>→</span>
            </button>
            <p className="font-mono text-sm text-gray-400">
              Join thousands of researchers and engineers building the future of
              AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComputePage;
