// src/components/home/Categories.tsx

import Image from 'next/image';
import Link from 'next/link';
import { Category } from '@/domain/entities/category.entity'; // ۱. وارد کردن Entity

// ۲. تعریف یک اینترفیس برای props ورودی
interface CategoriesProps {
  categories: Category[];
}

// ۳. دریافت props در تعریف کامپوننت
export default function Categories({ categories }: CategoriesProps) {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
          دسته‌بندی محصولات
        </h2>
        {/* ۴. استفاده از داده‌های داینامیک به جای داده‌های هاردکد شده */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
          {categories.map((item) => (
            <Link href={item.href} key={item.id}>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-lg hover:border-primary transition-all duration-300 cursor-pointer">
                <div className="relative w-16 h-16 mb-3">
                    <Image src={item.iconUrl} alt={item.name} fill className="object-contain" />
                </div>
                <span className="font-semibold text-gray-600">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
