// src/components/home/Categories.tsx
import Image from 'next/image';
import Link from 'next/link';

const categoryItems = [
  { name: 'قاب و کاور', icon: '/icons/icon-case.svg', href: '/category/cases' },
  { name: 'شارژر و کابل', icon: '/icons/icon-charger.svg', href: '/category/chargers' },
  { name: 'محافظ صفحه', icon: '/icons/icon-screen-protector.svg', href: '/category/screen-protectors' },
  { name: 'هندزفری و هدفون', icon: '/icons/icon-headphone.svg', href: '/category/headphones' },
];

export default function Categories() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-text-dark mb-8">
          دسته‌بندی محصولات
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8">
          {categoryItems.map((item) => (
            <Link href={item.href} key={item.name}>
              <div className="flex flex-col items-center p-4 border rounded-lg shadow-sm hover:shadow-lg hover:border-primary-yellow transition-all duration-300 cursor-pointer">
                <div className="relative w-16 h-16 mb-3">
                    <Image src={item.icon} alt={item.name} fill className="object-contain" />
                </div>
                <span className="font-semibold text-accent-gray">{item.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
