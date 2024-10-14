/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['fileinfo.com'], // Add the domain you need to whitelist
    },
    fontFamily: {
        arial: ['Arial', 'sans-serif'],
        'gotham': ['Gotham Pro', 'sans-serif'],

      },
  };
  
  export default nextConfig;
  