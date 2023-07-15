/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "jobs.github.com",
        port: "",
        pathname: "/rails/active_storage/**"
      }
    ]
  }
};

module.exports = nextConfig;
