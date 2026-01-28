import React from 'react';
import Image from 'next/image';

interface Article {
  title: string;
  category: string;
  date: string;
  image: string;
  href: string;
}

const articles: Article[] = [
  {
    title: "Jinsei — Live Your Best Life",
    category: "Life Skills",
    date: "Oct 21, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/o3eXkdKDhbgtXA5BP7lNt5KoHkc-2.jpg",
    href: "/blog/jinsei"
  },
  {
    title: "What Happens at a Xcelens Session - An activity explained",
    category: "Team",
    date: "Aug 11, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/I1i1aH3cI6Ef79GFYgyxuigzAsc-3.jpg",
    href: "/blog/mocksession"
  },
  {
    title: "Why Every Young Person Needs a Pentafecta",
    category: "Personal Well-Being",
    date: "Oct 21, 2023",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/A5JxusJLEIR79cqLLnjbM30AZcQ-4.jpg",
    href: "/blog/pentafecta2"
  },
  {
    title: "Make your own Wiki",
    category: "Habits",
    date: "Feb 23, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wxecdceNbmK8M4AhyEEcfzd9U-5.jpg",
    href: "/blog/wiki"
  },
  {
    title: "Mastering Team Building to Achieve Breakthrough Results",
    category: "Team",
    date: "Mar 2, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/p0TCoZkjPviXzZqzl2zrPUgbs-6.png",
    href: "/blog/pentafecta"
  },
  {
    title: "Igniting Unshakable Confidence in Your Daily Life",
    category: "Mindset",
    date: "Apr 1, 2025",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Iu4fZyD4vuzchpsdq4hW8NWDHc-7.png",
    href: "/blog/confidence"
  }
];

const AllArticles = () => {
  return (
    <section className="relative w-full py-[120px] bg-[#F5F5F5] overflow-hidden">
      {/* Decorative Grid Lines Overlay (Positioned to match global layout) */}
      <div className="absolute inset-x-0 top-0 bottom-0 pointer-events-none z-0 hidden lg:block">
        <div className="container mx-auto h-full flex justify-between px-0">
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
          <div className="w-px h-full bg-[rgba(0,0,0,0.05)]" />
        </div>
      </div>

      <div className="container relative z-10 px-6 lg:px-0 max-w-[1240px]">
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="font-display text-[64px] leading-[1.1] tracking-[-0.03em] text-black">
            All articles
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <a 
              key={index} 
              href={article.href}
              className="group article-card block h-[450px] relative overflow-hidden rounded-[12px] bg-neutral-200"
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

              {/* Text Overlay Gradient */}
              <div className="article-card-overlay bg-gradient-to-t from-[rgba(0,0,0,0.85)] via-[rgba(0,0,0,0.3)] to-transparent">
                <div className="flex flex-col gap-2">
                  <span className="category-tag text-[12px] font-semibold text-[rgba(255,255,255,0.9)] uppercase tracking-[0.05em]">
                    {article.category}
                  </span>
                  <h3 className="font-display text-[24px] leading-[1.2] tracking-[-0.01em] text-white">
                    {article.title}
                  </h3>
                  <span className="text-[14px] font-normal text-[rgba(255,255,255,0.7)]">
                    {article.date}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllArticles;