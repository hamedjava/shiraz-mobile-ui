// src/data/repository/api.brand.repository.ts

import { Brand } from '@/domain/entities/brand.entity';
// مسیر import شما ممکن است کمی متفاوت باشد، آن را مطابق ساختار پروژه خود تنظیم کنید
import { IBrandRepository } from '../../../domain/repositories/ibrand.repository';

export class ApiBrandRepository implements IBrandRepository {
    async getAllBrands(): Promise<Brand[]> {
        // شبیه‌سازی فراخوانی از یک منبع داده
        return Promise.resolve([
            
            {
                id: '1',
                name: 'samsung',
                // ✅ اصلاح حیاتی: تغییر فرمت از JPG به PNG یا SVG
                logo: '/images/brands/samsung.png', 
            },
            // برای حرکت بی‌نهایت و روان، بهتر است تعداد آیتم‌ها بیشتر باشد
            {
                id: '2',
                name: 'verto',
                logo: '/images/brands/verto.png',
            },
            {
                id: '3',
                name: 'anker',
                // ✅ اصلاح حیاتی: تغییر فرمت از JPG به PNG یا SVG
                logo: '/images/brands/anker_logo_simple2.jpeg', 
            },{
                id: '4',
                name: 'xaiomi',
                // ✅ اصلاح حیاتی: تغییر فرمت از JPG به PNG یا SVG
                logo: '/images/brands/xiaomi.png', 
            },{
                id: '5',
                name: 'apple',
                // ✅ اصلاح حیاتی: تغییر فرمت از JPG به PNG یا SVG
                logo: '/images/brands/apple.png', 
            }
        ]);
    }
}
