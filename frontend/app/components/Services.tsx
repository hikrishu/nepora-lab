const services = [
  {
    number: "01",
    title: "Website Development",
    description:
      "Custom-built websites that actually load fast, look great on every device, and reflect your brand — not a template from 2015. From landing pages to multi-page business sites.",
    deliverables: ["Custom design", "Mobile responsive", "SEO ready", "CMS integration"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "E-commerce Websites",
    description:
      "Online stores built to sell. We handle product catalogues, payment gateways, shipping logic, and the UX details that turn visitors into buyers.",
    deliverables: ["Product management", "Payment integration", "Inventory system", "Order tracking"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <path d="M16 10a4 4 0 01-8 0" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI & Digital Experiences",
    description:
      "Interactive tools, smart forms, and digital products that go beyond a static page. We help businesses add AI-assisted features and custom digital experiences that fit their workflow.",
    deliverables: ["AI integrations", "Custom dashboards", "Automation tools", "API development"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF6600" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 014 4v4a4 4 0 01-8 0V6a4 4 0 014-4z" />
        <path d="M9 14a6 6 0 000 8h6a6 6 0 000-8" />
        <circle cx="12" cy="11" r="1" fill="#FF6600" stroke="none" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
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
        {/* Section header */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
            marginBottom: "clamp(3rem, 6vw, 5rem)",
          }}
        >
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
            }}
          >
            <span style={{ display: "inline-block", width: 20, height: 2, background: "#FF6600" }} />
            What We Build
          </p>
          <h2
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "#404040",
              maxWidth: "20ch",
            }}
          >
            Three services, one honest studio.
          </h2>
        </div>

        {/* Services List */}
        <div>
          {services.map((service, index) => (
            <div
              key={service.number}
              style={{
                borderTop: "1px solid #E2E2E0",
                padding: "clamp(2rem, 4vw, 3rem) 0",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "clamp(1.5rem, 4vw, 4rem)",
                  alignItems: "start",
                }}
                className="md:grid-cols-[100px_1fr]"
              >
                {/* Number + Icon */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <span
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      color: "#FF6600",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {service.number}
                  </span>
                  {service.icon}
                </div>

                {/* Content */}
                <div
                  style={{
                    display: "grid",
                    gap: "clamp(1.5rem, 3vw, 2.5rem)",
                  }}
                  className="lg:grid-cols-[1fr_260px]"
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                        color: "#404040",
                        marginBottom: "0.75rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "1rem",
                        color: "#5a5a5a",
                        lineHeight: 1.7,
                        maxWidth: "52ch",
                      }}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      alignContent: "start",
                    }}
                  >
                    {service.deliverables.map((d) => (
                      <span
                        key={d}
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "#404040",
                          border: "1px solid #E2E2E0",
                          padding: "0.35rem 0.75rem",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: "1px solid #E2E2E0" }} />
        </div>
      </div>
    </section>
  );
}
