"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      role="banner"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "#FFFFFF",
        borderBottom: scrolled ? "1px solid #E2E2E0" : "1px solid transparent",
        transition: "border-color 0.2s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 3.5rem)",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
        }}
      >
        {/* Logo */}
        <a
          href="/"
          aria-label="Nepora Lab — home"
          style={{ display: "flex", alignItems: "center", flexShrink: 0 }}
        >
          <Image
            src="/logo.jpeg"
            alt="Nepora Lab"
            width={160}
            height={48}
            priority
            style={{ height: 42, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}
          className="hidden md:flex"
        >
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "#404040",
                padding: "0.25rem 0",
                position: "relative",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#404040")}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            style={{
              background: "#FF6600",
              color: "#FFFFFF",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "0.875rem",
              fontWeight: 600,
              padding: "0.6rem 1.4rem",
              border: "none",
              cursor: "pointer",
              letterSpacing: "0.01em",
              transition: "background 0.15s ease",
              textDecoration: "none",
              display: "inline-block",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#E05500")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#FF6600")
            }
            aria-label="Let's Talk — contact Nepora Lab"
          >
            Let's Talk
          </a>

          {/* Mobile Hamburger */}
          <button
            className="flex md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#404040",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#404040",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 2,
                background: "#404040",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          style={{
            background: "#FFFFFF",
            borderTop: "1px solid #E2E2E0",
            padding: "1.5rem clamp(1.25rem, 4vw, 3.5rem)",
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
          }}
        >
          {siteConfig.nav.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "#404040",
                padding: "0.75rem 0",
                textAlign: "left",
                width: "100%",
                borderBottom: "1px solid #E2E2E0",
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6600")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#404040")}
            >
              {item.label}
            </button>
          ))}
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              background: "#FF6600",
              color: "#FFFFFF",
              fontFamily: "Space Grotesk, sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "0.8rem 1.5rem",
              textDecoration: "none",
              textAlign: "center",
            }}
          >
            WhatsApp Us
          </a>
        </nav>
      )}
    </header>
  );
}
