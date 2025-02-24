/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        loader: 'custom',
        loaderFile: './src/loader.js',
    },
};

export default nextConfig;
