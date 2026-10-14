"use client";

const benefits = [
  {
    title: "Custom design, every time",
    description:
      "We don't use off-the-shelf templates. Every website is built from your brand up — typography, layout, colors, and interactions, all specific to you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Mobile-first, always",
    description:
      "Most of your visitors are on phones. We build for mobile first and work outward — so your site looks intentional everywhere, not just on desktop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
  },
  {
    title: "Straightforward communication",
    description:
      "No project management jargon, no disappearing between updates. We give you a clear plan, share progress regularly, and reply to messages like actual humans.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
  {
    title: "Built to your needs",
    description:
      "We scope each project to fit your goals and budget — not a package list. Whether you need a five-page site or a full e-commerce platform, we plan accordingly.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M19.07 4.93a10 10 0 010 14.14M4.93 4.93a10 10 0 000 14.14" />
      </svg>
    ),
  },
  {
    title: "SEO and performance included",
    description:
      "Fast pages, clean code, proper meta tags, and structured data come standard. A beautiful site that no one finds is just art — we make yours discoverable.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /><path d="M11 8v6M8 11h6" />
      </svg>
    ),
  },
  {
    title: "Nepal-based, globally minded",
    description:
      "We understand local business needs, pricing expectations, and the market. At the same time, we apply global design and engineering standards. Best of both.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
      </svg>
    ),
  },
];

export default function WhyNepora() {
  return (
    <section
      id="why"
      aria-label="Why choose Nepora Lab"
      style={{
        background: "#FFFFFF",
        borderTop: "1px solid #E2E2E0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3.5rem)",
        }}
      >
        {/* Two-column header */}
        <div
          style={{
            display: "grid",
            gap: "2rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
            alignItems: "end",
          }}
          className="lg:grid-cols-2"
        >
          <div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FF6600",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.75rem",
              }}
            >
              <span style={{ display: "inline-block", width: 20, height: 2, background: "#FF6600" }} />
              Why Nepora Lab
            </p>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                color: "#404040",
              }}
            >
              Practical reasons to work with us.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.05rem",
              color: "#5a5a5a",
              lineHeight: 1.7,
              maxWidth: "48ch",
            }}
          >
            We don't do fluff. Here's what you actually get when you work with
            Nepora Lab — in plain language.
          </p>
        </div>

        {/* Benefits grid */}
        <div
          style={{
            display: "grid",
            gap: 0,
          }}
          className="md:grid-cols-2 lg:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              style={{
                borderTop: "1px solid #E2E2E0",
                borderLeft: index % 3 !== 0 ? "1px solid #E2E2E0" : "none",
                padding: "2rem clamp(1rem, 2.5vw, 1.75rem)",
                transition: "background 0.15s ease",
                cursor: "default",
              }}
              className="benefit-cell"
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#F5F5F3")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FFFFFF")
              }
            >
              <div style={{ marginBottom: "1rem" }}>{benefit.icon}</div>
              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "#404040",
                  marginBottom: "0.6rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {benefit.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "#5a5a5a",
                  lineHeight: 1.7,
                }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
          {/* Close the bottom border */}
          <div
            style={{ gridColumn: "1 / -1", borderTop: "1px solid #E2E2E0" }}
          />
        </div>
      </div>
    </section>
  );
}
