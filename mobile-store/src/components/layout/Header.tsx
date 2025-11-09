// src/components/layout/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '@/components/layout/SearchBar';
import { User, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'محصولات', href: '/products' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* بخش راست: لوگو و منو */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <Image 
                src="/logo.svg" 
                alt="لوگوی فروشگاه موبیکس" 
                width={150} 
                height={40}
                priority 
              />
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6 text-base font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-accent transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* بخش چپ: جستجو، سبد خرید و ورود */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block w-64">
              <SearchBar />
            </div>
            
            <Link href="/cart" className="relative p-2 rounded-full transition-colors hover:bg-gray-200">
               <ShoppingCart className="text-accent" size={22} />
               <span className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-xs font-bold text-accent">3</span>
            </Link>

            <div className="hidden sm:flex items-center gap-2">
              <Link href="/login">
                <button className="flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 transition-colors hover:bg-gray-100">
                  <User size={18} className="text-accent"/>
                  <span className="font-semibold text-accent">ورود</span>
                </button>
              </Link>
              <Link href="/register">
                <button className="rounded-lg bg-primary px-4 py-2 font-bold text-accent transition-colors hover:bg-primary/90">
                  ثبت ‌نام
                </button>
              </Link>
            </div>
            
            {/* دکمه منوی همبرگری برای موبایل */}
            <div className="md:hidden">
                <button className="p-2 rounded-md hover:bg-gray-200">
                    <Menu className="text-accent" size={24} />
                </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
