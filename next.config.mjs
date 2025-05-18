/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static exports for better compatibility
  output: 'export',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  // Ignore TypeScript and ESLint errors during build
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
