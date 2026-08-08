import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  async redirects() {
    return [
      { source: "/cipriani", destination: "/cipriani-residences", permanent: true },
      { source: "/elle", destination: "/elle-residences-miami", permanent: true },
      { source: "/domus", destination: "/domus-brickell", permanent: true },
    ];
  },
};

export default withNextIntl(nextConfig);
