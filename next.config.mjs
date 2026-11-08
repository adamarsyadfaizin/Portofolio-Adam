import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
      "date-fns",
      "chart.js",
      "react-chartjs-2",
      "@emotion/react",
      "@emotion/styled",
    ],
  },
  webpack: (config, { dev }) => {
    if (dev) {
      // Use in-memory cache to prevent OneDrive I/O disk throttling
      config.cache = {
        type: "memory",
      };
    }
    return config;
  },
};

export default withNextIntl(nextConfig);
