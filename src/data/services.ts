export interface ServiceBenefit {
  title: string;
  description: string;
}

export interface ServiceTestimonial {
  quote: string;
  name: string;
  role: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
  image: string;
  category: string;
  overview: string;
  benefitsSubtitle: string;
  benefits: ServiceBenefit[];
  testimonialsSubtitle: string;
  testimonials: ServiceTestimonial[];
  illustrationColors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

export const services: Service[] = [
  {
    slug: "mentis",
    title: "Mentis - Mindset Coaching",
    shortTitle: "Mindset Coaching",
    description:
      "Build resilient habits, overcome doubts, and unlock unwavering self-belief.",
    tagline: "Transform your thinking, transform your life",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/Yx8HzJ9dJuN8MaCmJEtK79B5u8-4.png",
    category: "Mindset",
    overview:
      "Our mindset coaching program is designed to help you overcome mental barriers, build resilience, and develop the inner confidence needed for lasting professional success. Through personalized sessions, we work together to align your thinking with your ambitions.",
    benefitsSubtitle:
      "Empower yourself to grow professionally and achieve your goals.",
    benefits: [
      {
        title: "Clarity",
        description:
          "Define your career aspirations and set achievable milestones.",
      },
      {
        title: "Support",
        description:
          "Receive personalized guidance tailored to your unique strengths.",
      },
      {
        title: "Confidence",
        description:
          "Build the skills and mindset needed to excel in any role.",
      },
    ],
    testimonialsSubtitle:
      "Real stories of growth, success, and transformation through coaching.",
    testimonials: [
      {
        quote:
          "The coaching completely changed my outlook. I now have the confidence to tackle anything.",
        name: "Jane D.",
        role: "",
      },
      {
        quote:
          "The sessions helped me clarify my goals and take steps I never thought possible.",
        name: "Michael R.",
        role: "",
      },
      {
        quote:
          "I feel empowered, motivated, and ready to achieve my dreams.",
        name: "Sophia L.",
        role: "",
      },
      {
        quote:
          "The personalized guidance made all the difference. My mindset has completely shifted for the better.",
        name: "Daniel W.",
        role: "",
      },
    ],
    illustrationColors: {
      primary: "#7A5C3A",
      secondary: "#C8874A",
      tertiary: "#D4CCC4",
    },
  },
  {
    slug: "virtus",
    title: "Virtus - Skillset Coaching",
    shortTitle: "Skillset Coaching",
    description:
      "Sharpen deep technical proficiencies, and fast-track your professional growth.",
    tagline: "Sharpen your skills, accelerate your growth",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/ewAqhKeUdtYR8p81zwehpcpB4ek-5.png",
    category: "Skillset",
    overview:
      "Virtus is our skillset coaching program focused on sharpening the technical and professional competencies that set you apart. Whether you're looking to level up in your current role or pivot into a new field, we provide the structured guidance to get you there faster.",
    benefitsSubtitle:
      "Develop the skills that matter most with a structured approach to growth.",
    benefits: [
      {
        title: "Expertise",
        description:
          "Identify and close critical skill gaps holding back your career.",
      },
      {
        title: "Strategy",
        description:
          "Build a clear roadmap with measurable milestones for your goals.",
      },
      {
        title: "Growth",
        description:
          "Learn frameworks for continuous improvement that last a lifetime.",
      },
    ],
    testimonialsSubtitle:
      "Hear from professionals who transformed their careers through focused skill development.",
    testimonials: [
      {
        quote:
          "The structured learning approach fast-tracked my career development. I landed my dream role within six months.",
        name: "David L.",
        role: "UX Designer",
      },
      {
        quote:
          "I went from feeling stuck to having a clear path for growth. The skill gap analysis was a game-changer.",
        name: "Anna C.",
        role: "Data Analyst",
      },
      {
        quote:
          "The deliberate practice framework transformed how I approach learning. I'm growing faster than ever before.",
        name: "Tom H.",
        role: "Frontend Developer",
      },
      {
        quote:
          "My portfolio and technical abilities improved dramatically. The personalized coaching made all the difference.",
        name: "Meera S.",
        role: "Business Analyst",
      },
    ],
    illustrationColors: {
      primary: "#3A5A7A",
      secondary: "#5A8AB0",
      tertiary: "#C4CCD4",
    },
  },
  {
    slug: "jinsei",
    title: "Jinsei - Life Coaching",
    shortTitle: "Life Coaching",
    description:
      "Align your priorities, restore balance, and elevate everyday well-being.",
    tagline: "Align your priorities, elevate your life",
    image:
      "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a3449915-9d5a-4bbc-a8b2-5144cf4b9dd4-xcelens-club/assets/images/LXq27ZG7hrKeXuYWZ2M7w3YAIvM-6.png",
    category: "Life",
    overview:
      "Jinsei is our life coaching program designed to help you find harmony between your professional ambitions and personal well-being. We help you define what a fulfilling life looks like for you — and then build the systems to make it real.",
    benefitsSubtitle:
      "Cultivate a life that feels as good as it looks with meaningful purpose.",
    benefits: [
      {
        title: "Balance",
        description:
          "Align your daily actions with your deeper values for lasting harmony.",
      },
      {
        title: "Purpose",
        description:
          "Strengthen your sense of direction so every choice moves you forward.",
      },
      {
        title: "Resilience",
        description:
          "Develop strategies for managing stress and preventing burnout.",
      },
    ],
    testimonialsSubtitle:
      "Stories from people who found balance, purpose, and a renewed sense of direction.",
    testimonials: [
      {
        quote:
          "I finally found the balance between my career ambitions and personal well-being. Life feels whole again.",
        name: "Rachel N.",
        role: "Operations Manager",
      },
      {
        quote:
          "The holistic approach helped me see what was really important. My relationships and health have never been better.",
        name: "Alex W.",
        role: "Finance Manager",
      },
      {
        quote:
          "I went from constant burnout to sustainable energy. The routines we built together changed everything.",
        name: "Lisa D.",
        role: "Creative Director",
      },
      {
        quote:
          "Finding purpose beyond work transformed my entire outlook. I wake up excited about life, not just deadlines.",
        name: "Chris P.",
        role: "Consultant",
      },
    ],
    illustrationColors: {
      primary: "#4A6A3A",
      secondary: "#7AAB5A",
      tertiary: "#C8D4C4",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getOtherServices(slug: string): Service[] {
  return services.filter((s) => s.slug !== slug);
}
