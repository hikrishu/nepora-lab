// ── Nepora Lab ─ Site Configuration ────────────────────────
// Edit this single file to update all contact details,
// social links, nav items, and chatbot responses.

export const siteConfig = {
  name: "Nepora Lab",
  tagline: "IDEAS → DESIGN → DIGITAL",
  description:
    "A creative digital studio in Nepal. We build websites, e-commerce platforms, and digital experiences for businesses that deserve a proper online presence.",
  url: "https://neporalab.com",

  // ── Contact ─────────────────────────────────────────────
  contact: {
    email: "hello@neporalab.com",           // ← replace with real email
    whatsappNumber: "+977-9800000000",       // ← replace with real number
    whatsappUrl: "https://wa.me/9779800000000", // ← replace with real number
    location: "Kathmandu, Nepal",
  },

  // ── Social ──────────────────────────────────────────────
  social: {
    instagram: "https://instagram.com/neporalab",
    facebook:  "https://facebook.com/neporalab",
    linkedin:  "https://linkedin.com/company/neporalab",
  },

  // ── Navigation ──────────────────────────────────────────
  nav: [
    { label: "Services", href: "#services" },
    { label: "Work",     href: "#work"     },
    { label: "Process",  href: "#process"  },
    { label: "Contact",  href: "#contact"  },
  ],

  // ── Chatbot (Lab Buddy) ──────────────────────────────────
  // All responses live here — safe to edit without touching component logic.
  chatbot: {
    botName: "Lab Buddy",
    greeting:
      "Hey! 👋 I'm Lab Buddy. Ask me anything about Nepora Lab, or pick a quick topic below.",
    disclaimer:
      "I'm a scripted assistant, not real AI. For complex queries, reach us directly.",
    quickReplies: [
      "What do you build?",
      "How much does it cost?",
      "How long does it take?",
      "How do I get started?",
      "Where are you based?",
    ],
    responses: {
      "What do you build?":
        "We build custom websites, e-commerce stores, and digital experiences — from clean business sites to full online shops. No templates, everything is designed for your brand. 🎨",
      "How much does it cost?":
        "Business websites typically start from NPR 40,000. E-commerce and custom builds are scoped individually. We'll give you a clear estimate after a free discovery call. 💬",
      "How long does it take?":
        "Standard websites: 3–5 weeks. E-commerce: 6–10 weeks. Larger projects are scoped up front so you always know the timeline. ⚡",
      "How do I get started?":
        "Fill the contact form on this page or reach us directly:\n📧 hello@neporalab.com\n📱 WhatsApp: +977-9800000000\n\nWe'll respond within 24 hours.",
      "Where are you based?":
        "We're based in Kathmandu, Nepal, but we work with clients anywhere. Remote-first, timezone-flexible. 🇳🇵",
    },
    fallback:
      "Great question — I'm a scripted assistant, so for that one you'll want to reach us directly at hello@neporalab.com. We reply fast! 🙌",
  },
};
