/** @type {import('next').NextConfig} */
const nextConfig = {
    compress: false,
    reactStrictMode: true,
    productionBrowserSourceMaps: true,
    webpack(config, { dev, isServer }) {
        if (!dev && !isServer) {
            config.devtool = 'source-map';
        }
        return config;
    },
};

export default nextConfig;
