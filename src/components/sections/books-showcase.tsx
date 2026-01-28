import React from 'react';

/**
 * BooksShowcase Component
 * A 3D book rotating showcase section with realistic spines, gradients, and shadows.
 * Features curated books like "Elon Musk", "Snowball", and "Poor Charlie's Almanack".
 */

const books = [
  {
    title: "Elon Musk",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/WdJtZFRz1a5uCspzEuvcPaLMHnQ-2.png",
    width: 352,
    height: 500,
    rotateZ: -12,
    zIndex: 10,
  },
  {
    title: "The Snowball",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/j5yxyVe1iu9w0CySlM3LEa3Zpss-3.png",
    width: 329,
    height: 500,
    rotateZ: -8,
    zIndex: 9,
  },
  {
    title: "Poor Charlie's Almanack",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/AiHY69YkACiQQY2EgvfKvVOkrGw-4.png",
    width: 270,
    height: 500,
    rotateZ: -4,
    zIndex: 8,
  },
  {
    title: "Seeking Wisdom",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/k42PNZ5dHw6E8vAVsvC8DDWAE4-5.png",
    width: 329,
    height: 500,
    rotateZ: 0,
    zIndex: 7,
  },
  {
    title: "The Almanack of Naval Ravikant",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Re9q7l7CKkmAcr5LLd7NejdHqs-6.png",
    width: 331,
    height: 500,
    rotateZ: 4,
    zIndex: 6,
  },
  {
    title: "The Lessons of History",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/HoTkmNxq3kU8tsYMhQ32ynbaqCo-7.png",
    width: 323,
    height: 500,
    rotateZ: 8,
    zIndex: 5,
  },
  {
    title: "Principles",
    cover: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/NGbEdh3cH7zSpi24rl4raehw72A-8.png",
    width: 401,
    height: 600,
    rotateZ: 12,
    zIndex: 4,
  },
];

const Book3D = ({ cover, rotateZ, zIndex, width, height }: { cover: string, rotateZ: number, zIndex: number, width: number, height: number }) => {
  return (
    <div 
      className="absolute transition-transform duration-700 ease-out hover:scale-110 hover:-translate-y-8 cursor-pointer"
      style={{ 
        perspective: '1200px',
        zIndex,
        transform: `rotateZ(${rotateZ}deg) translateX(${rotateZ * 15}px)`,
      }}
    >
      <div 
        className="relative preserve-3d"
        style={{
          width: `${width / 2.5}px`,
          height: `${height / 2.5}px`,
          transform: 'rotateY(-25deg)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front Cover */}
        <div 
          className="absolute inset-0 bg-white shadow-2xl overflow-hidden rounded-r-md"
          style={{ 
            transform: 'translateZ(15px)',
            backfaceVisibility: 'hidden'
          }}
        >
          <img 
            src={cover} 
            alt="Book Cover" 
            className="w-full h-full object-cover"
          />
          {/* Noise/Texture Overlay */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
          {/* Spine Highlight/Gradient */}
          <div className="absolute inset-y-0 left-0 w-[10%] bg-gradient-to-r from-black/20 to-transparent" />
        </div>

        {/* Spine */}
        <div 
          className="absolute top-0 bottom-0 left-0 bg-[#e0e0e0] origin-left"
          style={{ 
            width: '30px', 
            transform: 'rotateY(-90deg) translateZ(0px)',
            boxShadow: 'inset -2px 0 5px rgba(0,0,0,0.1)'
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-black/5 via-transparent to-black/10" />
        </div>

        {/* Bottom (Pages) */}
        <div 
          className="absolute bottom-0 left-0 right-0 bg-[#f0f0f0] origin-bottom"
          style={{ 
            height: '30px', 
            transform: 'rotateX(-90deg) translateZ(0px)',
            background: 'repeating-linear-gradient(90deg, #f0f0f0, #f0f0f0 2px, #ddd 3px)'
          }}
        />

        {/* Top (Pages) */}
        <div 
          className="absolute top-0 left-0 right-0 bg-[#f0f0f0] origin-top"
          style={{ 
            height: '30px', 
            transform: 'rotateX(90deg) translateZ(0px)',
            background: 'repeating-linear-gradient(90deg, #f0f0f0, #f0f0f0 2px, #ddd 3px)'
          }}
        />

        {/* Spine shadow on the surface */}
        <div 
          className="absolute -bottom-4 left-0 w-full h-8 blur-xl bg-black/20 rounded-full scale-x-110 -z-10"
          style={{ transform: 'rotateX(90deg)' }}
        />
      </div>
    </div>
  );
};

const BooksShowcase = () => {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-[#F5F5F5] academic-grid grain-texture">
      <div className="container px-6 flex flex-col items-center">
        {/* Visual Content Wrap */}
        <div className="relative w-full h-[500px] flex items-center justify-center">
          {/* Book Arms/Container */}
          <div className="relative flex items-center justify-center w-full max-w-[1000px] h-full">
            {books.map((book, idx) => (
              <Book3D 
                key={idx}
                cover={book.cover}
                rotateZ={book.rotateZ}
                zIndex={book.zIndex}
                width={book.width}
                height={book.height}
              />
            ))}
          </div>
        </div>

        {/* Optional Section Title for context if needed based on design flow */}
        <div className="mt-12 text-center max-w-2xl mx-auto hidden lg:block">
          <p className="text-[#666666] text-sm uppercase tracking-widest font-sans font-medium mb-4">
            The Curated Library
          </p>
          <h2 className="text-4xl text-black font-display opacity-80 italic">
            "Read what you love until you love to read."
          </h2>
        </div>
      </div>

      {/* Decorative Accents */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-black opacity-[0.03] -z-10" />
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[200%] h-px bg-black opacity-[0.02] -z-10" />
    </section>
  );
};

export default BooksShowcase;