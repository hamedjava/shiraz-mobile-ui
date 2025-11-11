// src/components/SectionHeader.tsx

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react'; // آیکون فلش

interface SectionHeaderProps {
  title: string;
  href: string; // لینک برای دکمه "نمایش همه"
}

export default function SectionHeader({ title, href }: SectionHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      {/* بخش عنوان و آندرلاین */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <div className="mt-2 h-1 w-16 rounded-full bg-yellow-400"></div>
      </div>

      {/* بخش دکمه "نمایش همه" */}
      <Link
        href={href}
        className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900"
      >
        <span>نمایش همه</span>
        <ChevronLeft size={18} />
      </Link>
    </div>
  );
}
