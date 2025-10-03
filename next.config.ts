import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const { withPlausibleProxy } = require('next-plausible');

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
