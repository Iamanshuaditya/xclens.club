export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  image: string;
  content: BlogContent[];
}

export type BlogContent =
  | { type: "paragraph"; text: string }
  | { type: "heading2"; text: string }
  | { type: "heading3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "note"; text: string };

export const blogPosts: BlogPost[] = [
  {
    slug: "jinsei",
    title: "Jinsei \u2014 Live Your Best Life",
    category: "Life Skills",
    date: "Oct 21, 2025",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/o3eXkdKDhbgtXA5BP7lNt5KoHkc-2.jpg",
    content: [
      {
        type: "paragraph",
        text: "<strong>Jinsei</strong> is a LifeBook-style program \u2014 <strong>The LifeBook Program</strong> \u2014 exploring <em>12 dimensions of life</em>:",
      },
      {
        type: "list",
        items: [
          "Health & Fitness",
          "Intellectual",
          "Emotional",
          "Character",
          "Love",
          "Parenting",
          "Spirituality",
          "Social",
          "Career",
          "Financial Goals",
          "Quality of Life",
          "Life Vision",
        ],
      },
      {
        type: "paragraph",
        text: "Many traumas and personal gaps stem not from dramatic events, but from <strong>lack of exposure, limited worldviews, and an inability to dream big</strong>.",
      },
      {
        type: "heading2",
        text: "The Process: A Deep Dive into the 12 Dimensions",
      },
      {
        type: "paragraph",
        text: "Each dimension is explored through a structured framework that forces clarity and intentionality. The learner reflects intensely on each area, eventually crystallising four key components:",
      },
      { type: "heading3", text: "1. Premise" },
      {
        type: "paragraph",
        text: "What do you currently believe about this dimension of life?",
      },
      { type: "heading3", text: "2. Purpose" },
      {
        type: "paragraph",
        text: "Why does this dimension matter to you? Understanding the <em>why</em> behind each dimension unlocks genuine motivation.",
      },
      { type: "heading3", text: "3. Vision" },
      {
        type: "paragraph",
        text: "What does your ideal state look like?",
      },
      { type: "heading3", text: "4. Strategy" },
      {
        type: "paragraph",
        text: "How will you get there?",
      },
      {
        type: "paragraph",
        text: "Let the learner <strong>ideate, hypothesize, and design</strong> their own path forward independently.",
      },
      {
        type: "paragraph",
        text: "Alternatively, <strong>scaffold the process</strong> with expert guidance and co-creation.",
      },
      {
        type: "paragraph",
        text: "This progression empowers learners not just to dream, but to <strong>architect the mechanics of their own lives</strong>.",
      },
      {
        type: "note",
        text: "*Co-creating happens best with subject matter experts, or folks who have achieved what you are in pursuit of. Xcelens makes introductions for you to build this strategy.",
      },
      {
        type: "heading2",
        text: "After the 12 Weeks: A Life Lived in Themes",
      },
      {
        type: "paragraph",
        text: "Once the core program is completed, each month of the year is assigned a theme corresponding to one of the dimensions. This guides:",
      },
      {
        type: "list",
        items: [
          "The content they consume",
          "The conversations they spark",
          "The habits they experiment with",
          "The reflections they engage in",
        ],
      },
      {
        type: "paragraph",
        text: "In 12 months, the learner experiences 12 worlds, each enriching, layered, and transformative.",
      },
      {
        type: "heading2",
        text: "A Closing Note: Structured Thinking Changes Everything",
      },
      {
        type: "paragraph",
        text: "Thinking about life through a framework like <strong>Jinsei</strong> changes the way you approach every decision.",
      },
      {
        type: "quote",
        text: "You stop reacting to life. You start <em>designing</em> it.",
      },
    ],
  },
  {
    slug: "mocksession",
    title: "What Happens at a Xcelens Session - An activity explained",
    category: "Team",
    date: "Aug 11, 2025",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/I1i1aH3cI6Ef79GFYgyxuigzAsc-3.jpg",
    content: [
      {
        type: "paragraph",
        text: "Traditional education moves students by time rather than merit. At <strong>Xcelens Sessions</strong>, depth is pursued \u2014 but depth requires <strong>guidance</strong>.",
      },
      { type: "heading2", text: "Sample Case Study: Marketing (AdTech)" },
      {
        type: "paragraph",
        text: "A mock discussion from the Xcelens Sessions \u2014 Marketing Class (AdTech). The topic: a <strong>Zomato Gold</strong> advertisement. The setting: analysis of a print ad with a QR code, published in a print newspaper. A key observation: at the time of publication, <strong>Zomato was a loss-making startup</strong>.",
      },
      {
        type: "paragraph",
        text: "Key questions framing the discussion:",
      },
      {
        type: "list",
        items: [
          "Are they still innovating?",
          "Are the losses strategic or alarming?",
          "Are they still leading the category?",
          "Is technology being leveraged to its fullest?",
        ],
      },
      {
        type: "heading2",
        text: "Case Analysis: What Does the Embedded Deep Link Do?",
      },
      {
        type: "heading3",
        text: "Case 1 \u2014 Zomato User without Gold (L1 - Easy)",
      },
      {
        type: "paragraph",
        text: "QR redirects to the <strong>Buy Gold subscription page</strong>. Straightforward. Predictable. Level 1 thinking.",
      },
      {
        type: "heading3",
        text: "Case 2 \u2014 Zomato User with Gold (L2 - Medium)",
      },
      {
        type: "paragraph",
        text: "What should the QR do for existing Gold subscribers? Hypotheses include prompting repurchase, opening the home screen, or highlighting unused benefits. The actual result: the <strong>Gold Summary Page</strong>.",
      },
      {
        type: "heading3",
        text: "Case 3 \u2014 Not a Zomato User (L3 - Difficult)",
      },
      {
        type: "paragraph",
        text: "QR would prompt <strong>app installation</strong>. The key question: Is the EDL (Embedded Deep Link) <strong>deferred</strong>? Does it land directly on the Gold page after install?",
      },
      { type: "heading2", text: "Towards an L4+ Discussion" },
      {
        type: "paragraph",
        text: "The debate moves to <strong>neo-traditional advertising</strong>. QR codes transform static print into:",
      },
      {
        type: "list",
        items: [
          "Trackable media",
          "Personalized funnels",
          "Rich behavioral datasets",
        ],
      },
      { type: "heading2", text: "L5 (Star-Level) Analysis" },
      {
        type: "paragraph",
        text: "Students examine:",
      },
      {
        type: "list",
        items: [
          "Companies that simultaneously ran digital and physical ads",
          "Cost allocation comparisons",
          "Long-term ROAS (Return on Ad Spend)",
          "Funnel quality differences between online-only vs. hybrid placements",
        ],
      },
      { type: "heading2", text: "In Conclusion" },
      {
        type: "paragraph",
        text: "The purpose is to teach students how to <strong>think without limits</strong>.",
      },
      {
        type: "quote",
        text: "When learners operate without constraints, and with mentorship that rewards depth, education transforms from a requirement into an adventure.",
      },
    ],
  },
  {
    slug: "confidence",
    title: "Igniting Unshakable Confidence in Your Daily Life",
    category: "Mindset",
    date: "Apr 1, 2025",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Iu4fZyD4vuzchpsdq4hW8NWDHc-7.png",
    content: [
      {
        type: "quote",
        text: "Confidence is not a gift \u2014 it\u2019s a skill you develop.",
      },
      {
        type: "heading2",
        text: "1. Dismantle \u2014 Why Not",
      },
      {
        type: "paragraph",
        text: "Begin by naming your doubts and fears. Write them down. Once seen on paper, the mind perceives them as addressed \u2014 like closing an open loop. The act of externalizing your inner critic is the first step to silencing it.",
      },
      {
        type: "heading2",
        text: "2. Cultivate Small Wins Daily",
      },
      {
        type: "paragraph",
        text: "Confidence builds through action, not affirmation. Set micro-goals every day \u2014 tasks small enough that failure feels impossible but meaningful enough to register as progress. Each win compounds into a reservoir of self-trust.",
      },
      {
        type: "heading2",
        text: "3. Practice Powerful Affirmations",
      },
      {
        type: "paragraph",
        text: "Rewrite the scripts running in your mind. Replace \u201cI can\u2019t\u201d with \u201cI\u2019m learning.\u201d Replace \u201cI\u2019m not good enough\u201d with \u201cI\u2019m growing.\u201d Repetition rewires neural pathways \u2014 the science of neuroplasticity supports this practice.",
      },
      {
        type: "heading2",
        text: "4. Reflect and Review with a Coach",
      },
      {
        type: "paragraph",
        text: "A coach or mentor accelerates the feedback loop. They see blind spots you cannot, challenge assumptions you hold sacred, and celebrate progress you might overlook.",
      },
      {
        type: "quote",
        text: "The goal is to have you feel like a new person. Someone who shares ideas without fear, and who has discovered that confidence is a muscle you strengthen, day by day.",
      },
    ],
  },
  {
    slug: "pentafecta",
    title: "Mastering Team Building to Achieve Breakthrough Results",
    category: "Team",
    date: "Mar 2, 2025",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/p0TCoZkjPviXzZqzl2zrPUgbs-6.png",
    content: [
      {
        type: "paragraph",
        text: "In 2025, Revenue per employee figures are through the roof. Smaller teams are going further than ever.",
      },
      {
        type: "paragraph",
        text: "The PentaFecta framework brings together 5 core-competencies optimized for agility and execution:",
      },
      { type: "heading3", text: "Visionary \u2014 The Glue" },
      {
        type: "paragraph",
        text: "The most critical to the mission. Crafts the vision, instills purpose and common direction. Pattern recognition, ability to see the future and create it. Also handles fundraising and resource allocation.",
      },
      { type: "heading3", text: "AccordMaster" },
      {
        type: "paragraph",
        text: "The diplomacy role: communications, public relations, positioning, dealmaking, partnerships, conflict resolution. The consensus builder. An excelling AccordMaster will never split the difference and is a master negotiator. Errors in picking this person lead to instant destruction of capital, resources, and misalignment.",
      },
      { type: "heading3", text: "Builder" },
      {
        type: "paragraph",
        text: "The hacker who builds at breakneck speed. Ships ahead of the curve. Finds joy in identification \u2192 Ideation \u2192 Developing. Often disorganised, messy and all over the place \u2014 and only they can navigate their space.",
      },
      { type: "heading3", text: "Fixer" },
      {
        type: "paragraph",
        text: "The systems and processes person. Finds joy in organising, labelling and structuring. When a team moves fast, things break often. The Fixer applies Kintsugi \u2014 repairs with love, care and candor.",
      },
      { type: "heading3", text: "Artist" },
      {
        type: "paragraph",
        text: "Ensures aesthetics are built in foundationally, not retrospectively. Every touchpoint feels like a part of a whole.",
      },
    ],
  },
  {
    slug: "wiki",
    title: "Make your own Wiki",
    category: "Habits",
    date: "Feb 23, 2025",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/wxecdceNbmK8M4AhyEEcfzd9U-5.jpg",
    content: [
      {
        type: "quote",
        text: "A personal Wiki is not a vanity project \u2014 it is a living archive of who you are, what you know, and how you can contribute.",
      },
      {
        type: "heading2",
        text: "A. Story Bank: The Narrative That Makes You, You",
      },
      {
        type: "paragraph",
        text: "Your stories are your intellectual and emotional fingerprint. A well-curated Story Bank helps you:",
      },
      {
        type: "list",
        items: [
          "Break the ice in new social settings",
          "Make lessons unforgettable when you teach",
          "Infuse authenticity into conversations",
          "Illustrate abstract ideas with real-world experiences",
          "Build rapport quickly and naturally",
        ],
      },
      {
        type: "heading2",
        text: "B. People List: Your Personal Network Intelligence",
      },
      {
        type: "heading3",
        text: "(i) Be Resourceful and Know Your People",
      },
      {
        type: "paragraph",
        text: "Document what you know about the people in your life. Making <strong>mutually beneficial introductions</strong> earns you <strong>two favours</strong>. This is not transactional; it is transformational.",
      },
      { type: "heading3", text: "(ii) The List of Inspirers" },
      {
        type: "paragraph",
        text: "Maintain a list of people who inspire you, even if imperfect. When you dissect what makes them remarkable, you upgrade your own operating system.",
      },
      {
        type: "heading3",
        text: "(iii) David Rockefeller\u2019s Rolodex",
      },
      {
        type: "paragraph",
        text: "Rockefeller kept a Rolodex with over <strong>100,000 people</strong>. Your People List is your modern-day Rolodex.",
      },
      {
        type: "heading2",
        text: "General Insight: Why Your Wiki Matters",
      },
      {
        type: "paragraph",
        text: "Powerful references, combined with unique stories, make you someone worth listening to.",
      },
      {
        type: "heading3",
        text: "When you sell something the right way, you rarely need force.",
      },
      {
        type: "paragraph",
        text: "You can align incentives so that everyone genuinely wins.",
      },
      { type: "heading2", text: "Examples of Strong References" },
      {
        type: "list",
        items: [
          "\u201cWinning is a function of access and information.\u201d",
          "\u201cWe don\u2019t sell saddles here.\u201d \u2014 Slack",
        ],
      },
      { type: "heading2", text: "Closing Thought" },
      {
        type: "quote",
        text: "How you say what you say is profoundly underrated.",
      },
    ],
  },
  {
    slug: "pentafecta2",
    title: "Why Every Young Person Needs a Pentafecta",
    category: "Personal Well-Being",
    date: "Oct 21, 2023",
    author: "Neel",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/A5JxusJLEIR79cqLLnjbM30AZcQ-4.jpg",
    content: [
      {
        type: "paragraph",
        text: "Loneliness can be as damaging as smoking a pack of cigarettes a day. Children overlook red flags simply to belong. The primal social instinct can override rational judgment.",
      },
      {
        type: "paragraph",
        text: "To avoid this trap, it is crucial to <strong>consciously choose</strong> your circle. Primary caregivers also need an amicable relationship, as resentment fosters the need to seek outward compassion.",
      },
      {
        type: "paragraph",
        text: "You become the average of the five people you spend the most time with \u2014 this is where the <strong>Pentafecta</strong> comes in.",
      },
      { type: "heading3", text: "What Is a Pentafecta?" },
      {
        type: "paragraph",
        text: "A co-elevation reference group: five individuals committed to growing into high-value, high-character contributors. Many individuals stagnate not because they lack ambition, but because their peers are not moving in the same upward direction.",
      },
      { type: "heading3", text: "The Five Roles" },
      {
        type: "list",
        items: [
          "The Visionary",
          "The Artist",
          "The Hacker",
          "The Fixer",
          "The Closer",
        ],
      },
      {
        type: "paragraph",
        text: "Together, these five roles create a dynamic ecosystem where competence compounds.",
      },
      { type: "heading3", text: "A Higher Standard of Conversation" },
      {
        type: "paragraph",
        text: "The founding principle: <strong>\u201cGreat minds discuss ideas, good minds discuss events, and poor minds discuss people.\u201d</strong>",
      },
      {
        type: "list",
        items: [
          "Ideas \u2014 elevated discourse",
          "Events \u2014 contextual awareness",
          "People \u2014 to be minimized",
        ],
      },
      {
        type: "quote",
        text: "The Pentafecta is more than a peer group; it is a personal board of directors for your growth.",
      },
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, count = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== currentSlug)
    .slice(0, count);
}
