import React from 'react';
import Image from 'next/image';

const BlogSection = () => {
  const blogPosts = [
    {
      category: "Life Skills",
      title: "Jinsei — Live Your Best Life",
      date: "Oct 21, 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/o3eXkdKDhbgtXA5BP7lNt5KoHkc-7.jpg",
      span: "md:col-span-2",
      height: "h-[320px]"
    },
    {
      category: "Team",
      title: "What Happens at a Xcelens Session - An activity explained",
      date: "Aug 11, 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/I1i1aH3cI6Ef79GFYgyxuigzAsc-8.jpg",
      span: "md:col-span-1",
      height: "h-[320px]"
    },
    {
      category: "Mindset",
      title: "Igniting Unshakable Confidence in Your Daily Life",
      date: "Apr 1, 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Iu4fZyD4vuzchpsdq4hW8NWDHc-9.png",
      span: "md:col-span-1",
      height: "h-[320px]"
    },
    {
      category: "Team",
      title: "Mastering Team Building to Achieve Breakthrough Results",
      date: "Mar 2, 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/p0TCoZkjPviXzZqzl2zrPUgbs-10.png",
      span: "md:col-span-1",
      height: "h-[320px]"
    },
    {
      category: "Habits",
      title: "Make your own Wiki",
      date: "Feb 23, 2025",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wxecdceNbmK8M4AhyEEcfzd9U-11.jpg",
      span: "md:col-span-1",
      height: "h-[320px]"
    }
  ];

  return (
    <section className="relative py-[140px] bg-[#F5F5F5] overflow-hidden">
      {/* Grid Guide Lines */}
      <div className="absolute inset-0 pointer-events-none max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-5 h-full w-full">
          <div className="border-l border-[#E5E5E5] h-full" />
          <div className="border-l border-[#E5E5E5] h-full" />
          <div className="border-l border-[#E5E5E5] h-full" />
          <div className="border-l border-[#E5E5E5] h-full" />
          <div className="border-l border-r border-[#E5E5E5] h-full" />
        </div>
      </div>

      <div className="container relative z-10">
        <div className="mb-12">
          <div className="section-tag bg-[#E5E5E5] text-[#666666] px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest inline-block mb-6">
            Blog
          </div>
          <h2 className="font-display text-[56px] leading-[1.1] font-medium text-black max-w-[600px] tracking-tight">
            Inspiring Insights for Lasting Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div 
              key={index} 
              className={`group relative overflow-hidden rounded-[12px] cursor-pointer transition-transform duration-500 hover:scale-[1.01] ${post.span} ${post.height}`}
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <span className="text-[12px] font-medium opacity-80 uppercase tracking-wider mb-2">
                  {post.category}
                </span>
                <h3 className="font-display text-[24px] leading-[1.2] font-medium mb-3 group-hover:translate-y-[-4px] transition-transform duration-500">
                  {post.title}
                </h3>
                <span className="text-[14px] opacity-70 font-sans">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a 
            href="/blog" 
            className="btn-primary bg-black text-white px-10 py-3 rounded-full text-sm font-semibold border border-black hover:bg-white hover:text-black transition-all duration-300"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;