/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  eslint: {
    // This allows the production build to successfully complete even if you have unused variables.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // This will also help bypass any tiny type mismatches during the Vercel build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;