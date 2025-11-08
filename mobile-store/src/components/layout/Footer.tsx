// src/components/layout/Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-text-dark text-gray-300">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* بخش بالایی فوتر با ستون‌ها */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* ستون اول: درباره ما */}
          <div className="space-y-4">
            <Image src="/images/logo-white.png" alt="لوگو فروشگاه" width={150} height={45} />
            <p className="text-sm">
              ما بهترین و با کیفیت‌ترین لوازم جانبی را برای دستگاه‌های هوشمند شما فراهم می‌کنیم. رضایت شما اولویت ماست.
            </p>
          </div>

          {/* ستون دوم: دسترسی سریع */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products" className="hover:text-primary-yellow transition-colors">محصولات</Link></li>
              <li><Link href="/about" className="hover:text-primary-yellow transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-primary-yellow transition-colors">تماس با ما</Link></li>
              <li><Link href="/faq" className="hover:text-primary-yellow transition-colors">سوالات متداول</Link></li>
            </ul>
          </div>

          {/* ستون سوم: تماس با ما */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">تماس با ما</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-primary-yellow"/>
                <span>تهران، خیابان آزادی، پلاک ۱۲۳</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary-yellow"/>
                <span>۰۲۱-۱۲۳۴۵۶۷۸</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-primary-yellow"/>
                <span>info@yourstore.com</span>
              </li>
            </ul>
          </div>
          
          {/* ستون چهارم: نماد اعتماد (در آینده) */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">نمادهای اعتماد</h3>
            <div className="flex gap-4">
              {/* جایگاه نمادها */}
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-xs">نماد ۱</div>
              <div className="w-20 h-20 bg-gray-700 rounded-lg flex items-center justify-center text-xs">نماد ۲</div>
            </div>
          </div>
        </div>

        {/* بخش پایینی فوتر: کپی‌رایت */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} فروشگاه لوازم جانبی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
