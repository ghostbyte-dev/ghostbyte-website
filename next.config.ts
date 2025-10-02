import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const { withPlausibleProxy } = require('next-plausible');

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withPlausibleProxy(withNextIntl(nextConfig));
