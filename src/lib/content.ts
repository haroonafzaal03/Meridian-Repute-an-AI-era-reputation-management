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
    quote:
      "Meridian Repute reshaped how the market sees our chairman — quietly, precisely, permanently.",
    name: "Chief Executive",
    role: "Global Holding Group",
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-2",
    quote:
      "The first firm to make our AI visibility measurable, then make it work in our favor.",
    name: "Chief Marketing Officer",
    role: "Regional Bank",
    accent: "forest" as const,
  },
  {
    id: "testimonial-3",
    quote: "Discreet, rigorous, and remarkably fast when it mattered most.",
    name: "Managing Partner",
    role: "Private Investment Firm",
    accent: "terracotta" as const,
  },
  {
    id: "testimonial-4",
    quote:
      "A rare blend of discretion and speed — they moved before the story could.",
    name: "Founder",
    role: "Fintech Scale-up",
    accent: "forest" as const,
  },
  {
    id: "testimonial-5",
    quote:
      "Our AI visibility score doubled within a quarter. The insight was worth it alone.",
    name: "Head of Communications",
    role: "Consumer Goods Group",
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
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Consultation", href: "#consultation" },
  { label: "Contact", href: "#contact" },
];

export const faqs = [
  {
    question: "What is an AI visibility assessment?",
    answer:
      "An AI visibility assessment measures how your brand or executives are described, ranked, and cited by AI assistants such as ChatGPT, Gemini, Claude, and Perplexity — then benchmarks that against traditional search visibility so you know where perception gaps exist.",
  },
  {
    question: "How is AI-era reputation management different from traditional PR?",
    answer:
      "Traditional PR targets journalists and search engines. AI-era reputation management also accounts for how large language models synthesize and repeat information about you, which sources they weight most, and how to shape that narrative through structured data, authoritative citations, and continuous monitoring.",
  },
  {
    question: "Do you work with individuals as well as organizations?",
    answer:
      "Yes. Meridian Repute advises both organizations (crisis readiness, brand trust) and executives individually (thought leadership, personal brand, AI visibility).",
  },
  {
    question: "Where is Meridian Repute based?",
    answer:
      "Meridian Repute has offices in Lahore, Pakistan and Houston, Texas, and works with clients globally.",
  },
];
