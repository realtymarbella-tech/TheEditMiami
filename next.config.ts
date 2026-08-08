import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/cipriani", destination: "/cipriani-residences", permanent: true },
      { source: "/elle", destination: "/elle-residences-miami", permanent: true },
      { source: "/domus", destination: "/domus-brickell", permanent: true },
    ];
  },
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  /* config options here */
};

export default nextConfig;
