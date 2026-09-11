import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
      <div className="rounded-3xl border border-gray-100 bg-white p-8 sm:p-12 lg:p-16 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 shadow-sm">
        
        {/* Left Column */}
        <div className="max-w-xl text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-[1.15]">
            Build Your Ideal <br />
            <span className="brand-gradient-text">Development Stack</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#technologies"
              className="brand-gradient text-white text-sm font-semibold px-6 py-3 rounded-full hover:opacity-90 shadow-md transition"
            >
              Explore Technologies
            </a>
            <button className="border border-gray-300 text-gray-700 text-sm font-semibold px-6 py-3 rounded-full hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: Isometric Illustration */}
        <div className="w-full max-w-sm lg:max-w-md flex justify-center">
          <img
            src="/banner-stack.png"
            alt="Development Stack"
            className="w-full h-auto object-contain drop-shadow-md"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=500&auto=format&fit=crop&q=80';
            }}
          />
        </div>

      </div>
    </section>
  );
};
