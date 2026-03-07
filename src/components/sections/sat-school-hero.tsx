"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

const booksData = [
  { id: 1, src: "https://framerusercontent.com/images/WdJtZFRz1a5uCspzEuvcPaLMHnQ.png", alt: "Elon Musk", color: "#272c1b", w: 352, h: 500 },
  { id: 2, src: "https://framerusercontent.com/images/j5yxyVe1iu9w0CySlM3LEa3Zpss.png", alt: "The Snowball", color: "#022e4a", w: 329, h: 500 },
  { id: 3, src: "https://framerusercontent.com/images/AiHY69YkACiQQY2EgvfKvVOkrGw.png", alt: "Jony Ive", color: "#0c181b", w: 270, h: 500 },
  { id: 4, src: "https://framerusercontent.com/images/k42PNZ5dHw6E8vAVsvC8DDWAE4.png", alt: "Seeking Wisdom", color: "#b9cac2", w: 329, h: 500 },
  { id: 5, src: "https://framerusercontent.com/images/Re9q7l7CKkmAcr5LLd7NejdHqs.png", alt: "Naval Ravikant", color: "#ffef00", w: 331, h: 500 },
  { id: 6, src: "https://framerusercontent.com/images/HoTkmNxq3kU8tsYMhQ32ynbaqCo.png", alt: "Lessons of History", color: "#fff", w: 323, h: 500 },
  { id: 7, src: "https://framerusercontent.com/images/NGbEdh3cH7zSpi24rl4raehw72A.png", alt: "Ego is the Enemy", color: "#d3252b", w: 401, h: 600 },
  { id: 8, src: "https://framerusercontent.com/images/hOEZAHOENY57BgnRVXf35nAclA.png", alt: "Principles", color: "#020404", w: 354, h: 500 },
];

const ARM_ANGLES = [0, 45, 90, 135, 179, 225, 270, 315];
const NOISE_URL = "https://framerusercontent.com/images/6mcf62RlDfRfU61Yg5vb2pefpi4.png";

const Book3D = ({ src, alt, color }: { src: string; alt: string; color: string; w: number; h: number }) => (
  <div style={{ width: '100%', height: '100%', transformStyle: 'preserve-3d', position: 'relative' }}>
    {/* Front Cover */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, backfaceVisibility: 'hidden', overflow: 'hidden', borderRadius: '2px', transform: 'translateZ(22px)' }}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="450px" unoptimized />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, mixBlendMode: 'overlay', opacity: 0.2, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, mixBlendMode: 'overlay', background: 'linear-gradient(90deg, #fff 0%, #000 2% 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)' }} />
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, mixBlendMode: 'darken', opacity: 0.51, background: 'linear-gradient(90deg, #fff 0%, #000 2%, rgba(0,0,0,0.42) 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)' }} />
    </div>
    {/* Back Face */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 1, backgroundColor: color, filter: 'brightness(0.15)', overflow: 'visible', transform: 'translateZ(-22px)' }}>
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'overlay', opacity: 0.2, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto' }} />
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'overlay', background: 'linear-gradient(90deg, #fff 0%, #000 2% 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)' }} />
      <div style={{ position: 'absolute', inset: 0, mixBlendMode: 'darken', opacity: 0.51, background: 'linear-gradient(90deg, #fff 0%, #000 2%, rgba(0,0,0,0.42) 3%, rgba(255,255,255,0.5) 6%, #fff 8%, transparent 10%)' }} />
    </div>
    {/* Right (page edges) */}
    <div style={{ position: 'absolute', top: 0, bottom: 0, right: '-10px', width: '44px', zIndex: 1, backgroundColor: '#ededed', overflow: 'hidden', transform: 'rotateY(-90deg)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto', mixBlendMode: 'overlay', opacity: 0.2 }} />
    </div>
    {/* Spine (left edge) */}
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: '-22px', width: '44px', zIndex: 1, backgroundColor: color, filter: 'brightness(0.35)', overflow: 'hidden', transform: 'rotateY(-90deg)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto', mixBlendMode: 'overlay', opacity: 0.2 }} />
    </div>
    {/* Top (page edge) */}
    <div style={{ position: 'absolute', top: '-22px', left: 0, right: '12px', height: '44px', zIndex: 1, backgroundColor: '#fff', overflow: 'hidden', transform: 'rotateX(-90deg)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto', mixBlendMode: 'overlay', opacity: 0.2 }} />
    </div>
    {/* Bottom (page edge) */}
    <div style={{ position: 'absolute', bottom: '-22px', left: 0, right: '12px', height: '44px', zIndex: 1, backgroundColor: '#485254', overflow: 'hidden', transform: 'rotateX(-90deg)' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${NOISE_URL})`, backgroundRepeat: 'repeat', backgroundSize: '153.5px auto', mixBlendMode: 'overlay', opacity: 0.2 }} />
    </div>
    {/* Color (hue overlay) */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 3, backgroundColor: color, mixBlendMode: 'hue', overflow: 'hidden' }} />
  </div>
);

const SatSchoolHero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="sat-hero">

      {/* ===== Text Content (z-index above books) ===== */}
      <div className="sat-hero__content">
        <div className="sat-hero__text-wrap">

          {/* Desktop headline */}
          <h1 className="sat-hero__heading sat-hero__heading--desktop"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Come to Get<br />Awe-Inspired
          </h1>

          {/* Mobile headline (single line) */}
          <h1 className="sat-hero__heading sat-hero__heading--mobile"
            style={{ fontFamily: '"Instrument Serif", Georgia, serif' }}>
            Come and Get Awe-Inspired
          </h1>

          <p className="text-white text-lg font-medium leading-[1.3] mb-6"
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
            *Intellectually
          </p>

          <p className="text-white text-lg font-medium leading-[1.3] mb-8"
            style={{ fontFamily: '"Instrument Sans", sans-serif' }}>
            Find your tribe - Talk, Think and Network.
          </p>

          <div className="flex flex-row gap-4 mb-14 flex-wrap">
            <a href="https://rzp.io/rzp/sWf80Lp" target="_blank" rel="noopener noreferrer"
              className="h-[48px] px-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105">
              <span className="text-black font-medium text-[15px]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>Read More</span>
            </a>
            <a href="https://rzp.io/rzp/sWf80Lp" target="_blank" rel="noopener noreferrer"
              className="h-[48px] px-8 rounded-full bg-white flex items-center justify-center transition-all duration-300 hover:opacity-80 hover:scale-105">
              <span className="text-black font-medium text-[15px]" style={{ fontFamily: '"Instrument Sans", sans-serif' }}>I want to come!!</span>
            </a>
          </div>

          <div className="relative pl-5 border-l border-white/20 max-w-[420px]">
            <p className="text-white/60 text-[13px] leading-relaxed mb-4" style={{ fontFamily: '"Inter", sans-serif' }}>
              &quot;I host Invite-only Sessions where we build intellectual competences
              to ignite the PolyMaths within us. Learn the Mental Models to become great
              Capital Allocators, think investors, Entrepreneurs or even Innovators and Builders&quot;
            </p>
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7 rounded-full overflow-hidden">
                <Image src="https://framerusercontent.com/images/710veydyjYi2K9KDA8l6qn1kAtc.jpg" alt="Neelmani Bagaria" fill className="object-cover" unoptimized />
              </div>
              <span className="text-white/90 text-[13px] font-medium" style={{ fontFamily: '"Inter Display", sans-serif' }}>
                Neelmani Bagaria
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ===== 3D Book Carousel (absolute overlay, all sizes) ===== */}
      <div className="absolute inset-0 z-[1] pointer-events-none"
        style={{ transform: 'perspective(1400px)', transformStyle: 'preserve-3d' }}>

        <div className="arm-wrap"
          style={{
            position: 'absolute', width: '90%', height: '2002px',
            transformStyle: 'preserve-3d', display: 'flex',
            alignItems: 'center', justifyContent: 'center', overflow: 'visible',
          }}>
          <div style={{
            position: 'relative', width: '100px', height: '100%',
            transformStyle: 'preserve-3d', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            opacity: mounted ? 1 : 0,
            animation: mounted ? 'wheelSpin 50s linear infinite' : 'none',
          }}>
            {booksData.map((book, i) => {
              const angleDeg = ARM_ANGLES[i];
              const isFirst = i === 0;
              return (
                <div key={book.id} style={{
                  ...(isFirst
                    ? { position: 'relative' as const, flex: '1 0 0', height: '1px' }
                    : { position: 'absolute' as const, top: 0, bottom: 0, left: 'calc(50% - 225px)', zIndex: 1 }),
                  width: '450px', transformStyle: 'preserve-3d',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start',
                  transform: angleDeg !== 0 ? `rotate(${angleDeg}deg)` : undefined, overflow: 'visible',
                }}>
                  <div style={{
                    width: '100%', height: '30%', transformStyle: 'preserve-3d',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', overflow: 'visible',
                  }}>
                    <div style={{
                      aspectRatio: `${book.w / book.h}`, height: 'var(--framer-aspect-ratio-supported, 634px)',
                      width: '100%', pointerEvents: 'none', transformStyle: 'preserve-3d',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      transform: 'rotate(45deg) rotateX(-40deg) rotateY(-5deg)', overflow: 'visible',
                    }}>
                      <Book3D src={book.src} alt={book.alt} color={book.color} w={book.w} h={book.h} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Diagonal fade */}
      <div className="absolute inset-0 z-[2] pointer-events-none"
        style={{ background: 'linear-gradient(135deg, transparent 60%, rgba(0,0,0,0.5) 75%, rgba(0,0,0,1) 85%)' }} />

      {/* Left fade for text readability (desktop/tablet only) */}
      <div className="sat-hero__left-fade absolute inset-0 z-[3] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.8) 25%, rgba(0,0,0,0.3) 42%, transparent 55%)' }} />

      <style jsx global>{`
        :root { --framer-aspect-ratio-supported: initial; }
        @supports (aspect-ratio: 1) { :root { --framer-aspect-ratio-supported: auto; } }

        @keyframes wheelSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        /* ── Section ── */
        .sat-hero {
          background: #000;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
          min-height: 100vh;
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        /* ── Content (text, z-index above books) ── */
        .sat-hero__content {
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          width: 100%;
          max-width: 1100px;
          height: min-content;
          padding: 0 20px 50px;
          position: relative;
          gap: 64px;
        }

        .sat-hero__text-wrap {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          max-width: 480px;
        }

        /* ── Headings ── */
        .sat-hero__heading {
          color: #fff;
          line-height: 1.1;
          font-weight: 400;
          letter-spacing: -0.03em;
          font-size: clamp(2.5rem, 4.5vw, 4.25rem);
          margin-bottom: 1rem;
        }
        .sat-hero__heading--mobile { display: none; }
        .sat-hero__heading--desktop { display: block; }

        /* ── Arm Wrap — Desktop (>=1200px) ── */
        .arm-wrap {
          top: calc(51.72% - 1001px);
          left: 50.74%;
          transform: rotate(47deg) rotateX(29deg) rotateY(-70deg);
        }

        /* ── Tablet (810–1199px) ── */
        @media (min-width: 810px) and (max-width: 1199.98px) {
          .sat-hero__content {
            max-width: 800px;
          }
          .arm-wrap {
            top: calc(54.51% - 1001px);
            left: 70.49%;
            transform: scale(0.5) rotate(47deg) rotateX(29deg) rotateY(-70deg);
          }
        }

        /* ── Mobile (<810px) ── */
        @media (max-width: 809.98px) {
          .sat-hero {
            justify-content: flex-start;
          }
          .sat-hero__content {
            align-items: center;
            gap: 30px;
            max-width: 400px;
            padding: 0 20px 420px;
          }
          .sat-hero__text-wrap {
            align-items: center;
            text-align: center;
            max-width: 400px;
          }
          .sat-hero__heading--desktop { display: none; }
          .sat-hero__heading--mobile { display: block; }
          .sat-hero__left-fade {
            background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 30%, transparent 50%) !important;
          }
          .arm-wrap {
            top: calc(64.77% - 1001px);
            left: 63.46%;
            transform: scale(0.7) rotate(47deg) rotateX(29deg) rotateY(-70deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SatSchoolHero;
