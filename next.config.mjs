/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/cloud-premises/' : '',
  assetPrefix: isProd ? '/cloud-premises/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
