"use client";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a conversation — understanding your business, goals, audience, and competitors. No assumptions, just questions. This shapes everything that follows.",
    detail: "~1 week",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We translate your brief into a visual direction: layouts, typography, components. You review, we refine. No surprises at the build stage.",
    detail: "~1–2 weeks",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean code, fast load times, mobile-first from day one. We build in sprints and share progress often so you're never left wondering what's happening.",
    detail: "~2–4 weeks",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle deployment, cross-browser testing, and SEO basics. After launch, we stick around for questions and minor fixes. You're not on your own.",
    detail: "~3–5 days",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      aria-label="Our process"
      style={{
        background: "#404040",
        borderTop: "1px solid #333333",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(4rem, 8vw, 7rem) clamp(1.25rem, 4vw, 3.5rem)",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "clamp(3rem, 6vw, 5rem)" }}>
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
            How We Work
          </p>
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              maxWidth: "22ch",
            }}
          >
            From first call to final launch.
          </h2>
        </div>

        {/* Steps grid */}
        <div
          style={{
            display: "grid",
            gap: 0,
          }}
          className="md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <div
              key={step.number}
              style={{
                borderTop: "1px solid rgba(255,255,255,0.12)",
                borderLeft: index > 0 ? "1px solid rgba(255,255,255,0.12)" : "none",
                padding: "2.5rem clamp(1.25rem, 3vw, 2rem)",
                position: "relative",
              }}
              className={index > 0 ? "md:border-l" : ""}
            >
              {/* Number */}
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "2.5rem",
                  color: "rgba(255,255,255,0.1)",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                {step.number}
              </p>

              {/* Orange tick */}
              <div
                style={{
                  width: 28,
                  height: 3,
                  background: "#FF6600",
                  marginBottom: "1.25rem",
                }}
              />

              <h3
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 700,
                  fontSize: "1.35rem",
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.65)",
                  lineHeight: 1.7,
                  marginBottom: "1.5rem",
                }}
              >
                {step.description}
              </p>
              <p
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  color: "#FF6600",
                  letterSpacing: "0.08em",
                }}
              >
                {step.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA row */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "2.5rem",
            marginTop: "0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.55)",
              maxWidth: "50ch",
            }}
          >
            Total project length varies by scope. We always share a clear timeline before work begins.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-block",
              background: "#FF6600",
              color: "#FFFFFF",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: "0.875rem",
              padding: "0.8rem 1.75rem",
              textDecoration: "none",
              transition: "background 0.15s ease",
              letterSpacing: "0.01em",
              flexShrink: 0,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#E05500")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF6600")
            }
          >
            Start the process →
          </a>
        </div>
      </div>
    </section>
  );
}
