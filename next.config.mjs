/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    const isDev = process.env.NODE_ENV === "development";

    // Bases
    const scriptSrc = ["'self'", "'unsafe-inline'", "https://plausible.io"];
    const styleSrc = ["'self'", "'unsafe-inline'"];
    const imgSrc = ["'self'", "data:", "blob:"];
    const fontSrc = ["'self'", "data:"];
    const connectSrc = ["'self'", "https://plausible.io"];

    // ⚙️ Permissões extras só no DEV (Fast Refresh usa eval + WS)
    if (isDev) {
      scriptSrc.push("'unsafe-eval'");
      connectSrc.push("ws:");
    }

    const csp = [
      `default-src 'self'`,
      `script-src ${scriptSrc.join(" ")}`,
      `style-src ${styleSrc.join(" ")}`,
      `img-src ${imgSrc.join(" ")}`,
      `font-src ${fontSrc.join(" ")}`,
      `connect-src ${connectSrc.join(" ")}`,
      `frame-ancestors 'none'`,
      `object-src 'none'`,
      `base-uri 'self'`,
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Frame-Options", value: "DENY" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "geolocation=(), microphone=(), camera=(), payment=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
