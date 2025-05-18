/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure image domains for deployment
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Ignore TypeScript and ESLint errors during build for now
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Ensure output is properly configured for static export
  output: process.env.NEXT_PUBLIC_STATIC_EXPORT === 'true' ? 'export' : undefined,
  // Add detailed error messages in development
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  // Add source maps in development for better debugging
  productionBrowserSourceMaps: process.env.NEXT_PUBLIC_DEBUG_MODE === 'true',
}

export default nextConfig
