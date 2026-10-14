import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nepora Lab — Website & Digital Studio, Nepal",
  description:
    "Nepora Lab builds custom websites, e-commerce platforms, and digital experiences for businesses in Nepal and beyond. Clean code, thoughtful design.",
  keywords: "website design Nepal, web development Kathmandu, e-commerce Nepal, digital studio Nepal",
  openGraph: {
    title: "Nepora Lab — IDEAS → DESIGN → DIGITAL",
    description:
      "Custom websites and digital experiences for businesses that deserve better online presence.",
    url: "https://neporalab.com",
    siteName: "Nepora Lab",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nepora Lab — Website & Digital Studio, Nepal",
    description: "Custom websites and digital experiences built in Nepal.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
