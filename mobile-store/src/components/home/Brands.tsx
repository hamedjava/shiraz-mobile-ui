// src/components/home/Brands.tsx

import React from 'react';
import Image from 'next/image';

const brandLogos = [
  { name: 'Apple', src: '/brands/apple.svg', width: 100, height: 40 },
  { name: 'Samsung', src: '/brands/samsung.svg', width: 120, height: 40 },
  { name: 'Xiaomi', src: '/brands/xiaomi.svg', width: 100, height: 40 },
  { name: 'Huawei', src: '/brands/huawei.svg', width: 110, height: 40 },
  { name: 'Anker', src: '/brands/anker.svg', width: 100, height: 40 },
];

const Brands = () => {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-text-dark mb-8">
          برندهای معتبر
        </h2>
        <div className="flex justify-center items-center gap-x-8 md:gap-x-16 flex-wrap">
          {brandLogos.map((brand) => (
            <div key={brand.name} className="p-4">
              {/* نکته: شما باید فایل‌های SVG لوگوها را در پوشه public/brands قرار دهید */}
              <Image
                src={brand.src}
                alt={`${brand.name} Logo`}
                width={brand.width}
                height={brand.height}
                className="opacity-60 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
