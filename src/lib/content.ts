// Single source of truth for the marketing copy shown on the homepage.
// Keeping this separate from components makes it trivial to hand off
// content edits without touching layout/markup.

export const capabilities = [
  { name: "AI Reputation Audits", accent: "terracotta" as const },
  { name: "Executive Branding & Thought Leadership", accent: "forest" as const },
  { name: "AI Visibility Assessments", accent: "terracotta" as const },
  { name: "Online Reputation Management", accent: "forest" as const },
  { name: "Crisis Communication Strategy", accent: "terracotta" as const },
  { name: "Digital Trust & Credibility Consulting", accent: "forest" as const },
  { name: "Continuous Reputation Monitoring", accent: "terracotta" as const },
];

export const services = [
  {
    num: "01",
    name: "Reputation Audit",
    desc: "A full reading of how you are perceived. Across every surface that matters.",
  },
  {
    num: "02",
    name: "Executive Branding",
    desc: "A presence shaped with intent. Built to hold weight in any room.",
  },
  {
    num: "03",
    name: "AI Visibility Score",
    desc: "How the machines describe you. Measured, tracked, refined.",
  },
  {
    num: "04",
    name: "Review Intelligence",
    desc: "Signal drawn from the noise. Sentiment made actionable.",
  },
  {
    num: "05",
    name: "Crisis Readiness",
    desc: "A plan before the moment arrives. Composure, on demand.",
  },
];

export const testimonials = [
  {
    id: "testimonial-1",
    photo: "/reviews/daniel.webp",
    quote:
      "Meridian Repute gave us a completely new perspective on how AI understands our company. Their insights were practical, data-driven, and immediately actionable.",
    name: "Daniel",
    linkedin: null,
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-2",
    photo: "/reviews/alex-brogan.webp",
    quote:
      "The audit uncovered opportunities we hadn't considered before. The level of research and clarity behind every recommendation was genuinely impressive.",
    name: "Alex Brogan",
    linkedin: "https://www.linkedin.com/in/alex-brogan",
    accent: "forest" as const,
  },
  {
    id: "testimonial-3",
    photo: "/reviews/jake-hall.webp",
    quote:
      "What stood out most was the evidence-based approach. Every recommendation was backed by real data rather than assumptions, making it easy to prioritize our next steps.",
    name: "Jake Hall",
    linkedin: "https://www.linkedin.com/in/jacobrhall/",
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-4",
    photo: "/reviews/nicole-wolter.webp",
    quote:
      "Meridian Repute helped us understand our digital reputation from an AI perspective. The findings were insightful, well-structured, and highly relevant to our business.",
    name: "Nicole Wolter",
    linkedin: "https://www.linkedin.com/in/nicole-wolter-29107716/",
    accent: "forest" as const,
  },
  {
    id: "testimonial-5",
    photo: "/reviews/cedrik-neike.webp",
    quote:
      "The final report was exceptionally detailed and professionally presented. It gave our leadership team a clear roadmap for strengthening our online authority and credibility.",
    name: "Cedrik Neike",
    linkedin: "https://www.linkedin.com/in/cedrik-neike/",
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-6",
    photo: "/reviews/tina-muller.webp",
    quote:
      "The team's methodology is unlike traditional SEO or reputation services. Their AI-first approach provided strategic insights that we can continue building on.",
    name: "Tina Müller",
    linkedin: "https://www.linkedin.com/in/tina-mueller/?locale=en",
    accent: "forest" as const,
  },
  {
    id: "testimonial-7",
    photo: "/reviews/ari-reid.webp",
    quote:
      "We appreciated the depth of analysis and attention to detail. The recommendations were practical, realistic, and aligned with our long-term business goals.",
    name: "Ari Reid",
    linkedin: "https://www.linkedin.com/in/arireid/",
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-8",
    photo: "/reviews/glennda-baker.webp",
    quote:
      "Working with Meridian Repute was a valuable experience. Their intelligence-driven assessment highlighted both our strengths and the areas where we could improve our executive and brand presence.",
    name: "Glennda Baker",
    linkedin: "https://www.linkedin.com/in/glenndabaker/",
    accent: "forest" as const,
  },
  {
    id: "testimonial-9",
    photo: "/reviews/mauricio-umansky.webp",
    quote:
      "The quality of research, reporting, and strategic thinking exceeded our expectations. Meridian Repute has developed a distinctive approach to reputation intelligence.",
    name: "Mauricio Umansky",
    linkedin: "https://www.linkedin.com/in/mauricio-umansky/",
    accent: "terracotta" as const,
  },
];

export const techPartners = [
  { name: "ChatGPT", color: "#10A37F" },
  { name: "Gemini", color: "#4285F4" },
  { name: "Claude", color: "#D97757" },
  { name: "Perplexity", color: "#20808D" },
  { name: "Midjourney", color: "#1A1A1A" },
  { name: "Notion", color: "#1A1A1A" },
  { name: "Figma", color: "#A259FF" },
  { name: "Adobe", color: "#FF0000" },
  { name: "Canva", color: "#00C4CC" },
  { name: "Spotify", color: "#1DB954" },
  { name: "Slack", color: "#611F69" },
  { name: "HubSpot", color: "#FF7A59" },
  { name: "Mailchimp", color: "#FFE01B" },
  { name: "SEMrush", color: "#FF642D" },
  { name: "Ahrefs", color: "#FF6900" },
  { name: "Hootsuite", color: "#F4901F" },
  { name: "Buffer", color: "#2C4BFF" },
  { name: "Zapier", color: "#FF4A00" },
  { name: "Grammarly", color: "#15C39A" },
  { name: "Jasper", color: "#8A38F5" },
  { name: "Copy.ai", color: "#4B3AFF" },
  { name: "Salesforce", color: "#00A1E0" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

export const howItWorks = [
  {
    num: "01",
    title: "Audit",
    desc: "We map current perception across search engines, AI assistants, social platforms, news, and reviews.",
  },
  {
    num: "02",
    title: "Score",
    desc: "We calculate an AI Visibility Score measuring how frequently, accurately, and favorably you are cited by AI assistants.",
  },
  {
    num: "03",
    title: "Strategy",
    desc: "We build a reputation and content strategy targeted at the surfaces that matter most to your audience.",
  },
  {
    num: "04",
    title: "Monitor",
    desc: "We track visibility and sentiment continuously, refining the strategy as AI assistants and algorithms evolve.",
  },
];

export const faqs = [
  {
    question: "What is AI reputation management?",
    answer:
      "AI reputation management is the practice of monitoring and shaping how AI assistants such as ChatGPT, Gemini, Claude, and Perplexity describe a person, brand, or organization, alongside traditional search and social channels.",
  },
  {
    question: "What is an AI Visibility Score?",
    answer:
      "An AI Visibility Score measures how frequently, accurately, and favorably a brand or individual is cited by AI assistants and search engines, tracked over time to guide strategy.",
  },
  {
    question: "Who does Meridian Repute work with?",
    answer:
      "Meridian Repute works with businesses, enterprises, executive leaders, founders, public figures, and professional brands.",
  },
  {
    question: "How is Meridian Repute different from traditional PR?",
    answer:
      "Traditional PR focuses on media placement. Meridian Repute combines that discipline with AI visibility measurement, treating AI assistants and search engines as reputation surfaces of equal importance.",
  },
  {
    question: "How long does a reputation audit take?",
    answer:
      "A full reputation audit typically takes one to two weeks, covering search, AI assistants, social, news, and review surfaces.",
  },
  {
    question: "Do you work with individuals as well as companies?",
    answer:
      "Yes. Our services apply equally to organizations and to the executives, founders, and public figures who lead them.",
  },
  {
    question: "How quickly can crisis communication support begin?",
    answer:
      "Our crisis readiness team can be engaged immediately; clients with an existing readiness plan see the fastest response times.",
  },
  {
    question: "Is the engagement confidential?",
    answer:
      "Yes. Discretion is core to how we operate — engagements are handled in confidence from the first conversation.",
  },
  {
    question: "Which AI assistants and platforms do you monitor?",
    answer:
      "ChatGPT, Gemini, Claude, Perplexity, Google, and major social and review platforms, among others.",
  },
  {
    question: "How is progress measured?",
    answer:
      "Through continuous tracking of AI Visibility Score, sentiment, mention volume, and reach, reported on a regular cadence.",
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Ethics & Engagement Standards", href: "/ethics-standards" },
];
