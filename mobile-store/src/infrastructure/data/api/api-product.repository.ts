// src/infrastructure/data/api/api-product.repository.ts

import { Product } from "@/domain/entities/product.entity";
import { IProductRepository } from "@/domain/repositories/iproduct.repository";

const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'کاور سیلیکونی اصلی آیفون 15 پرو',
    price: 1350000,
    images: ['/images/icons and pic/sample-cover-of-iphone.jpg'], 
    categorySlug: 'covers',
    brand: 'اپل',
    rating: 4.8,
    reviewCount: 125,
    isFeatured: true,
    description: 'این کاور سیلیکونی با طراحی اپل، به خوبی به دکمه‌ها و خمیدگی‌های آیفون شما می‌نشیند.',
    createdAt: '2025-11-10T10:00:00Z',
  },
  {
    id: 'prod-002',
    name: 'گوشی سامسونگ گلکسی S24 Ultra',
    price: 52000000,
    images: ['/images/icons and pic/sample-of-samsung.jpg'], 
    categorySlug: 'mobiles',
    brand: 'سامسونگ',
    rating: 4.9,
    reviewCount: 250,
    isFeatured: true,
    description: 'پرچمدار جدید سامسونگ با دوربین فوق‌العاده و قلم S-Pen.',
    createdAt: '2025-11-09T12:30:00Z',
  },
  {
    id: 'prod-003',
    name: 'آداپتور شارژ سریع 20 وات اپل',
    price: 980000,
    images: ['/images/icons and pic/mobile-adaptor.png'], 
    categorySlug: 'accessories',
    brand: 'اپل',
    rating: 4.7,
    reviewCount: 310,
    isFeatured: false,
    description: 'شارژر دیواری اپل با توان ۲۰ وات، دستگاه شما را با سرعت بالا شارژ می‌کند.',
    createdAt: '2025-11-11T08:00:00Z', // یکی از جدیدترین‌ها
  },
  {
    id: 'prod-004',
    name: 'گوشی موبایل وان‌پلاس 12',
    price: 41000000,
    images: ['/images/icons and pic/sample-one-plus-mobile.jpg'], 
    categorySlug: 'mobiles',
    brand: 'وان‌پلاس',
    rating: 4.8,
    reviewCount: 95,
    isFeatured: true,
    description: 'تجربه سرعت و روانی بی‌نظیر با پرچمدار جدید وان‌پلاس.',
    createdAt: '2025-11-05T14:00:00Z',
  },
  {
    id: 'prod-005',
    name: 'کاور چرمی کلاسیک سامسونگ',
    price: 850000,
    images: ['/images/icons and pic/samsung-cover.jpg'], 
    categorySlug: 'covers',
    brand: 'سامسونگ',
    rating: 4.6,
    reviewCount: 78,
    isFeatured: false,
    description: 'این کاور با چرم طبیعی، ظاهری شیک به گوشی شما می‌بخشد.',
    createdAt: '2025-11-08T18:00:00Z',
  },
  {
    id: 'prod-006',
    name: 'هدفون بی‌سیم سونی WH-1000XM5',
    price: 14500000,
    images: ['/images/placeholder.png'],
    categorySlug: 'accessories',
    brand: 'سونی',
    rating: 4.9,
    reviewCount: 450,
    isFeatured: true,
    description: 'بهترین نویز کنسلینگ بازار با کیفیت صدای بی‌نظیر.',
    createdAt: '2025-10-20T11:00:00Z',
  },
  // --- محصولات جدید اضافه شده برای تست اسکرول ---
  {
    id: 'prod-007',
    name: 'گوشی موبایل شیائومی 14 پرو',
    price: 45000000,
    images: ['/images/placeholder.png'],
    categorySlug: 'mobiles',
    brand: 'شیائومی',
    rating: 4.7,
    reviewCount: 180,
    isFeatured: false,
    description: 'دوربین توسعه‌یافته با همکاری لایکا و پردازنده قدرتمند.',
    createdAt: '2025-11-10T15:00:00Z', // جدید
  },
  {
    id: 'prod-008',
    name: 'پاوربانک 20000 انکر PowerCore',
    price: 2100000,
    images: ['/images/placeholder.png'],
    categorySlug: 'accessories',
    brand: 'انکر',
    rating: 4.8,
    reviewCount: 400,
    isFeatured: false,
    description: 'ظرفیت بالا و شارژ سریع برای تمام دستگاه‌های شما.',
    createdAt: '2025-11-01T09:00:00Z',
  },
  {
    id: 'prod-009',
    name: 'گوشی موبایل گوگل پیکسل 9',
    price: 49500000,
    images: ['/images/placeholder.png'],
    categorySlug: 'mobiles',
    brand: 'گوگل',
    rating: 4.9,
    reviewCount: 210,
    isFeatured: true,
    description: 'تجربه خالص اندروید با هوش مصنوعی پیشرفته گوگل.',
    createdAt: '2025-11-11T09:30:00Z', // جدیدترین محصول
  },
  {
    id: 'prod-010',
    name: 'محافظ صفحه نمایش نانو',
    price: 350000,
    images: ['/images/placeholder.png'],
    categorySlug: 'accessories',
    brand: 'متفرقه',
    rating: 4.5,
    reviewCount: 550,
    isFeatured: false,
    description: 'محافظت کامل از صفحه نمایش در برابر خط و خش و ضربه.',
    createdAt: '2025-11-09T20:00:00Z',
  },
  {
    id: 'prod-011',
    name: 'کاور هوشمند Smart View سامسونگ',
    price: 1800000,
    images: ['/images/placeholder.png'],
    categorySlug: 'covers',
    brand: 'سامسونگ',
    rating: 4.7,
    reviewCount: 90,
    isFeatured: false,
    description: 'مشاهده اعلانات و پاسخ به تماس‌ها بدون باز کردن کاور.',
    createdAt: '2025-11-04T11:45:00Z',
  },
  {
    id: 'prod-012',
    name: 'ساعت هوشمند اپل واچ سری 10',
    price: 25000000,
    images: ['/images/placeholder.png'],
    categorySlug: 'accessories',
    brand: 'اپل',
    rating: 4.9,
    reviewCount: 320,
    isFeatured: true,
    description: 'سنسورهای سلامتی پیشرفته و طراحی جدید و چشم‌نواز.',
    createdAt: '2025-11-07T16:00:00Z',
  },
];

export class ApiProductRepository implements IProductRepository {
  async getAllProducts(): Promise<Product[]> {
    return Promise.resolve(mockProducts);
  }
  
  async getProductById(id: string): Promise<Product | null> {
    const product = mockProducts.find(p => p.id === id);
    return Promise.resolve(product || null);
  }

  async getProductsByCategorySlug(slug: string): Promise<Product[]> {
    const products = mockProducts.filter(p => p.categorySlug === slug);
    return Promise.resolve(products);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    const featured = mockProducts.filter(p => p.isFeatured);
    return Promise.resolve(featured);
  }

  async getNewestProducts(limit: number = 8): Promise<Product[]> {
    const sorted = [...mockProducts].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return Promise.resolve(sorted.slice(0, limit));
  }
}
