import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import { withPlausibleProxy } from "next-plausible";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(withPlausibleProxy({
  customDomain: "https://plausible.ghostbyte.dev",
  scriptName: "script.hash.outbound-links",
})(nextConfig));
