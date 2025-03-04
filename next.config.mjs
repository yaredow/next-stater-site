/** @type {import('next').NextConfig} */

import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: "lh3.googleusercontent.com" },
      { hostname: "platform-lookaside.fbsbx.com" },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default withMDX(nextConfig);
