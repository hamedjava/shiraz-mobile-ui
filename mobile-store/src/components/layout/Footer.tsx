// src/components/layout/Footer.tsx (نسخه نهایی و اصلاح شده)

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, Send, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4">
        
        {/* بخش بالایی */}
        <div className="py-12 border-b border-gray-800 flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="text-center lg:text-right">
            <h2 className="text-2xl font-bold text-white mb-2">به روز بمانید!</h2>
            <p className="text-sm">با عضویت در خبرنامه از آخرین تخفیف‌ها و محصولات جدید مطلع شوید.</p>
          </div>
          <form className="w-full max-w-md flex gap-2">
            <input 
              type="email" 
              placeholder="ایمیل خود را وارد کنید" 
              className="flex-grow bg-gray-800 border border-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-yellow transition-all"
            />
            <button 
              type="submit"
              className="bg-primary-yellow text-gray-900 font-bold p-3 rounded-md hover:bg-yellow-400 transition-colors flex-shrink-0"
            >
              <Send size={20} />
            </button>
          </form>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-500 hover:text-primary-yellow transition-colors"><Instagram size={24} /></Link>
            <Link href="#" className="text-gray-500 hover:text-primary-yellow transition-colors"><Twitter size={24} /></Link>
            <Link href="#" className="text-gray-500 hover:text-primary-yellow transition-colors"><Linkedin size={24} /></Link>
          </div>
        </div>

        {/* بخش میانی */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          
          <div className="space-y-4">
            <Link href="/">
              <Image src="/images/logo-white.png" alt="لوگو فروشگاه" width={150} height={45} className="brightness-90 hover:brightness-100 transition-all"/>
            </Link>
            <p className="text-sm leading-relaxed">
              ما بهترین و با کیفیت‌ترین لوازم جانبی را برای دستگاه‌های هوشمند شما فراهم می‌کنیم. رضایت شما اولویت ماست.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">دسترسی سریع</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/products" className="hover:text-primary-yellow transition-colors">محصولات</Link></li>
              <li><Link href="/about" className="hover:text-primary-yellow transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="hover:text-primary-yellow transition-colors">تماس با ما</Link></li>
              <li><Link href="/faq" className="hover:text-primary-yellow transition-colors">سوالات متداول</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-white mb-4">تماس با ما</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary-yellow mt-0.5 flex-shrink-0"/>
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
          
          {/* بخش نمادهای اعتماد - اینجا را با دقت بررسی کنید */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">نمادهای اعتماد</h3>
            <div className="flex gap-4 items-center">
              {/* ✅ اطمینان حاصل کنید فایل enamad-logo.png در public/images وجود دارد */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-1 bg-white rounded-lg inline-block hover:scale-105 transition-transform">
                <Image 
                  src="/images/enemad.jpg" 
                  alt="نماد اعتماد الکترونیکی (eNamad)" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </a>
              {/* ✅ اطمینان حاصل کنید فایل samandehi-logo.png در public/images وجود دارد */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="p-1 bg-white rounded-lg inline-block hover:scale-105 transition-transform">
                <Image 
                  src="/images/samandehi.png" 
                  alt="نشان ملی ثبت رسانه‌های دیجیتال (Samandehi)" 
                  width={80} 
                  height={80} 
                  className="object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        {/* بخش پایینی */}
        <div className="border-t border-gray-800 py-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} فروشگاه لوازم جانبی. تمام حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
}
