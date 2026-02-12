import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/sections/navbar";
import CtaFooter from "@/components/sections/cta-footer";
import {
  blogPosts,
  getBlogPost,
  getRelatedPosts,
  type BlogContent,
} from "@/data/blog-posts";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.title} - Xcelens`,
    description: `${post.category} | ${post.date}`,
  };
}

function RenderContent({ block }: { block: BlogContent }) {
  switch (block.type) {
    case "paragraph":
      return (
        <p
          className="text-[18px] leading-[1.75] text-[#333] font-sans"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
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
          {block.items.map((item, i) => (
            <li
              key={i}
              className="text-[18px] leading-[1.75] text-[#333] font-sans list-disc marker:text-[#999]"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="border-l-[3px] border-black pl-6 py-2">
          <p
            className="text-[20px] md:text-[22px] leading-[1.6] text-black font-display italic"
            dangerouslySetInnerHTML={{ __html: block.text }}
          />
        </blockquote>
      );
    case "note":
      return (
        <p
          className="text-[15px] leading-[1.6] text-[#777] font-sans italic"
          dangerouslySetInnerHTML={{ __html: block.text }}
        />
      );
  }
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);

  return (
    <main className="min-h-screen bg-[#F2F3F4]">
      <Navbar />

      {/* Introduction / Hero Section */}
      <section className="relative w-full pt-[140px] md:pt-[180px] pb-[80px] md:pb-[100px] bg-[#F2F3F4]">
        {/* Grid Lines */}
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
          {/* Back Link */}
          <Link
            href="/blog"
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
            Go back
          </Link>

          {/* Title */}
          <h1 className="font-display text-[48px] md:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.03em] text-black max-w-[900px] text-center mx-auto">
            {post.title}
          </h1>

          {/* Meta Row */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <span className="inline-flex items-center rounded-full px-4 py-1.5 bg-black text-white text-[13px] font-sans font-medium">
              {post.category}
            </span>
            <span className="text-[14px] font-sans text-black/60">
              {post.date}
            </span>
            <span className="text-[14px] font-sans text-black/60">
              {post.author}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative w-full">
        <div className="max-w-[1248px] mx-auto px-6">
          <div className="relative w-full aspect-[16/9] md:aspect-[2.2/1] rounded-[16px] overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="relative w-full py-[80px] md:py-[120px] bg-[#F2F3F4]">
        {/* Grid Lines */}
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
            {post.content.map((block, index) => (
              <RenderContent key={index} block={block} />
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles Section */}
      <section className="relative w-full py-[100px] md:py-[120px] bg-[#F5F5F5] overflow-hidden">
        {/* Grid Lines */}
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
            More Stories to Fuel Your Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group relative block h-[400px] md:h-[450px] rounded-[12px] overflow-hidden bg-black"
              >
                {/* Image */}
                <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="space-y-3">
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-white/90 font-sans">
                      {related.category}
                    </span>
                    <h3 className="font-display text-[24px] text-white leading-[1.2] tracking-[-0.01em] max-w-xs">
                      {related.title}
                    </h3>
                    <p className="text-[14px] text-white/70 font-sans">
                      {related.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CtaFooter />
    </main>
  );
}
