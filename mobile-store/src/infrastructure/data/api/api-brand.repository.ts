// src/infrastructure/repositories/api/api-brand.repository.ts

import { Brand } from "@/domain/entities/brand.entity";
import { IBrandRepository } from "../../../domain/repositories/ibrand.repository";

// داده‌های برند با استفاده از مسیرهای محلی از پوشه public
const brandsData: Brand[] = [
    {
        id: 1,
        name: 'Anker',
        logo: '/images/brands/anker_logo.jpg'
    },
    {
        id: 2,
        name: 'Apple',
        logo: '/images/brands/apple_logo.png'
    },
    {
        id: 3,
        name: 'Huawei', // نام صحیح برند Huawei است
        logo: '/images/brands/hauwei_logo.png' // اما مسیر فایل را مطابق با فایل شما قرار دادم
    },
    {
        id: 4,
        name: 'Samsung',
        logo: '/images/brands/sample-of-samsung-svg.png' // توصیه می‌شود نام این فایل به samsung_logo.png تغییر کند
    },
    {
        id: 5,
        name: 'Xiaomi',
        logo: '/images/brands/xiaomi_logo.png'
    },
    // برای نمایش بهتر اسکرول بی‌نهایت، می‌توانیم همین موارد را تکرار کنیم
    {
        id: 6,
        name: 'Anker',
        logo: '/images/brands/anker_logo.jpg'
    },
    {
        id: 7,
        name: 'Apple',
        logo: '/images/brands/apple_logo.png'
    },
    {
        id: 8,
        name: 'Huawei',
        logo: '/images/brands/hauwei_logo.png'
    },
];


export class ApiBrandRepository implements IBrandRepository {
    async getAllBrands(): Promise<Brand[]> {
        // شبیه‌سازی یک تاخیر شبکه برای تست حالت لودینگ در آینده
        await new Promise(resolve => setTimeout(resolve, 100));
        return brandsData;
    }
}
