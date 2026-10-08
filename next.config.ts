import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export (→ /out) so the site can be uploaded to Hostinger
  // shared hosting. Partial prerendering / cacheComponents are not
  // supported in export mode, so they stay off.
  output: "export",
  // /privacy → /privacy/index.html, served natively by LiteSpeed/Apache
  trailingSlash: true,
  // No image optimisation server on static hosting
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
