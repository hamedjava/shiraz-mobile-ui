// src/components/home/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] bg-gray-800 text-white flex items-center">
      {/* تصویر پس‌زمینه */}
      <Image
        src="/images/hero-banner.jpg" // شما باید این تصویر را در public/images قرار دهید
        alt="بنر اصلی فروشگاه"
        fill
        className="object-cover object-center opacity-40"
        priority // باعث لود سریع‌تر تصویر اصلی می‌شود
      />
      
      {/* محتوای روی تصویر */}
      <div className="relative container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 drop-shadow-lg">
          بهترین‌ها برای گجت شما
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          از قاب‌های شیک و مقاوم گرفته تا سریع‌ترین شارژرها، همه چیز برای محافظت و بهبود کارایی دستگاه شما.
        </p>
        <Link href="/products">
          <button className="bg-primary-yellow text-text-dark font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-400 transition-transform duration-300 hover:scale-105">
            مشاهده همه محصولات
          </button>
        </Link>
      </div>
    </section>
  );
}
