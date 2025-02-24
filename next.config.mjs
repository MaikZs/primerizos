/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
        domains: ['maikzs.github.io'],
    },
    basePath: '/primerizos',
    assetPrefix: '/primerizos',
};

export default nextConfig;
