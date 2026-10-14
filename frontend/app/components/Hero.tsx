"use client";

import { siteConfig } from "@/config/site";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Hero section"
      style={{
        minHeight: "100svh",
        background: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: "68px", // navbar offset
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          width: "100%",
          padding: "clamp(3rem, 8vw, 6rem) clamp(1.25rem, 4vw, 3.5rem)",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "3rem",
          alignItems: "center",
        }}
        className="lg:grid-cols-[1fr_420px]"
      >
        {/* Left — Copy */}
        <div>
          {/* Label */}
          <p
            className="anim-fade-up"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#FF6600",
              marginBottom: "1.75rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <span
              style={{
                display: "inline-block",
                width: 24,
                height: 2,
                background: "#FF6600",
              }}
            />
            Digital Studio · Kathmandu, Nepal
          </p>

          {/* Headline */}
          <h1
            className="anim-fade-up-2"
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem, 6.5vw, 5.5rem)",
              lineHeight: 1.0,
              color: "#404040",
              letterSpacing: "-0.02em",
              marginBottom: "2rem",
              maxWidth: "14ch",
            }}
          >
            Good ideas deserve a{" "}
            <span style={{ color: "#FF6600" }}>good website.</span>
          </h1>

          {/* Subtext */}
          <p
            className="anim-fade-up-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 400,
              color: "#5a5a5a",
              lineHeight: 1.7,
              maxWidth: "46ch",
              marginBottom: "3rem",
            }}
          >
            Nepora Lab builds custom websites and e-commerce platforms for
            Nepalese businesses that want to grow online — properly. No
            templates. No shortcuts.
          </p>

          {/* CTAs */}
          <div
            className="anim-fade-up-4"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-block",
                background: "#404040",
                color: "#FFFFFF",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                transition: "background 0.15s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#FF6600")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "#404040")
              }
            >
              Start a Project →
            </a>

            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#work")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                display: "inline-block",
                background: "transparent",
                color: "#404040",
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.9rem 2rem",
                textDecoration: "none",
                border: "1.5px solid #404040",
                transition: "border-color 0.15s ease, color 0.15s ease",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#FF6600";
                (e.currentTarget as HTMLElement).style.color = "#FF6600";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#404040";
                (e.currentTarget as HTMLElement).style.color = "#404040";
              }}
            >
              Explore Our Work
            </a>
          </div>

          {/* Social proof strip */}
          <div
            style={{
              marginTop: "3.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid #E2E2E0",
              display: "flex",
              gap: "2.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { num: "Nepal-based", label: "Studio" },
              { num: "Custom", label: "Every project" },
              { num: "Mobile-first", label: "Always" },
            ].map((item) => (
              <div key={item.label}>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#FF6600",
                    lineHeight: 1,
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.num}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#888888",
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Browser Mockup */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="hidden lg:flex"
        >
          <BrowserMockup />
        </div>
      </div>
    </section>
  );
}

function BrowserMockup() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        maxWidth: 420,
        background: "#FFFFFF",
        border: "1.5px solid #E2E2E0",
        boxShadow: "6px 6px 0 #E2E2E0",
        fontFamily: "Inter, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "#F5F5F3",
          padding: "0.75rem 1rem",
          borderBottom: "1.5px solid #E2E2E0",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E2E2E0", display: "block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#E2E2E0", display: "block" }} />
        <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#FF6600", display: "block" }} />
        <div
          style={{
            marginLeft: "0.5rem",
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid #E2E2E0",
            borderRadius: 3,
            padding: "0.3rem 0.7rem",
            fontSize: "0.7rem",
            color: "#888888",
            fontFamily: "Inter, sans-serif",
          }}
        >
          yourclient.com
        </div>
      </div>

      {/* Mockup content */}
      <div style={{ padding: "1.5rem" }}>
        {/* Fake navbar */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <div style={{ width: 70, height: 8, background: "#404040", borderRadius: 2 }} />
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 30, height: 6, background: "#E2E2E0", borderRadius: 2 }} />
            <div style={{ width: 30, height: 6, background: "#E2E2E0", borderRadius: 2 }} />
            <div style={{ width: 40, height: 18, background: "#FF6600", borderRadius: 2 }} />
          </div>
        </div>

        {/* Hero area */}
        <div style={{ background: "#F5F5F3", padding: "1.5rem", marginBottom: "1.25rem" }}>
          <div style={{ width: "80%", height: 14, background: "#404040", borderRadius: 2, marginBottom: 8 }} />
          <div style={{ width: "60%", height: 14, background: "#404040", borderRadius: 2, marginBottom: 8 }} />
          <div style={{ width: "90%", height: 8, background: "#E2E2E0", borderRadius: 2, marginBottom: 4 }} />
          <div style={{ width: "75%", height: 8, background: "#E2E2E0", borderRadius: 2, marginBottom: "1rem" }} />
          <div style={{ display: "flex", gap: 8 }}>
            <div style={{ width: 80, height: 28, background: "#404040", borderRadius: 2 }} />
            <div style={{ width: 80, height: 28, background: "transparent", border: "1.5px solid #404040", borderRadius: 2 }} />
          </div>
        </div>

        {/* Cards row */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: "1.25rem" }}>
          {["#FF6600", "#404040", "#F5F5F3"].map((bg, i) => (
            <div key={i} style={{ background: bg, height: 50, border: bg === "#F5F5F3" ? "1px solid #E2E2E0" : "none", display: "flex", alignItems: "flex-end", padding: "0.4rem" }}>
              <div style={{ width: "60%", height: 5, background: bg === "#F5F5F3" ? "#E2E2E0" : "rgba(255,255,255,0.4)", borderRadius: 2 }} />
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", gap: 6 }}>
          <div style={{ flex: 1, height: 6, background: "#E2E2E0", borderRadius: 2 }} />
          <div style={{ width: 40, height: 6, background: "#E2E2E0", borderRadius: 2 }} />
        </div>
      </div>
    </div>
  );
}
