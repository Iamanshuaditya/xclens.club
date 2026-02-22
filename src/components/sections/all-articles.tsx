import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const AllArticles = () => {
  return (
    <section className="relative w-full py-[120px] bg-[#F5F5F5] overflow-hidden">
      {/* Decorative Grid Lines Overlay */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 hidden lg:block">
        <div className="max-w-[1248px] mx-auto h-full flex justify-between px-6">
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1248px]">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-display text-[64px] leading-[1.1] tracking-[-0.03em] text-black">
            All articles
          </h2>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block h-[450px] relative overflow-hidden rounded-[12px] bg-neutral-200"
            >
              {/* Image Background */}
              <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Gradient + Text Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex flex-col gap-2">
                  <span className="inline-block w-fit px-2.5 py-1 bg-white/15 backdrop-blur-sm rounded text-[12px] font-semibold text-white/90 uppercase tracking-[0.05em]">
                    {article.category}
                  </span>
                  <h3 className="font-display text-[24px] leading-[1.2] tracking-[-0.01em] text-white">
                    {article.title}
                  </h3>
                  <span className="text-[14px] font-normal text-white/70">
                    {article.date}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllArticles;
