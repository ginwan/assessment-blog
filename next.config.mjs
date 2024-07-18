/** @type {import('next').NextConfig} */

import withPWA from "next-pwa"; // Import using require

const nextConfig = {
  reactStrictMode: true,
  pwa: withPWA({
    dest: "public", // Destination for generated PWA files
    register: true, // Enable automatic PWA registration
    skipWaiting: true, // Allow immediate control over service worker
    // ... other PWA options (refer to next-pwa documentation)
  }),
};

export default nextConfig;
