/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // Necesario para GitHub Pages
    images: {
        unoptimized: true,
    },
    basePath: process.env.NODE_ENV === 'production' ? '/primerizos' : '', // Ajusta 'primerizos' al nombre exacto de tu repositorio
    assetPrefix: process.env.NODE_ENV === 'production' ? '/primerizos/' : '', // Ajusta 'primerizos' al nombre exacto de tu repositorio
};

export default nextConfig;
