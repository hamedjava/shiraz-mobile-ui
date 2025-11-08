// src/components/layout/SearchBar.tsx
"use client"; // این کامپوننت با کاربر تعامل دارد

import { Search } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      // در آینده، کاربر به صفحه جستجو با کوئری منتقل می‌شود
      // router.push(`/search?q=${query}`);
      console.log('Searching for:', query);
      // فعلا فقط در کنسول نمایش می‌دهیم
    }
  };

  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="جستجو در محصولات..."
        className="w-full px-4 py-2 pr-12 text-sm border rounded-lg bg-background-light focus:ring-2 focus:ring-primary-yellow focus:border-primary-yellow outline-none transition-all"
      />
      <button
        type="submit"
        className="absolute left-0 top-0 h-full px-4 text-gray-500 hover:text-text-dark"
        aria-label="جستجو"
      >
        <Search size={20} />
      </button>
    </form>
  );
}
