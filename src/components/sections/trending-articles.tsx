import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

const TrendingArticles = () => {
  // Featured: Jinsei, Stacked: mocksession + pentafecta2
  const featured = blogPosts.find(p => p.slug === 'jinsei')!;
  const stacked = [
    blogPosts.find(p => p.slug === 'mocksession')!,
    blogPosts.find(p => p.slug === 'pentafecta2')!,
  ];

  return (
    <section className="relative w-full bg-[#F5F5F5] py-[120px] overflow-hidden">
      {/* Background Grid Lines Overlay */}
      <div className="absolute inset-0 pointer-events-none flex justify-center z-0">
        <div className="w-full max-w-[1248px] h-full flex justify-between px-6">
          <div className="w-[1px] h-full bg-[rgba(0,0,0,0.05)]"></div>
          <div className="w-[1px] h-full bg-[rgba(0,0,0,0.05)]"></div>
          <div className="w-[1px] h-full bg-[rgba(0,0,0,0.05)]"></div>
          <div className="w-[1px] h-full bg-[rgba(0,0,0,0.05)]"></div>
          <div className="w-[1px] h-full bg-[rgba(0,0,0,0.05)]"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 max-w-[1248px]">
        <div className="mb-14">
          <h2 className="font-display text-[64px] leading-[1.1] tracking-[-0.03em] text-black">
            Trending articles
          </h2>
        </div>

        {/* Bento Box Grid: Large left + 2 stacked right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Featured Large Card - Left */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group relative block w-full h-[400px] md:h-[640px] overflow-hidden rounded-[12px] bg-black transition-transform duration-500 ease-out hover:scale-[1.01]"
          >
            <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover opacity-90"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
              <div className="space-y-3">
                <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-white/90 font-sans">
                  {featured.category}
                </span>
                <h3 className="font-display text-[32px] md:text-[40px] text-white leading-[1.2] tracking-[-0.01em] max-w-sm">
                  {featured.title}
                </h3>
                <p className="text-[14px] text-white/70 font-sans mt-2">
                  {featured.date}
                </p>
              </div>
            </div>
          </Link>

          {/* Stacked Small Cards - Right */}
          <div className="flex flex-col gap-6 h-full">
            {stacked.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group relative block w-full flex-1 min-h-[250px] md:min-h-0 overflow-hidden rounded-[12px] bg-black transition-transform duration-500 ease-out hover:scale-[1.01]"
              >
                <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover opacity-90"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="space-y-3">
                    <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-white/90 font-sans">
                      {article.category}
                    </span>
                    <h3 className="font-display text-[24px] text-white leading-[1.2] tracking-[-0.01em] max-w-xs">
                      {article.title}
                    </h3>
                    <p className="text-[14px] text-white/70 font-sans mt-2">
                      {article.date}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingArticles;
