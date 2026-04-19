import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/methology",
        destination: "/methodology",
        permanent: true,
      },
      {
        source: "/methology/:path*",
        destination: "/methodology/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
