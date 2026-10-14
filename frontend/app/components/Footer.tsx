"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "#404040",
        borderTop: "3px solid #FF6600",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 3.5rem) 2rem",
        }}
      >
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="md:grid-cols-[1fr_auto_auto]"
        >
          {/* Brand */}
          <div style={{ maxWidth: 340 }}>
            <a href="/" aria-label="Nepora Lab homepage" style={{ display: "inline-block", marginBottom: "1.25rem" }}>
              <Image
                src="/logo.jpeg"
                alt="Nepora Lab"
                width={150}
                height={44}
                style={{ height: 38, width: "auto", objectFit: "contain" }}
              />
            </a>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              A creative digital studio in Kathmandu building custom websites
              and e-commerce platforms for businesses across Nepal and beyond.
            </p>
            {/* Social Links */}
            <div style={{ display: "flex", gap: "0.75rem" }}>
              {[
                {
                  href: siteConfig.social.instagram,
                  label: "Instagram",
                  svg: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  ),
                },
                {
                  href: siteConfig.social.facebook,
                  label: "Facebook",
                  svg: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  ),
                },
                {
                  href: siteConfig.social.linkedin,
                  label: "LinkedIn",
                  svg: (
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    border: "1.5px solid rgba(255,255,255,0.2)",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "border-color 0.15s ease, color 0.15s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#FF6600";
                    (e.currentTarget as HTMLElement).style.borderColor = "#FF6600";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                  }}
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FF6600",
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {siteConfig.nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                      }}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.55)",
                        textDecoration: "none",
                        transition: "color 0.15s ease",
                      }}
                      onMouseEnter={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                      }
                      onMouseLeave={(e) =>
                        ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                      }
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 600,
                fontSize: "0.72rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#FF6600",
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                }
              >
                {siteConfig.contact.email}
              </a>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.55)",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FFFFFF")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)")
                }
              >
                {siteConfig.contact.whatsappNumber}
              </a>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.35)",
                  marginTop: "0.25rem",
                }}
              >
                {siteConfig.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            © {year} Nepora Lab. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
            }}
          >
            Made in Nepal
            {" "}
            <span style={{ color: "#FF6600" }}>●</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
