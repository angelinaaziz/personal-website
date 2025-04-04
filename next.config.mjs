/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  // Ensure trailing slashes for compatibility with your old site's URLs
  trailingSlash: true,
}

export default nextConfig 