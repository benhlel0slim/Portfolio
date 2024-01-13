/** @type {import('next').NextConfig} */

const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@use "@/app/styles/variables" as *;
    @use "@/app/styles/mixins" as *;
    @use "@/app/styles/keyframes" as *;
`,
  },
};

module.exports = nextConfig;
