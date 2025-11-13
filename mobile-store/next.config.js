 
/** @type {import('next').NextConfig} */
const nextConfig = {
    // اگر پیکربندی‌های دیگری دارید، آنها را اینجا نگه دارید
    
    // این بخش را اضافه کنید تا دامنه pexels.com مجاز شود
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
          port: '',
          pathname: '**', // به معنی اجازه دادن به هر مسیری در این دامنه
        },
      ],
    },
  };
  
  module.exports = nextConfig;
  