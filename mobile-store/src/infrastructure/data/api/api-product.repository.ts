// src/infrastructure/data/api/api-product.repository.ts

import { Product } from "@/domain/entities/product.entity";
import { IProductRepository } from "@/domain/repositories/iproduct.repository";

const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'کاور سیلیکونی اصلی آیفون 15 پرو',
    price: 1350000,
    // اصلاح شد: استفاده از عکس واقعی کاور آیفون
    imageUrl: '/images/icons and pic/sample-cover-of-iphone.jpg', 
    category: 'کاور و قاب',
    brand: 'اپل',
    rating: 4.8,
    reviewCount: 125,
    isFeatured: true,
  },
  {
    id: 'prod-002',
    name: 'گوشی سامسونگ گلکسی S24 Ultra',
    price: 52000000,
    // اصلاح شد: استفاده از بهترین عکس موجود برای نمایش گوشی/کاور
    imageUrl: '/images/icons and pic/covers-of-moblie-spegne.jpg', 
    category: 'گوشی موبایل',
    brand: 'سامسونگ',
    rating: 4.9,
    reviewCount: 250,
    isFeatured: true,
  },
  {
    id: 'prod-003',
    name: 'پاوربانک 20000 انکر PowerCore',
    price: 2800000,
    // اصلاح شد: برای پاوربانک از یک عکس باکیفیت به عنوان جایگزین استفاده شد
    imageUrl: '/images/icons and pic/covers-of-moblie-spegne.jpg', 
    category: 'پاوربانک',
    brand: 'انکر',
    rating: 4.7,
    reviewCount: 185,
    isFeatured: true,
  },
  {
    id: 'prod-004',
    name: 'آداپتور 20 وات اورجینال اپل',
    price: 1250000,
    // اصلاح شد: آیکون حذف شد و یک عکس واقعی از کاور به عنوان جایگزین قرار گرفت
    imageUrl: '/images/icons and pic/mobile-cover.jpg', 
    category: 'شارژر و آداپتور',
    brand: 'اپل',
    rating: 4.9,
    reviewCount: 310,
    isFeatured: true,
  },
  {
    id: 'prod-005',
    name: 'کابل 2 متری USB-C به لایتنینگ',
    price: 980000,
    // اصلاح شد: آیکون حذف شد و یک عکس واقعی از کاور به عنوان جایگزین قرار گرفت
    imageUrl: '/images/icons and pic/mobile-cover.jpg', 
    category: 'کابل و رابط',
    brand: 'اپل',
    rating: 4.6,
    reviewCount: 95,
    isFeatured: false, 
  },
  {
    id: 'prod-006',
    name: 'گوشی شیائومی 13T Pro',
    price: 29500000,
    // اصلاح شد: استفاده از بهترین عکس موجود برای نمایش گوشی
    imageUrl: '/images/icons and pic/covers-of-moblie-spegne.jpg',
    category: 'گوشی موبایل',
    brand: 'شیائومی',
    rating: 4.5,
    reviewCount: 150,
    isFeatured: false,
  },
  {
    id: 'prod-007',
    name: 'محافظ صفحه نمایش گلس برای S24',
    price: 450000,
    // اصلاح شد: تصویر placeholder حذف و با عکس واقعی کاور جایگزین شد
    imageUrl: '/images/icons and pic/samsung-cover.jpg', 
    category: 'محافظ صفحه',
    brand: 'متفرقه',
    rating: 4.4,
    reviewCount: 78,
    isFeatured: false,
  },
];

export class ApiProductRepository implements IProductRepository {
  async getFeaturedProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 50)); 
    const featured = mockProducts.filter(p => p.isFeatured);
    return Promise.resolve(featured);
  }

  async getNewestProducts(): Promise<Product[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    const reversedProducts = [...mockProducts].reverse(); 
    return Promise.resolve(reversedProducts.slice(0, 4));
  }
}
