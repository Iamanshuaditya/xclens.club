import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { Star } from "lucide-react";
import { services } from "@/data/services";

const testimonials = [
  {
    rating: 4,
    quote:
      "The coaching completely changed my outlook. I now have the confidence to tackle anything.",
    name: "Jane D.",
  },
  {
    rating: 5,
    quote:
      "The sessions helped me clarify my goals and take steps I never thought possible.",
    name: "Michael R.",
  },
  {
    rating: 5,
    quote:
      "I feel empowered, motivated, and ready to achieve my dreams.",
    name: "Sophia L.",
  },
  {
    rating: 5,
    quote:
      "The personalized guidance made all the difference. My mindset has completely shifted for the better.",
    name: "Daniel W.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-48 pb-24 overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="flex flex-col items-center text-center max-w-[700px] mx-auto">
            <h1 className="font-display text-[clamp(48px,8vw,80px)] leading-[1.1] text-black tracking-[-0.02em] mb-6">
              Our Services
            </h1>
            <p className="font-sans text-[18px] leading-[1.6] text-[#666666] max-w-[440px]">
              Find your path, develop your skills, and achieve professional
              growth with our tailored coaching programs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative w-full py-[140px] bg-[#f3f3f3] overflow-hidden">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-[1200px] mx-auto">
            {/* Section Header */}
            <div className="mb-[60px]">
              <span className="badge-pill mb-4 bg-[#D1D5DB] text-[#374151]">
                Services
              </span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="max-w-[600px]">
                  <h2 className="font-display text-[48px] leading-[1.2] text-black mb-6">
                    Advance Your Goals with Professional Guidance
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.6] text-black/70">
                    Achieve your goals with structured coaching designed to build
                    clarity, support, and lasting confidence.
                  </p>
                </div>
              </div>
            </div>

            {/* Service Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative flex flex-col h-[520px] bg-black rounded-[12px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
                >
                  {/* Background Image with Overlay */}
                  <div className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto p-8 z-20">
                    <h3 className="font-display text-[24px] text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="font-sans text-[16px] leading-[1.4] text-white/80">
                      {service.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative bg-[#f3f3f3] py-[120px]">
        <div className="absolute inset-0 pointer-events-none flex justify-center">
          <div className="container h-full grid grid-cols-5 gap-0">
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] h-full" />
            <div className="border-l border-[#e5e5e5] border-r h-full" />
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 mb-16">
            <div className="space-y-6">
              <span className="badge-pill bg-[#D1D5DB] text-[#374151]">
                Testimonials
              </span>
              <h2 className="font-display text-[clamp(32px,5vw,48px)] leading-[1.1] text-black tracking-[-0.02em]">
                What Clients Say
              </h2>
            </div>
            <div className="lg:max-w-[360px] lg:pt-16">
              <p className="font-sans text-[18px] leading-[1.6] text-[#666666] font-light">
                Real stories of growth, success, and transformation through
                coaching.
              </p>
            </div>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-[2rem] p-10 border border-[#e5e5e5]/80 shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={
                          i < testimonial.rating
                            ? "fill-[#666666] text-[#666666]"
                            : "fill-none text-[#D1D5DB]"
                        }
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-[15px] leading-[1.8] text-[#333333] font-light">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Name */}
                <p className="font-sans text-[14px] font-medium text-black mt-8">
                  {testimonial.name}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
