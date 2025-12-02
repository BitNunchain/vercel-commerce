export default {
  images: {
    loader: 'custom',
    loaderFile: 'image-loader.js',
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost'
      },
      {
        protocol: 'https',
        hostname: 'demo.vendure.io'
      },
      {
        protocol: 'https',
        hostname: 'vercel-commerce.demo.vendure.io'
      },
      {
        protocol: 'https',
        hostname: 'vercel-commerce.vendure.io'
      },
      {
        protocol: 'https',
        hostname: 'vendure-api-572691489926.us-central1.run.app'
      }
    ]
  }
};
