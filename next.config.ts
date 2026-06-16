// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
import nextra from "nextra";

const withNextra = nextra({
  contentDirBasePath: "/documents",
});

export default withNextra({
  reactStrictMode: true,
  turbopack: {
    root: process.cwd(),
  },
});
