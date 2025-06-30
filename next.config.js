const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [''],
  },
  // ✅ Make sure Next.js uses `src/pages`
  experimental: {
    appDir: false,
  },
};

module.exports = nextConfig;
