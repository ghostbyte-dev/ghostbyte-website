import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/js/script.hash.outbound-links.js",
        destination:
          "https://plausible.ghostbyte.dev/js/script.hash.outbound-links.js",
      },
      {
        source: "/api/event",
        destination: "https://plausible.ghostbyte.dev/api/event",
      },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
