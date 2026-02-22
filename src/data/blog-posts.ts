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
        text: "Jinsei represents the philosophy of living your best life with intention, clarity, and deep self-understanding. At its core lies <strong>The LifeBook Program</strong>, a guided self-discovery experience that helps individuals explore their values, goals, traumas, and blind spots across <em>12 dimensions of life</em>:",
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
        text: "Many traumas and personal gaps stem not from dramatic events, but from <strong>lack of exposure, limited worldviews, and an inability to dream big</strong>. This program helps correct that by expanding one\u2019s internal universe.",
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
        text: "What do you currently believe about this dimension of life? How have you been approaching it so far?",
      },
      {
        type: "paragraph",
        text: "Your premise is your starting point. Your existing philosophy and biases.",
      },
      { type: "heading3", text: "2. Purpose" },
      {
        type: "paragraph",
        text: "Why does this dimension matter to you? What meaningful outcome are you seeking?",
      },
      {
        type: "paragraph",
        text: "Understanding the <em>why</em> behind your goals is the fuel that keeps you moving when discipline wavers.",
      },
      { type: "heading3", text: "3. Vision" },
      {
        type: "paragraph",
        text: "What does your ideal state look like?",
      },
      {
        type: "paragraph",
        text: "These are the goals you pursue every single day. The mountain you choose to climb.",
      },
      { type: "heading3", text: "4. Strategy" },
      {
        type: "paragraph",
        text: "How will you get there? Two paths work beautifully here:",
      },
      {
        type: "paragraph",
        text: "Let the learner <strong>ideate, hypothesize, and design strategies</strong> to materialize their goals.",
      },
      {
        type: "paragraph",
        text: "Alternatively, <strong>scaffold the process by co-creating*</strong> the strategy first, then slowly transitioning it to a self-designed system once they reach the stage where they can operate independently.",
      },
      {
        type: "paragraph",
        text: "This progression empowers learners not just to dream, but to <strong>architect the mechanics of their own lives</strong>.",
      },
      {
        type: "note",
        text: "*co-creating happens best with subject matter experts, or folks who have achieves what you are in pursuit of. Xcelens makes introductions for you to build this strategy.",
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
        text: "Thinking about life through a framework like Jinsei completely changes the game.",
      },
      {
        type: "paragraph",
        text: "It gives order to chaos, intention to action, and meaning to the everyday.",
      },
      {
        type: "paragraph",
        text: "When you start living with this level of clarity and structure, you begin to operate in a world that feels entirely different \u2014 calmer, more expansive, more aligned.",
      },
      {
        type: "quote",
        text: "You stop reacting to life. You start <em>designing</em> it. For life doesn\u2019t happen to you, it happens from you.",
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
        text: "Every student has, at some point in school, felt bored, not because they dislike learning, but because the curriculum feels too simple or insufficiently stimulating. Traditional education often moves students forward based on time (the annual promotion cycle) rather than merit or mastery.",
      },
      {
        type: "paragraph",
        text: "At <strong>Xcelens Sessions</strong>, we flip this model. Students advance according to merit, clarity of thought, and demonstrated mastery. This reintroduces challenge, makes learning joyful again, and when combined with gamification, it increases engagement.",
      },
      {
        type: "paragraph",
        text: "But depth requires guidance. That is why our students gain access to expert mentors who help them explore ideas without artificial boundaries. No ceilings. No limits. No \u201cthis is enough.\u201d The goal is to keep going, always a layer deeper than the average learner ever attempts.",
      },
      { type: "heading2", text: "Sample Case Study: Marketing (AdTech)" },
      {
        type: "paragraph",
        text: "<strong>A Mock Discussion from the Xcelens Sessions \u2013 Marketing Class (AdTech)</strong>",
      },
      {
        type: "paragraph",
        text: "Topic: Embedded Deep Links (EDLs) through QRs<br/>Setting: Zomato\u2019s full-page Zomato Gold advertisement<br/>Publication: Sunday Times, 25 June 2023<br/>Observation: A QR code placed at the bottom of the ad",
      },
      {
        type: "paragraph",
        text: "This ad was deliberately selected because, at the time of publication, <strong>Zomato was a loss-making startup</strong>, a perfect context for rich inquiry. Immediately, several core marketing and strategy questions arise:",
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
        type: "paragraph",
        text: "These questions frame the mock discussion.",
      },
      {
        type: "heading2",
        text: "Case Analysis: What Does the Embedded Deep Link Do?",
      },
      {
        type: "heading3",
        text: "Case 1 \u2014 Zomato User without Gold (L1 \u2013 Easy)",
      },
      {
        type: "paragraph",
        text: "A logical assumption is that the QR code redirects such a user to the Buy Gold subscription page. This is exactly what happened, the EDL routed directly to the purchase screen.",
      },
      {
        type: "paragraph",
        text: "Straightforward. Predictable. Level 1 thinking.",
      },
      {
        type: "heading3",
        text: "Case 2 \u2014 Zomato User with Gold (L2 \u2013 Medium)",
      },
      {
        type: "paragraph",
        text: "Now the question becomes more interesting. What should the QR do for a user who already has a Gold subscription?",
      },
      {
        type: "paragraph",
        text: "Possible hypotheses include:",
      },
      {
        type: "list",
        items: [
          "Prompting the user to buy Gold again",
          "Opening the home screen",
          "Highlighting unused benefits",
        ],
      },
      {
        type: "paragraph",
        text: "What actually happened? The QR opened the <strong>Gold Summary Page</strong>, showcasing total savings to date and current plan details. This demonstrates thoughtful personalization and intelligent use of EDL routing.",
      },
      {
        type: "heading3",
        text: "Case 3 \u2014 Not a Zomato User (L3 \u2013 Difficult)",
      },
      {
        type: "paragraph",
        text: "For a non-user, the QR would logically prompt an <strong>app installation</strong>. But here is the real question:",
      },
      {
        type: "paragraph",
        text: "<strong>Is the EDL deferred?</strong> In other words, once the app is installed and opened, does the user land directly on the Gold page, maintaining the original intent of the QR?",
      },
      {
        type: "paragraph",
        text: "This is where advanced learners begin to shine.",
      },
      { type: "heading2", text: "Towards an L4+ Discussion" },
      {
        type: "paragraph",
        text: "A high-level debate naturally emerges around <strong>neo-traditional advertising</strong>, the fusion of physical ads with digital analytics.",
      },
      {
        type: "paragraph",
        text: "QR codes transform static print into:",
      },
      {
        type: "list",
        items: [
          "Trackable media",
          "Personalized funnels",
          "Rich behavioral datasets",
        ],
      },
      {
        type: "paragraph",
        text: "They break the old constraint where physical ads were \u201cblind\u201d and unmeasurable, enabling advertisers to capture data comparable to digital channels.",
      },
      {
        type: "paragraph",
        text: "This is where students start pushing beyond the surface.",
      },
      { type: "heading2", text: "L5 (Star-Level) Analysis" },
      {
        type: "paragraph",
        text: "At the deepest level, students examine:",
      },
      {
        type: "list",
        items: [
          "Companies that simultaneously ran digital and physical ads",
          "Comparisons of cost allocation",
          "Long-term ROAS (Return on Ad Spend)",
          "Differences in funnel quality between online-only vs. hybrid placements",
        ],
      },
      {
        type: "paragraph",
        text: "This is where intellectual boundaries dissolve completely, where learning no longer ends at the case study but expands into research, data interpretation, and independent hypothesis-building.",
      },
      { type: "heading2", text: "In Conclusion" },
      {
        type: "paragraph",
        text: "The purpose of this exercise at Xcelens Sessions is not just to analyze a Zomato ad. It is to teach students how to <strong>think without limits</strong>, how to go deeper than the curriculum, and how to break free from artificial ceilings.",
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
        text: "Loneliness (Will Wright notes in his TED Talk) can be as damaging as smoking a pack of cigarettes a day. In an effort to escape this feeling, children and adolescents often overlook red flags simply to belong to a group.",
      },
      {
        type: "paragraph",
        text: "The primal social instinct, our evolutionary drive to be part of a tribe, is so powerful that it can override rational judgment, pushing individuals into behaviors they would otherwise avoid. We have all witnessed how dominant personalities can compel peers into perilous or misguided activities.",
      },
      {
        type: "paragraph",
        text: "To avoid this trap, it is crucial to <strong>consciously choose</strong> the peers with whom one spends meaningful time. A carefully selected group that mutually fulfils the need for belonging allows individuals to preserve sound judgment instead of misdirecting their desire to fit in.",
      },
      {
        type: "paragraph",
        text: "The primary caregivers also need to have an extremely amicable relationship, as when resentment brews, it fosters the need to seek outward compassion, which is very easily mispercieved.",
      },
      {
        type: "paragraph",
        text: "It is often said that you become the average of the five people you spend the most time with. This is why I propose forming what I call a <strong>Pentafecta</strong> as early as possible.",
      },
      { type: "heading2", text: "What Is a Pentafecta?" },
      {
        type: "paragraph",
        text: "A Pentafecta is a co-elevation reference group \u2014 five individuals committed to growing into high-value, high-character contributors to the world. These are people who conduct themselves with class, pursue mastery, and cultivate a depth of understanding across domains that matter.",
      },
      {
        type: "paragraph",
        text: "Many individuals stagnate not because they lack ambition, but because their peers are not moving in the same upward direction. The Pentafecta solves this problem by aligning five people who agree to ascend together.",
      },
      { type: "heading2", text: "The Five Roles" },
      {
        type: "paragraph",
        text: "To build a well-rounded and synergistic group, each member plays a distinct professional archetype:",
      },
      {
        type: "list",
        items: [
          "<strong>The Visionary</strong> \u2013 Sees the future and sets the direction.",
          "<strong>The Artist</strong> \u2013 Crafts beauty, meaning, and cultural resonance.",
          "<strong>The Hacker</strong> \u2013 Innovates, builds, and iterates with speed.",
          "<strong>The Fixer</strong> \u2013 Solves problems, stabilizes systems, restores order.",
          "<strong>The Closer</strong> \u2013 Converts opportunity into reality through persuasion and execution.",
        ],
      },
      {
        type: "paragraph",
        text: "Together, these five roles create a dynamic ecosystem where competence compounds.",
      },
      { type: "heading2", text: "A Higher Standard of Conversation" },
      {
        type: "paragraph",
        text: "The founding principle of a Pentafecta is inspired by the maxim:",
      },
      {
        type: "quote",
        text: "\u201cGreat minds discuss ideas, good minds discuss events, and poor minds discuss people.\u201d",
      },
      {
        type: "paragraph",
        text: "<strong>Ideas</strong> demand expert-level thinking. Brainstorming, critiquing, and refining ideas sharpen cognitive muscles and build strategic intelligence.",
      },
      {
        type: "paragraph",
        text: "<strong>Events</strong> are useful as contextual anchors \u2014 an intermediate understanding is sufficient, as they help interpret the world and inspire new perspectives.",
      },
      {
        type: "paragraph",
        text: "<strong>People</strong>, however, should never be the primary topic. Discussing people devolves quickly into gossip, which is intellectually corrosive and spiritually diminishing. It wastes mental energy and reinforces tamasic tendencies \u2014 laziness, inertia, and negativity.",
      },
      {
        type: "paragraph",
        text: "The Pentafecta is more than a group; it is a personal board of directors for your growth. Curating the right five individuals early in life protects judgment, accelerates development, and shapes character. Most importantly, it ensures that the fundamental human need for belonging is fulfilled in a way that elevates rather than compromises one\u2019s potential.",
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
