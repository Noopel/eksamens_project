import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{
      hostname: "localhost",
      port: "4444",
      protocol: "http"
    }]
  }
};

export default nextConfig;
