"use client";

import { useState, useRef } from "react";
import { siteConfig } from "@/config/site";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  projectType?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your name (at least 2 characters).";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.projectType)
    errors.projectType = "Please select a project type.";
  if (!data.message.trim() || data.message.trim().length < 20)
    errors.message = "Please describe your project (at least 20 characters).";
  return errors;
}

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [formState, setFormState] = useState<FormState>("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate(form);
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      const firstError = formRef.current?.querySelector(
        "[aria-invalid='true']"
      ) as HTMLElement;
      firstError?.focus();
      return;
    }

    setFormState("submitting");

    // ── Submission hook ──────────────────────────────────────
    // Replace this block with a real email service (e.g. Resend, Formspree)
    // when ready. This is frontend-only UI for now.
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
    // ─────────────────────────────────────────────────────────
  };

  const inputStyle = (hasError: boolean): React.CSSProperties => ({
    width: "100%",
    fontFamily: "Inter, sans-serif",
    fontSize: "0.95rem",
    color: "#404040",
    background: "#FFFFFF",
    border: `1.5px solid ${hasError ? "#CC0000" : "#E2E2E0"}`,
    padding: "0.85rem 1rem",
    outline: "none",
    transition: "border-color 0.15s ease",
    display: "block",
  });

  return (
    <section
      id="contact"
      aria-label="Contact Nepora Lab"
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
        <div
          style={{
            display: "grid",
            gap: "clamp(2.5rem, 6vw, 5rem)",
            alignItems: "start",
          }}
          className="lg:grid-cols-[1fr_520px]"
        >
          {/* Left — Headline */}
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
              Get in Touch
            </p>
            <h2
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: "#404040",
                lineHeight: 1.05,
                marginBottom: "1.75rem",
                maxWidth: "16ch",
              }}
            >
              Let's build something worth visiting.
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "#5a5a5a",
                lineHeight: 1.7,
                maxWidth: "44ch",
                marginBottom: "2.5rem",
              }}
            >
              Tell us about your project. We'll reply within one business day
              with honest thoughts and a clear next step.
            </p>

            {/* Direct contact options */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#404040",
                  textDecoration: "none",
                  borderBottom: "1.5px solid #E2E2E0",
                  paddingBottom: "1rem",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FF6600")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#404040")
                }
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .93h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                WhatsApp: {siteConfig.contact.whatsappNumber}
              </a>
              <a
                href={`mailto:${siteConfig.contact.email}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  fontFamily: "Space Grotesk, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#404040",
                  textDecoration: "none",
                  transition: "color 0.15s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#FF6600")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "#404040")
                }
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                {siteConfig.contact.email}
              </a>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            {formState === "success" ? (
              <div
                role="alert"
                style={{
                  background: "#FFFFFF",
                  border: "1.5px solid #E2E2E0",
                  padding: "3rem 2rem",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    background: "#FF6600",
                    margin: "0 auto 1.5rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "1.35rem",
                    color: "#404040",
                    marginBottom: "0.5rem",
                  }}
                >
                  Message received!
                </h3>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.95rem",
                    color: "#5a5a5a",
                    marginBottom: "1.5rem",
                  }}
                >
                  We'll get back to you within one business day.
                </p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#888888" }}>
                  Note: This form is currently in demo mode. To enable real email delivery,{" "}
                  configure a submission service in the Contact component.
                </p>
              </div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                noValidate
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                aria-label="Project inquiry form"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#404040",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Your name *
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "err-name" : undefined}
                    placeholder="Aarav Sharma"
                    style={inputStyle(!!errors.name)}
                    onFocus={(e) => (e.target.style.borderColor = "#404040")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.name ? "#CC0000" : "#E2E2E0")
                    }
                  />
                  {errors.name && (
                    <p id="err-name" role="alert" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#CC0000", marginTop: "0.3rem" }}>
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    style={{
                      display: "block",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#404040",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Email address *
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "err-email" : undefined}
                    placeholder="aarav@business.com"
                    style={inputStyle(!!errors.email)}
                    onFocus={(e) => (e.target.style.borderColor = "#404040")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.email ? "#CC0000" : "#E2E2E0")
                    }
                  />
                  {errors.email && (
                    <p id="err-email" role="alert" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#CC0000", marginTop: "0.3rem" }}>
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Project type */}
                <div>
                  <label
                    htmlFor="contact-project"
                    style={{
                      display: "block",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#404040",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Project type *
                  </label>
                  <select
                    id="contact-project"
                    name="projectType"
                    value={form.projectType}
                    onChange={handleChange}
                    aria-invalid={!!errors.projectType}
                    aria-describedby={errors.projectType ? "err-project" : undefined}
                    style={{ ...inputStyle(!!errors.projectType), cursor: "pointer" }}
                    onFocus={(e) => (e.target.style.borderColor = "#404040")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.projectType ? "#CC0000" : "#E2E2E0")
                    }
                  >
                    <option value="">Select a project type…</option>
                    <option value="website">Business Website</option>
                    <option value="ecommerce">E-commerce Store</option>
                    <option value="digital">Digital Experience / App</option>
                    <option value="redesign">Website Redesign</option>
                    <option value="other">Something else</option>
                  </select>
                  {errors.projectType && (
                    <p id="err-project" role="alert" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#CC0000", marginTop: "0.3rem" }}>
                      {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.8rem",
                      color: "#404040",
                      marginBottom: "0.4rem",
                      letterSpacing: "0.03em",
                    }}
                  >
                    Tell us about your project *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "err-message" : undefined}
                    placeholder="What do you need, roughly when do you need it, and any other context that helps…"
                    style={{ ...inputStyle(!!errors.message), resize: "vertical", minHeight: 120 }}
                    onFocus={(e) => (e.target.style.borderColor = "#404040")}
                    onBlur={(e) =>
                      (e.target.style.borderColor = errors.message ? "#CC0000" : "#E2E2E0")
                    }
                  />
                  {errors.message && (
                    <p id="err-message" role="alert" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "#CC0000", marginTop: "0.3rem" }}>
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  style={{
                    background: formState === "submitting" ? "#888888" : "#FF6600",
                    color: "#FFFFFF",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    padding: "1rem 2rem",
                    border: "none",
                    cursor: formState === "submitting" ? "not-allowed" : "pointer",
                    transition: "background 0.15s ease",
                    letterSpacing: "0.02em",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (formState !== "submitting")
                      (e.currentTarget as HTMLElement).style.background = "#E05500";
                  }}
                  onMouseLeave={(e) => {
                    if (formState !== "submitting")
                      (e.currentTarget as HTMLElement).style.background = "#FF6600";
                  }}
                  aria-label={formState === "submitting" ? "Sending message…" : "Send your project inquiry"}
                >
                  {formState === "submitting" ? "Sending…" : "Send message →"}
                </button>

                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.75rem",
                    color: "#888888",
                    textAlign: "center",
                    lineHeight: 1.5,
                  }}
                >
                  We reply within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
