import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages (site is pure marketing — no server
  // features). The old /grimoire → subdomain redirects moved to
  // public/_redirects (Cloudflare Pages redirects file), since next.config
  // redirects() don't apply to `output: "export"`.
  output: "export",
};

export default nextConfig;
