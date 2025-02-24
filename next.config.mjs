/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'akamai',
        path: '',
    },
    basePath: '/primerizos',
    assetPrefix: '/primerizos/',
    trailingSlash: true,
};

export default nextConfig;
