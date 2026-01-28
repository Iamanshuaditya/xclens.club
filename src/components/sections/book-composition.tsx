import React from 'react';
import Image from 'next/image';

/**
 * BookComposition component
 * Clones the complex 3D-styled floating book arrangement with specific perspective transforms.
 */
const BookComposition: React.FC = () => {
  // Asset mapping based on the instructions and provided assets
  // 1. Ego is the Enemy: NGbEdh3cH7zSpi24rl4raehw72A-8.png
  // 2. Psychology of Money: j5yxyVe1iu9w0CySlM3LEa3Zpss-3.png
  // 3. Hooked: k42PNZ5dHw6E8vAVsvC8DDWAE4-5.png
  // 4. Jony Ive / Apple: AiHY69YkACiQQY2EgvfKvVOkrGw-4.png
  // 5. Additional / Bottom books: Re9q7l7CKkmAcr5LLd7NejdHqs-6.png, HoTkmNxq3kU8tsYMhQ32ynbaqCo-7.png

  return (
    <div className="relative w-full h-[600px] lg:h-[800px] flex items-center justify-center pointer-events-none select-none overflow-visible">
      <div className="relative w-full h-full max-w-[800px]" style={{ perspective: '1200px' }}>
        
        {/* Jony Ive / Apple - The furthest back */}
        <div 
          className="absolute left-[45%] top-[15%] w-[280px] h-[400px] z-10 transition-transform duration-700 ease-out"
          style={{ 
            transform: 'rotateX(5deg) rotateY(-25deg) rotateZ(12deg) translateZ(-100px)',
            boxShadow: '20px 20px 60px rgba(0,0,0,0.8)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/5">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/AiHY69YkACiQQY2EgvfKvVOkrGw-4.png"
              alt="Jony Ive Book"
              fill
              className="object-cover"
              sizes="280px"
              priority
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay pointer-events-none" />
          </div>
        </div>

        {/* Ego is the Enemy - The most prominent on the right */}
        <div 
          className="absolute right-[5%] top-[5%] w-[320px] h-[480px] z-50 transition-transform duration-700 ease-out"
          style={{ 
            transform: 'rotateX(8deg) rotateY(-32deg) rotateZ(5deg) translateZ(150px)',
            boxShadow: '40px 40px 80px rgba(0,0,0,0.9)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/NGbEdh3cH7zSpi24rl4raehw72A-8.png"
              alt="Ego is the Enemy"
              fill
              className="object-cover"
              sizes="320px"
              priority
            />
            {/* Spine Highlight/Shadow for 3D depth */}
            <div className="absolute top-0 left-0 w-[12px] h-full bg-gradient-to-r from-black/40 to-transparent" />
            <div className="absolute inset-0 bg-white/5 opacity-30 pointer-events-none mix-blend-soft-light" />
          </div>
        </div>

        {/* The Psychology of Money - Center diagonal */}
        <div 
          className="absolute left-[30%] top-[25%] w-[330px] h-[480px] z-40 transition-transform duration-700 ease-out"
          style={{ 
            transform: 'rotateX(15deg) rotateY(-15deg) rotateZ(-35deg) translateZ(80px)',
            boxShadow: '30px 40px 70px rgba(0,0,0,0.85)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/j5yxyVe1iu9w0CySlM3LEa3Zpss-3.png"
              alt="The Psychology of Money"
              fill
              className="object-cover"
              sizes="330px"
              priority
            />
            <div className="absolute top-0 left-0 w-full h-[15px] bg-gradient-to-b from-black/20 to-transparent" />
          </div>
        </div>

        {/* Hooked - Yellow Book at the bottom center */}
        <div 
          className="absolute left-[35%] bottom-[5%] w-[340px] h-[450px] z-30 transition-transform duration-700 ease-out"
          style={{ 
            transform: 'rotateX(25deg) rotateY(10deg) rotateZ(-12deg) translateZ(40px)',
            boxShadow: '25px 25px 60px rgba(0,0,0,0.8)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/10">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/k42PNZ5dHw6E8vAVsvC8DDWAE4-5.png"
              alt="Hooked"
              fill
              className="object-cover"
              sizes="340px"
              priority
            />
            <div className="absolute bottom-0 left-0 w-full h-[10px] bg-black/10" />
          </div>
        </div>

        {/* Additional supporting book elements for visual density */}
        <div 
          className="absolute right-[0%] bottom-[0%] w-[380px] h-[400px] z-20 transition-transform duration-700 ease-out opacity-80"
          style={{ 
            transform: 'rotateX(45deg) rotateY(-40deg) rotateZ(5deg) translateY(100px)',
            boxShadow: '15px 15px 50px rgba(0,0,0,0.7)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/5">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Re9q7l7CKkmAcr5LLd7NejdHqs-6.png"
              alt="Supporting Literature"
              fill
              className="object-cover"
              sizes="380px"
            />
          </div>
        </div>

        {/* Very bottom book showing spine/pages */}
        <div 
          className="absolute left-[50%] bottom-[0%] w-[420px] h-[300px] z-10 transition-transform duration-700 ease-out"
          style={{ 
            transform: 'rotateX(75deg) rotateY(0deg) rotateZ(-5deg) translateY(150px)',
            boxShadow: '0 40px 100px rgba(0,0,0,1)'
          }}
        >
          <div className="relative w-full h-full rounded-sm overflow-hidden border border-white/5">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/HoTkmNxq3kU8tsYMhQ32ynbaqCo-7.png"
              alt="Bottom Book Depth"
              fill
              className="object-cover"
              sizes="420px"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default BookComposition;