import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow unoptimized local images during development
    unoptimized: process.env.NODE_ENV === "development",
  },
};

export default nextConfig;
