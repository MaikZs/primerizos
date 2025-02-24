/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/primerizos',
    assetPrefix: '/primerizos',
};

export default nextConfig;
