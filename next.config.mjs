/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/primerizos' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/primerizos/' : '',
};

export default nextConfig;
