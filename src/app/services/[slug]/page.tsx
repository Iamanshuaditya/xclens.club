import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import {
  services,
  getService,
  getOtherServices,
  type ServiceContent,
} from "@/data/services";

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

function RenderContent({ block }: { block: ServiceContent }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p className="text-[18px] leading-[1.75] text-[#333] font-sans">
          {block.text}
        </p>
      );
    case "heading2":
      return (
        <h2 className="font-display text-[32px] md:text-[36px] leading-[1.2] tracking-[-0.02em] text-black mt-4">
          {block.text}
        </h2>
      );
    case "heading3":
      return (
        <h3 className="font-display text-[24px] leading-[1.3] tracking-[-0.01em] text-black mt-2">
          {block.text}
        </h3>
      );
    case "list":
      return (
        <ul className="space-y-2 pl-6">
          {block.items?.map((item, i) => (
            <li
              key={i}
              className="text-[18px] leading-[1.75] text-[#333] font-sans list-disc marker:text-[#999]"
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-[3px] border-black pl-6 py-2">
          <p className="text-[20px] md:text-[22px] leading-[1.6] text-black font-display italic">
            {block.text}
          </p>
        </blockquote>
      );
  }
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

  const otherServices = getOtherServices(slug);

  return (
    <main className="min-h-screen bg-[#F2F3F4]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full pt-[140px] md:pt-[180px] pb-[80px] md:pb-[100px] bg-[#F2F3F4]">
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="max-w-[1248px] mx-auto h-full flex justify-between px-6">
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1248px] mx-auto px-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-[14px] font-sans font-medium text-black/60 hover:text-black transition-colors mb-10"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="rotate-180"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            All Services
          </Link>

          <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-black text-white text-[13px] font-sans font-medium mb-6">
            {service.category}
          </span>

          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.03em] text-black max-w-[900px]">
            {service.title}
          </h1>

          <p className="font-sans text-[18px] leading-[1.6] text-[#666666] max-w-[540px] mt-6">
            {service.description}
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative w-full">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] rounded-[16px] overflow-hidden">
            <Image
              src={service.image}
              alt={service.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Content Body */}
      <section className="relative w-full py-[80px] md:py-[120px] bg-[#F2F3F4]">
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="max-w-[1248px] mx-auto h-full flex justify-between px-6">
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[720px] mx-auto px-6">
          <div className="flex flex-col gap-6">
            {service.content.map((block, index) => (
              <RenderContent key={index} block={block} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-black/10">
            <p className="font-sans text-[18px] text-[#666] mb-6">
              Ready to get started?
            </p>
            <a
              href="https://cal.com/flamby/x"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full text-[15px] font-sans font-medium hover:opacity-80 transition-opacity"
            >
              Book a session
            </a>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="relative w-full py-[100px] md:py-[120px] bg-[#f3f3f3] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0 hidden lg:block">
          <div className="max-w-[1248px] mx-auto h-full flex justify-between px-6">
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
            <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          </div>
        </div>

        <div className="relative z-10 max-w-[1248px] mx-auto px-6">
          <h2 className="font-display text-[48px] md:text-[56px] leading-[1.1] tracking-[-0.03em] text-black mb-12">
            Explore Our Other Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="group relative block h-[400px] md:h-[450px] rounded-[12px] overflow-hidden bg-black"
              >
                <div className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    className="object-cover opacity-60"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="space-y-3">
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-white/90 font-sans">
                      {other.category}
                    </span>
                    <h3 className="font-display text-[24px] text-white leading-[1.2] tracking-[-0.01em]">
                      {other.title}
                    </h3>
                    <p className="text-[16px] text-white/70 font-sans">
                      {other.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
