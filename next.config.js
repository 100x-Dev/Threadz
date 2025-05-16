/** @type {import('next').NextConfig} */
const nextConfig = {
  cache: false, // Temporarily disable caching to resolve the ENOENT error
};

module.exports = nextConfig;