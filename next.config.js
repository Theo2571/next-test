/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["cdn2.softswiss.net"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn2.softswiss.net",
        port: "",
        pathname: "/vi/**",
      },
    ],
  },
};

module.exports = nextConfig;
