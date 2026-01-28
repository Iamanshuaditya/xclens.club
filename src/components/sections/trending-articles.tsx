import React from 'react';
import Image from 'next/image';

const TrendingArticles = () => {
  const articles = [
    {
      category: 'Life Skills',
      title: 'Jinsei — Live Your Best Life',
      date: 'Oct 21, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/o3eXkdKDhbgtXA5BP7lNt5KoHkc-2.jpg',
      featured: true,
      link: './blog/jinsei'
    },
    {
      category: 'Team',
      title: 'What Happens at a Xcelens Session - An activity explained',
      date: 'Aug 11, 2025',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/I1i1aH3cI6Ef79GFYgyxuigzAsc-3.jpg',
      featured: false,
      link: './blog/mocksession'
    },
    {
      category: 'Personal Well-Being',
      title: 'Why Every Young Person Needs a Pentafecta',
      date: 'Oct 21, 2023',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/A5JxusJLEIR79cqLLnjbM30AZcQ-4.jpg',
      featured: false,
      link: './blog/pentafecta2'
    }
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Featured Large Card - Left */}
          <div className="h-full">
            <ArticleCard article={articles[0]} isLarge />
          </div>

          {/* Stacked Small Cards - Right */}
          <div className="flex flex-col gap-6 h-full">
            <ArticleCard article={articles[1]} />
            <ArticleCard article={articles[2]} />
          </div>
        </div>
      </div>
    </section>
  );
};

interface ArticleCardProps {
  article: {
    category: string;
    title: string;
    date: string;
    image: string;
    link: string;
  };
  isLarge?: boolean;
}

const ArticleCard = ({ article, isLarge = false }: ArticleCardProps) => {
  return (
    <a 
      href={article.link}
      className={`group relative block w-full overflow-hidden rounded-[12px] bg-black transition-transform duration-500 ease-out hover:scale-[1.01] ${
        isLarge ? 'h-[640px]' : 'h-[308px]'
      }`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover opacity-90"
          sizes={isLarge ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 50vw"}
          priority={isLarge}
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
        <div className="space-y-3">
          <span className="block text-[12px] font-semibold uppercase tracking-[0.05em] text-white/90 font-sans">
            {article.category}
          </span>
          <h3 className={`font-display text-white leading-[1.2] tracking-[-0.01em] ${
            isLarge ? 'text-[32px] md:text-[40px] max-w-sm' : 'text-[24px] max-w-xs'
          }`}>
            {article.title}
          </h3>
          <p className="text-[14px] text-white/70 font-sans mt-2">
            {article.date}
          </p>
        </div>
      </div>
    </a>
  );
};

export default TrendingArticles;