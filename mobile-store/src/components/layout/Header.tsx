// src/components/layout/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { User } from 'lucide-react';

export default function Header() {
  const navLinks = [
    { name: 'خانه', href: '/' },
    { name: 'محصولات', href: '/products' },
    { name: 'درباره ما', href: '/about' },
    { name: 'تماس با ما', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* بخش راست: لوگو و منو */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image src="/images/logo.png" alt="لوگو فروشگاه" width={140} height={40} />
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex items-center gap-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-accent-gray hover:text-primary-yellow transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* بخش چپ: جستجو و ورود/ثبت‌نام */}
          <div className="flex items-center gap-6">
            <div className="w-64">
              <SearchBar />
            </div>
            <div className="flex items-center gap-3">
              <Link href="/login">
                <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition-colors">
                  <User size={18} />
                  <span>ورود</span>
                </button>
              </Link>
              <Link href="/register">
                <button className="px-4 py-2 bg-primary-yellow text-text-dark font-bold rounded-lg hover:bg-yellow-400 transition-colors hidden sm:block">
                  ثبت ‌نام
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
