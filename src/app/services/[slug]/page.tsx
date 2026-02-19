import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import { services, getService } from "@/data/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Not Found" };
  return {
    title: `${service.title} - Xcelens`,
    description: service.description,
  };
}

function AbstractIllustration({
  colors,
}: {
  colors: { primary: string; secondary: string; tertiary: string };
}) {
  return (
    <div className="relative w-full max-w-[480px] aspect-[5/6] mx-auto lg:mx-0">
      {/* Gray hatched capsule - back right */}
      <div
        className="absolute z-0 w-[55%] h-[90%] rounded-full top-[2%] right-[5%] overflow-hidden"
        style={{ backgroundColor: colors.tertiary }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.35) 3px, rgba(255,255,255,0.35) 4.5px)",
          }}
        />
      </div>

      {/* Dark brown capsule - middle left */}
      <div
        className="absolute z-10 w-[50%] h-[88%] rounded-full top-[6%] left-[2%]"
        style={{ backgroundColor: colors.primary }}
      />

      {/* Orange capsule - front center */}
      <div
        className="absolute z-20 w-[48%] h-[82%] rounded-full top-[10%] left-[18%]"
        style={{ backgroundColor: colors.secondary }}
      />
    </div>
  );
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F2F3F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="w-full pt-[140px] md:pt-[180px] pb-[48px] md:pb-[64px] bg-[#F2F3F4]">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="font-display text-[40px] md:text-[56px] lg:text-[72px] leading-[1.05] tracking-[-0.03em] text-black">
            {service.shortTitle}
          </h1>
          <p className="font-sans text-[15px] md:text-[17px] leading-[1.6] text-[#999] mt-4 max-w-[440px] mx-auto">
            {service.tagline}
          </p>
          <div className="w-[72px] h-px bg-black/12 mx-auto mt-8" />
        </div>
      </section>

      {/* Overview Section */}
      <section className="w-full py-[48px] md:py-[80px] bg-[#F2F3F4]">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <AbstractIllustration colors={service.illustrationColors} />
            <div>
              <h2 className="font-display text-[32px] md:text-[44px] leading-[1.1] tracking-[-0.02em] text-black mb-5">
                Overview
              </h2>
              <p className="font-sans text-[15px] md:text-[16px] leading-[1.8] text-[#666]">
                {service.overview}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="w-full py-[72px] md:py-[100px] bg-[#F2F3F4]">
        <div className="max-w-[1060px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black">
              Benefits
            </h2>
            <p className="font-sans text-[14px] md:text-[15px] leading-[1.6] text-[#999] mt-4 max-w-[460px] mx-auto">
              {service.benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            {service.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center"
              >
                {/* Number badge */}
                <div
                  className="w-[52px] h-[52px] rounded-lg flex items-center justify-center mb-6"
                  style={{
                    backgroundColor: `${service.illustrationColors.secondary}25`,
                  }}
                >
                  <span
                    className="font-display text-[26px] leading-none"
                    style={{
                      color: service.illustrationColors.secondary,
                    }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-[18px] md:text-[20px] font-semibold leading-[1.2] text-black mb-1.5">
                  {benefit.title}
                </h3>

                {/* Olive underline */}
                <div className="w-12 h-[2px] bg-[#6B7A5A] mb-5" />

                {/* Description */}
                <p className="font-sans text-[14px] leading-[1.75] text-[#999]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-[72px] md:py-[100px] bg-[#EAEBEC]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-[36px] md:text-[52px] leading-[1.1] tracking-[-0.02em] text-black">
              What Clients Say
            </h2>
            <p className="font-sans text-[14px] md:text-[15px] leading-[1.6] text-[#999] mt-4 max-w-[460px] mx-auto">
              {service.testimonialsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
            {service.testimonials.map((testimonial, i) => (
              <article
                key={i}
                className="bg-white/90 backdrop-blur-sm rounded-[16px] md:rounded-[24px] p-4 md:p-8 flex flex-col justify-between border border-[#E5E5E5]/60 shadow-[0_2px_20px_rgba(0,0,0,0.03)]"
              >
                <div>
                  {/* Stars */}
                  <div className="flex gap-0.5 md:gap-1 mb-3 md:mb-5">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={13}
                        className="fill-[#A0AA90] text-[#A0AA90] md:w-[15px] md:h-[15px]"
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="font-sans text-[12px] md:text-[14px] leading-[1.6] md:leading-[1.75] text-[#999]">
                    {testimonial.quote}
                  </p>
                </div>

                {/* Name */}
                <p className="font-sans text-[12px] md:text-[14px] font-medium text-black mt-4 md:mt-8">
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
