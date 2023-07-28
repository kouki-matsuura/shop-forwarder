/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = (phase, { defaultConfig }) => {
  console.log(defaultConfig);

  return defaultConfig;
};
