/** @type {import('next').NextConfig} */
const nextConfig = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  images: {
    unoptimized: true,
  },
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default nextConfig;