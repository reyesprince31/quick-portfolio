/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**", // Allows all paths on this domain
      },
    ],
    domains: ["images.unsplash.com"], // {{ edit_1 }}
  },
};

export default nextConfig;
