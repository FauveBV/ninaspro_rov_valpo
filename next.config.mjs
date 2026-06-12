/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Evita que warnings de lint (p. ej. uso de <img>) corten el build en Vercel.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
