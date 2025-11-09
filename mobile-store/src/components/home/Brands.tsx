// src/components/home/Brands.tsx

import Image from 'next/image';
import { Brand } from '@/domain/entities/brand.entity'; // ۱. وارد کردن Entity برند

// ۲. تعریف اینترفیس برای props
interface BrandsProps {
  brands: Brand[];
}

// ۳. تعریف کامپوننت که props را دریافت می‌کند و export می‌شود
export default function Brands({ brands }: BrandsProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
          برندهای معتبر
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center">
          {/* ۴. استفاده از داده‌های داینامیک brands */}
          {brands.map((brand) => (
            <div key={brand.id} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <div className="relative w-28 h-12">
                <Image
                  src={brand.logoUrl}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
