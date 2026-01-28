import React from 'react';

const BlogPreview = () => {
  const blogPosts = [
    {
      category: 'Life Skills',
      title: 'Jinsei — Live Your Best Life',
      date: 'Oct 21, 2025',
      size: 'large',
    },
    {
      category: 'Team',
      title: 'What Happens at a Xcelens Session - An activity explained',
      date: 'Aug 11, 2025',
      size: 'small',
    },
    {
      category: 'Mindset',
      title: 'Igniting Unshakable Confidence in Your Daily Life',
      date: 'Apr 1, 2025',
      size: 'small',
    },
    {
      category: 'Team',
      title: 'Mastering Team Building to Achieve Breakthrough Results',
      date: 'Mar 2, 2025',
      size: 'small',
    },
    {
      category: 'Habits',
      title: 'Make your own Wiki',
      date: 'Feb 23, 2025',
      size: 'small',
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

const BlogCard = ({ post }: { post: any }) => {
  return (
    <a 
      href="#" 
      className="group block relative w-full h-[320px] bg-black rounded-[12px] p-8 transition-transform duration-300 hover:-translate-y-1 overflow-hidden"
    >
      <div className="h-full flex flex-col justify-end relative z-10 text-white">
        <span className="text-[12px] font-medium text-[#737373] mb-2 uppercase tracking-wider">
          {post.category}
        </span>
        <h3 className="font-display text-[24px] leading-[1.3] mb-4 group-hover:underline underline-offset-4 decoration-1">
          {post.title}
        </h3>
        <p className="text-[14px] text-[#737373] font-medium">
          {post.date}
        </p>
      </div>

      {/* Subtle overlay for card texture (optional, as per design system) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
    </a>
  );
};

export default BlogPreview;