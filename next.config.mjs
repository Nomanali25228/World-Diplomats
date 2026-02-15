const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "world-diplomats-backend.onrender.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
