/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output directory for the static export
  output: 'export',
  // Disable the static export directory's index.html from being generated
  skipTrailingSlashRedirect: true,
  // Disable the default behavior of Next.js for static exports
  trailingSlash: true,
}

module.exports = nextConfig
