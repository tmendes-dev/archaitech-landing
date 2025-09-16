/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true },
  images: { unoptimized: true } // to simplify local static export if needed
};
export default nextConfig;
