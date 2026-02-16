export interface ServiceContent {
  type: "paragraph" | "heading2" | "heading3" | "list" | "quote";
  text?: string;
  items?: string[];
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  image: string;
  category: string;
  content: ServiceContent[];
}

export const services: Service[] = [
  {
    slug: "mentis",
    title: "Mentis - Mindset Coaching",
    shortTitle: "Mindset Coaching",
    description:
      "Build resilient habits, overcome doubts, and unlock unwavering self-belief.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Yx8HzJ9dJuN8MaCmJEtK79B5u8-4.png",
    category: "Mindset",
    content: [
      {
        type: "paragraph",
        text: "Our mindset coaching program is designed to help you overcome mental barriers, build resilience, and develop the inner confidence needed for lasting professional success. Through personalized sessions, we work together to align your thinking with your ambitions.",
      },
      {
        type: "heading2",
        text: "What You'll Gain",
      },
      {
        type: "paragraph",
        text: "Mentis is built around the principle that lasting change starts from within. We don't just address surface-level habits — we rewire the beliefs and thought patterns that hold you back.",
      },
      {
        type: "list",
        items: [
          "Develop unshakeable self-belief and confidence in high-pressure situations",
          "Learn to reframe setbacks as stepping stones for growth",
          "Build daily habits that reinforce a resilient, growth-oriented mindset",
          "Overcome imposter syndrome and self-doubt with proven techniques",
        ],
      },
      {
        type: "heading2",
        text: "How It Works",
      },
      {
        type: "paragraph",
        text: "Each Mentis engagement begins with a deep-dive assessment of your current mental frameworks, identifying the patterns that limit your potential. From there, we craft a personalized roadmap of mindset shifts, habit changes, and accountability structures.",
      },
      {
        type: "quote",
        text: "Your mindset is the foundation of everything you build. When the foundation is strong, there's no limit to what you can achieve.",
      },
      {
        type: "heading3",
        text: "Session Structure",
      },
      {
        type: "paragraph",
        text: "Sessions are held weekly, each lasting 60 minutes. Between sessions, you'll work through targeted exercises designed to reinforce new patterns and challenge old ones. Progress reviews happen monthly to ensure we're tracking toward your goals.",
      },
    ],
  },
  {
    slug: "virtus",
    title: "Virtus - Skillset Coaching",
    shortTitle: "Skillset Coaching",
    description:
      "Sharpen deep technical proficiencies, and fast-track your professional growth.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/ewAqhKeUdtYR8p81zwehpcpB4ek-5.png",
    category: "Skillset",
    content: [
      {
        type: "paragraph",
        text: "Virtus is our skillset coaching program focused on sharpening the technical and professional competencies that set you apart. Whether you're looking to level up in your current role or pivot into a new field, we provide the structured guidance to get you there faster.",
      },
      {
        type: "heading2",
        text: "What You'll Gain",
      },
      {
        type: "paragraph",
        text: "We believe that skill development should be intentional, not accidental. Virtus gives you a clear path from where you are to where you want to be, with measurable milestones along the way.",
      },
      {
        type: "list",
        items: [
          "Identify and close critical skill gaps holding back your career progression",
          "Develop deep expertise in your chosen domain through deliberate practice",
          "Build a portfolio of work that demonstrates your growing capabilities",
          "Learn frameworks for continuous self-improvement that last a lifetime",
        ],
      },
      {
        type: "heading2",
        text: "How It Works",
      },
      {
        type: "paragraph",
        text: "We start with a comprehensive skills audit to understand your current strengths and the gaps between where you are and where you want to be. Then we build a structured learning and practice plan tailored to your goals, timeline, and learning style.",
      },
      {
        type: "quote",
        text: "Skills aren't just learned — they're forged through consistent, purposeful practice and the right guidance at the right time.",
      },
      {
        type: "heading3",
        text: "Session Structure",
      },
      {
        type: "paragraph",
        text: "Virtus sessions combine coaching with hands-on skill building. Each week includes a 60-minute coaching session plus structured practice assignments. We track your progress with regular skill assessments and adjust the plan as you grow.",
      },
    ],
  },
  {
    slug: "jinsei",
    title: "Jinsei - Life Coaching",
    shortTitle: "Life Coaching",
    description:
      "Align your priorities, restore balance, and elevate everyday well-being.",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/LXq27ZG7hrKeXuYWZ2M7w3YAIvM-6.png",
    category: "Life",
    content: [
      {
        type: "paragraph",
        text: "Jinsei is our life coaching program designed to help you find harmony between your professional ambitions and personal well-being. We help you define what a fulfilling life looks like for you — and then build the systems to make it real.",
      },
      {
        type: "heading2",
        text: "What You'll Gain",
      },
      {
        type: "paragraph",
        text: "True success isn't just about career milestones. Jinsei helps you cultivate a life that feels as good as it looks, with sustainable routines, meaningful relationships, and a deep sense of purpose.",
      },
      {
        type: "list",
        items: [
          "Establish clear priorities that align your daily actions with your deeper values",
          "Create sustainable routines that support both productivity and well-being",
          "Develop strategies for managing stress and preventing burnout",
          "Build stronger personal and professional relationships through better communication",
        ],
      },
      {
        type: "heading2",
        text: "How It Works",
      },
      {
        type: "paragraph",
        text: "Jinsei begins with a holistic life assessment — examining your career, relationships, health, personal growth, and sense of purpose. We identify areas of imbalance and design a coaching plan that brings everything into alignment.",
      },
      {
        type: "quote",
        text: "A well-lived life isn't found by accident. It's designed with intention, built with discipline, and sustained with self-compassion.",
      },
      {
        type: "heading3",
        text: "Session Structure",
      },
      {
        type: "paragraph",
        text: "Weekly 60-minute sessions focus on different life dimensions each month. Between sessions, you'll practice new habits and reflection exercises. Quarterly deep-dives help recalibrate your goals as your life evolves.",
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}
