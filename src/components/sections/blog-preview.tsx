import React from 'react';
import Image from 'next/image';

const BlogPreview = () => {
  const blogPosts = [
    {
      category: 'Life Skills',
      title: 'Jinsei — Live Your Best Life',
      date: 'Oct 21, 2025',
      size: 'large',
      href: '/blog/jinsei',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/o3eXkdKDhbgtXA5BP7lNt5KoHkc-2.jpg',
    },
    {
      category: 'Team',
      title: 'What Happens at a Xcelens Session - An activity explained',
      date: 'Aug 11, 2025',
      size: 'small',
      href: '/blog/mocksession',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/I1i1aH3cI6Ef79GFYgyxuigzAsc-3.jpg',
    },
    {
      category: 'Mindset',
      title: 'Igniting Unshakable Confidence in Your Daily Life',
      date: 'Apr 1, 2025',
      size: 'small',
      href: '/blog/confidence',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Iu4fZyD4vuzchpsdq4hW8NWDHc-7.png',
    },
    {
      category: 'Team',
      title: 'Mastering Team Building to Achieve Breakthrough Results',
      date: 'Mar 2, 2025',
      size: 'small',
      href: '/blog/pentafecta',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/p0TCoZkjPviXzZqzl2zrPUgbs-6.png',
    },
    {
      category: 'Habits',
      title: 'Make your own Wiki',
      date: 'Feb 23, 2025',
      size: 'small',
      href: '/blog/wiki',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wxecdceNbmK8M4AhyEEcfzd9U-5.jpg',
    }
  ];

  return (
    <section className="relative py-[140px] bg-[#f3f3f3] overflow-hidden">
      {/* Background Grid Lines */}
      <div className="absolute inset-0 pointer-events-none container mx-auto px-6 flex justify-between">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-[1px] h-full bg-[#e5e5e5]" />
        ))}
      </div>

      <div className="container relative mx-auto px-6 max-w-[1200px]">
        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center justify-center rounded-full px-[12px] py-[4px] bg-[#D1D5DB] text-[#374151] text-[12px] font-medium mb-6">
            Blog
          </div>
          <h2 className="font-display text-[48px] leading-[1.2] text-[#000000] max-w-[500px]">
            Inspiring Insights for Lasting Growth
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* First Row - Mixed Widths */}
          <div className="lg:col-span-2">
            <BlogCard post={blogPosts[0]} />
          </div>
          <div className="lg:col-span-1">
            <BlogCard post={blogPosts[1]} />
          </div>

          {/* Second Row - Three Equal Columns */}
          {blogPosts.slice(2).map((post, index) => (
            <div key={index} className="lg:col-span-1">
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 flex justify-center">
          <a
            href="/blog"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white text-[16px] font-semibold hover:opacity-80 transition-opacity"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ post }: { post: { category: string; title: string; date: string; href: string; image: string } }) => {
  return (
    <a
      href={post.href}
      className="group block relative w-full h-[320px] bg-black rounded-[12px] overflow-hidden transition-transform duration-300 hover:-translate-y-1"
    >
      {/* Background Image */}
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-90"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 z-10">
        <span className="text-[12px] font-medium text-white/70 mb-2 uppercase tracking-wider">
          {post.category}
        </span>
        <h3 className="font-display text-[24px] leading-[1.3] text-white mb-4 group-hover:underline underline-offset-4 decoration-1">
          {post.title}
        </h3>
        <p className="text-[14px] text-white/70 font-medium">
          {post.date}
        </p>
      </div>
    </a>
  );
};

export default BlogPreview;
