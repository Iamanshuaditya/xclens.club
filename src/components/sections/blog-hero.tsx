import React from 'react';
import Image from 'next/image';

const BlogHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F2F3F4] min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-end pb-24 lg:pb-32">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/kSoqYiuisDSP4WQuAZ2SYfZwQ-1.png"
          alt="Scenic forest at sunset"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Decorative Vertical Grid Lines */}
      <div className="absolute inset-0 pointer-events-none z-10 select-none">
        <div className="container h-full mx-auto relative px-6 lg:px-0">
          <div className="flex h-full w-full justify-between items-stretch">
            <div className="w-px h-full bg-white/10" />
            <div className="w-px h-full bg-white/10" />
            <div className="w-px h-full bg-white/10" />
            <div className="w-px h-full bg-white/10" />
            <div className="w-px h-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative z-20 mx-auto px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-6">
            <h1 className="text-white font-display text-5xl md:text-7xl lg:text-[80px] leading-[1.1] tracking-[-0.04em]">
              Explore My Blog
            </h1>
          </div>
          <div className="max-w-xl">
            <p className="text-white/90 font-sans text-lg md:text-xl leading-[1.6] tracking-normal">
              Discover actionable strategies, inspiring stories, and expert tips to guide your personal and professional journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
