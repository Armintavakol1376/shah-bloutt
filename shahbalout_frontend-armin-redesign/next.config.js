const withPWA = require("next-pwa")({
  dest: "public",
  //register: true,
  //skipWaiting: true,
  //disable: process.env.NODE_ENV === 'development'
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  env: {
    BASEURL: "https://shahbaloutserver.liara.run",
  },
};

module.exports = withPWA(nextConfig);
//'https://shbaracuda.iran.liara.run'
