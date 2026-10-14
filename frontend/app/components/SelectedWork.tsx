// Selected Work — uses clean HTML/CSS browser mockups.
// No stock images, no fabricated client logos.
// Projects are labeled as concepts and easy to update.

const projects = [
  {
    label: "Concept Project",
    number: "01",
    title: "Mountain Roast",
    category: "E-commerce · Coffee Brand",
    description:
      "An online storefront for a specialty coffee roaster. Clean product pages, streamlined checkout, and a brand identity that matches the product quality.",
    accentColor: "#FF6600",
    mockupBg: "#F5F5F3",
    tags: ["E-commerce", "Brand Design", "Next.js"],
  },
  {
    label: "Concept Project",
    number: "02",
    title: "ThakaliKitchen",
    category: "Restaurant · Online Ordering",
    description:
      "A restaurant website with an integrated reservation system and digital menu. Built for a Kathmandu eatery expanding its presence online.",
    accentColor: "#404040",
    mockupBg: "#404040",
    tags: ["Website", "Booking System", "Mobile-first"],
  },
  {
    label: "Concept Project",
    number: "03",
    title: "NepStudy Hub",
    category: "EdTech · Course Platform",
    description:
      "A lightweight learning platform for a Nepalese tutoring service. Custom student dashboards, course management, and payment integration.",
    accentColor: "#FF6600",
    mockupBg: "#F5F5F3",
    tags: ["Web App", "Dashboard", "React"],
  },
];

function ProjectMockup({
  accentColor,
  mockupBg,
  index,
}: {
  accentColor: string;
  mockupBg: string;
  index: number;
}) {
  const isDark = mockupBg === "#404040";

  return (
    <div
      aria-hidden="true"
      style={{
        width: "100%",
        background: "#FFFFFF",
        border: "1.5px solid #E2E2E0",
        boxShadow: "5px 5px 0 #E2E2E0",
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          background: "#F5F5F3",
          padding: "0.6rem 0.875rem",
          borderBottom: "1.5px solid #E2E2E0",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E2E0", display: "block" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#E2E2E0", display: "block" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: accentColor, display: "block" }} />
        <div
          style={{
            marginLeft: 6,
            flex: 1,
            background: "#FFFFFF",
            border: "1px solid #E2E2E0",
            borderRadius: 2,
            padding: "0.2rem 0.6rem",
            fontSize: "0.65rem",
            color: "#888888",
          }}
        >
          {index === 0 ? "mountainroast.com" : index === 1 ? "thalalikitchen.com.np" : "nepstudy.com"}
        </div>
      </div>

      {/* Page content */}
      <div style={{ background: mockupBg, minHeight: 180, padding: "1.25rem" }}>
        {/* Nav strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1.25rem",
          }}
        >
          <div style={{ width: 60, height: 7, background: isDark ? "rgba(255,255,255,0.3)" : "#E2E2E0", borderRadius: 2 }} />
          <div style={{ display: "flex", gap: 6 }}>
            <div style={{ width: 25, height: 5, background: isDark ? "rgba(255,255,255,0.2)" : "#E2E2E0", borderRadius: 2 }} />
            <div style={{ width: 25, height: 5, background: isDark ? "rgba(255,255,255,0.2)" : "#E2E2E0", borderRadius: 2 }} />
            <div style={{ width: 36, height: 18, background: accentColor, borderRadius: 2 }} />
          </div>
        </div>

        {/* Hero area */}
        <div style={{ marginBottom: "1rem" }}>
          <div style={{ width: "70%", height: 12, background: isDark ? "rgba(255,255,255,0.8)" : "#404040", borderRadius: 2, marginBottom: 6 }} />
          <div style={{ width: "50%", height: 12, background: isDark ? "rgba(255,255,255,0.8)" : "#404040", borderRadius: 2, marginBottom: 8 }} />
          <div style={{ width: "85%", height: 6, background: isDark ? "rgba(255,255,255,0.3)" : "#C8C8C6", borderRadius: 2, marginBottom: 4 }} />
          <div style={{ width: "65%", height: 6, background: isDark ? "rgba(255,255,255,0.3)" : "#C8C8C6", borderRadius: 2, marginBottom: "1rem" }} />
          <div style={{ width: 70, height: 24, background: accentColor, borderRadius: 2 }} />
        </div>

        {/* Grid of product blocks */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
          {[1, 2].map((i) => (
            <div
              key={i}
              style={{
                background: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
                border: isDark ? "1px solid rgba(255,255,255,0.1)" : "1px solid rgba(0,0,0,0.06)",
                padding: "0.6rem",
              }}
            >
              <div style={{ width: "100%", height: 30, background: isDark ? "rgba(255,255,255,0.15)" : accentColor + "22", marginBottom: 5 }} />
              <div style={{ width: "70%", height: 5, background: isDark ? "rgba(255,255,255,0.3)" : "#C8C8C6", borderRadius: 2 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section
      id="work"
      aria-label="Selected work"
      style={{
        background: "#F5F5F3",
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
        {/* Section header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
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
              Selected Work
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
              Projects we're proud of.
            </h2>
          </div>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "#888888",
              border: "1px solid #E2E2E0",
              padding: "0.4rem 0.9rem",
              alignSelf: "flex-end",
              background: "#FFFFFF",
            }}
          >
            ✦ Shown as concepts — replace with your own work
          </p>
        </div>

        {/* Project list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(3rem, 6vw, 5rem)" }}>
          {projects.map((project, index) => (
            <article
              key={project.number}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: "clamp(1.5rem, 4vw, 3rem)",
                alignItems: "start",
                borderTop: "1px solid #E2E2E0",
                paddingTop: "clamp(2rem, 4vw, 3rem)",
              }}
              className={index % 2 === 0 ? "lg:grid-cols-[1fr_420px]" : "lg:grid-cols-[420px_1fr]"}
            >
              {/* Text block — reorders on alternate rows */}
              <div style={{ order: index % 2 === 0 ? 0 : 1 }} className={index % 2 !== 0 ? "lg:order-2" : ""}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: "1.25rem",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.75rem",
                      letterSpacing: "0.1em",
                      color: "#FF6600",
                    }}
                  >
                    {project.number}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "0.72rem",
                      fontWeight: 500,
                      color: "#888888",
                      border: "1px solid #E2E2E0",
                      padding: "0.2rem 0.6rem",
                      background: "#FFFFFF",
                    }}
                  >
                    {project.label}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    color: "#404040",
                    letterSpacing: "-0.015em",
                    marginBottom: "0.4rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "#FF6600",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: "1.25rem",
                  }}
                >
                  {project.category}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "1rem",
                    color: "#5a5a5a",
                    lineHeight: 1.7,
                    maxWidth: "48ch",
                    marginBottom: "1.5rem",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                        color: "#404040",
                        border: "1px solid #E2E2E0",
                        padding: "0.3rem 0.65rem",
                        background: "#FFFFFF",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mockup */}
              <div
                style={{ order: index % 2 === 0 ? 1 : 0 }}
                className={index % 2 !== 0 ? "lg:order-1" : ""}
              >
                <ProjectMockup
                  accentColor={project.accentColor}
                  mockupBg={project.mockupBg}
                  index={index}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
