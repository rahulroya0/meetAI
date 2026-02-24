import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // This allows the production build to successfully complete even if you have unused variables.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
