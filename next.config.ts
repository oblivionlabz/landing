import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Apex /grimoire → product subdomain. Permanent so Google consolidates
      // any inbound link equity onto the subdomain.
      {
        source: "/grimoire",
        destination: "https://grimoire.oblivionlabz.net/",
        permanent: true,
      },
      {
        source: "/grimoire/:path*",
        destination: "https://grimoire.oblivionlabz.net/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
