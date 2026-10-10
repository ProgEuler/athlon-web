import {
  CalendarCheck,
  CreditCard,
  MessageCircle,
  Swords,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";

export const siteConfig = {
  name: "AthlonGo",
  tagline: "Book venues. Find players. Play more.",
  description:
    "AthlonGo is the easiest way to book sports venues, join matches near you and build your community, all in one app.",
  appStoreUrl: "#",
  playStoreUrl: "#",
  contactEmail: "support@example.com",
  icon: "/brand/icon.png",
  logo: "/brand/logo.webp",
};

export const navLinks = [
  { label: "Features", href: "/#features" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

/** Replace these with real screenshots (portrait, ~1170x2532). */
export const screenshots = [
  "/screenshots/screen-1.svg",
  "/screenshots/screen-2.svg",
  "/screenshots/screen-3.svg",
  "/screenshots/screen-4.svg",
  "/screenshots/screen-5.svg",
];

export const spotlight = {
  title: "Your Game,\nBooked in Seconds",
  description:
    "Pick a venue, choose a time and pay securely. Then invite players and kick off.",
  image: "/screenshots/screen-3.svg",
};

export const highlights = [
  {
    image: "/screenshots/screen-1.svg",
    text: "Browse venues near you with live availability and clear pricing.",
  },
  {
    image: "/screenshots/screen-2.svg",
    text: "Join open matches or create your own and fill the squad fast.",
  },
  {
    image: "/screenshots/screen-4.svg",
    text: "Chat, vote in polls and organise the whole team in one place.",
  },
];

export type Feature = { icon: LucideIcon; title: string; description: string };

export const features: Feature[] = [
  {
    icon: CalendarCheck,
    title: "Easy Venue Booking",
    description:
      "Find pitches and courts, check live slots and book in a few taps.",
  },
  {
    icon: Swords,
    title: "Match Making",
    description:
      "Join open games or create your own and get matched with players at your level.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Follow players, share posts and join communities around the sports you love.",
  },
  {
    icon: MessageCircle,
    title: "Group Chat & Polls",
    description:
      "Match room chat and polls make planning the squad effortless.",
  },
  {
    icon: CreditCard,
    title: "Secure Payments",
    description:
      "Pay for bookings safely, split costs and track pending payments.",
  },
  {
    icon: Trophy,
    title: "Ranks & Rewards",
    description:
      "Earn tiers and badges as you play, from Bronze all the way to Diamond.",
  },
];

export type Testimonial = {
  name: string;
  handle: string;
  text: string;
  avatar: string;
};

const quotes = [
  "Booking a pitch used to take a dozen messages. Now it takes thirty seconds.",
  "I found a five-a-side game ten minutes from my house on my first night.",
  "The match room chat and polls keep our whole squad organised.",
  "Love the ranks and badges. It makes every game feel like it counts.",
  "Paying and splitting the cost is finally painless.",
  "Best way to meet new players in the city. Highly recommend.",
];

const names = [
  "Alex Johnson",
  "Maria Gomez",
  "Ben Carter",
  "Priya Patel",
  "Chloe Martin",
  "Daniel Kim",
  "Sofia Rossi",
  "Liam Wilson",
  "Nora Ahmed",
  "Jack Brown",
  "Emma Davis",
  "Omar Hassan",
];

export const testimonials: Testimonial[] = names.map((name, i) => ({
  name,
  handle: `@${name.toLowerCase().replace(" ", "")}`,
  text: quotes[i % quotes.length],
  avatar: `/avatars/avatar-${i + 1}.svg`,
}));

export const faqs = [
  {
    q: "How do I book a venue?",
    a: "Browse venues, pick a date and time, review the summary and pay securely in the app. You get an instant confirmation.",
  },
  {
    q: "Can I join games without a team?",
    a: "Yes. Join an open match or create one and AthlonGo will help you fill the remaining spots.",
  },
  {
    q: "Which sports are supported?",
    a: "Football, padel, basketball, tennis and more. New sports and venues are added all the time.",
  },
  {
    q: "How do payments work?",
    a: "Pay for bookings in the app. You can track pending payments and view full payment details at any time.",
  },
  {
    q: "Is my data private?",
    a: "Your data is encrypted and never sold. You can export or delete it at any time.",
  },
];

export const cta = {
  title: "Stop searching for a pitch.",
  description: "Download AthlonGo today and get your next game booked.",
};

export const footerLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "#" },
  { label: "Contact", href: "#" },
];
