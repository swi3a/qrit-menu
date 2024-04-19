/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

module.exports = {
    // Enable static HTML export
    exportPathMap: function() {
        return {
            '/': { page: '/' },
            // Add more pages here
        };
    },
};