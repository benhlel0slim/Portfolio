/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "@/styles/variables" as *;
    @use "@/styles/mixins" as *;
    @use "@/styles/keyframes" as *;
`,
  },
};

module.exports = nextConfig;
