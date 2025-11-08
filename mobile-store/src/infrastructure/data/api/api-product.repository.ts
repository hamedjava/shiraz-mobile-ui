// src/infrastructure/data/api/api-product.repository.ts
import { Product } from "@/domain/entities/product.entity";
import { IProductRepository } from "@/domain/repositories/iproduct.repository";

// این کلاس فعلاً داده‌های Mock را برای شبیه‌سازی یک API واقعی فراهم می‌کند.
export class ApiProductRepository implements IProductRepository {
  
  // منبع داده‌های ثابت ما برای تست
  private readonly mockProducts: Product[] = [
    { id: 1, name: "شارژر دیواری ۲۰ وات اپل", price: 1200000, imageUrl: "/images/charger.jpg", rating: 4.8, reviewCount: 152 },
    { id: 2, name: "کابل تبدیل USB-C به لایتنینگ ۱ متری", price: 850000, imageUrl: "/images/cable.jpg", rating: 4.7, reviewCount: 210 },
    { id: 3, name: "پاوربانک ۲۰۰۰۰ میلی‌آمپر انکر", price: 2500000, imageUrl: "/images/powerbank.jpg", rating: 4.9, reviewCount: 340 },
    { id: 4, name: "هندزفری بی‌سیم Galaxy Buds 2", price: 3100000, imageUrl: "/images/headphone.jpg", rating: 4.6, reviewCount: 188 },
    { id: 5, name: "قاب سیلیکونی آیفون 13", price: 450000, imageUrl: "/images/case.jpg", rating: 4.9, reviewCount: 450 },
    { id: 6, name: "محافظ صفحه نمایش گلس تمام صفحه", price: 250000, imageUrl: "/images/glass.jpg", rating: 4.5, reviewCount: 312 },
  ];

  /**
   * پیاده‌سازی متد برای دریافت محصولات ویژه.
   * در دنیای واقعی، اینجا یک درخواست GET به یک endpoint مانند /api/products/featured ارسال می‌شود.
   */
  async getFeaturedProducts(): Promise<Product[]> {
    // شبیه‌سازی یک تاخیر شبکه برای نمایش رفتار async
    await new Promise(resolve => setTimeout(resolve, 50)); 
    // برگرداندن ۴ محصول اول به عنوان ویژه
    return Promise.resolve(this.mockProducts.slice(0, 4));
  }

  /**
   * پیاده‌سازی متد برای دریافت جدیدترین محصولات.
   * در دنیای واقعی، اینجا یک درخواست GET به یک endpoint مانند /api/products?sort=newest ارسال می‌شود.
   */
  async getNewestProducts(): Promise<Product[]> {
    // شبیه‌سازی یک تاخیر شبکه
    await new Promise(resolve => setTimeout(resolve, 50));
    // برای ایجاد تفاوت، ترتیب محصولات را معکوس می‌کنیم تا به عنوان "جدیدترین" نمایش داده شوند.
    // استفاده از [...array] یک کپی از آرایه ایجاد می‌کند تا آرایه اصلی دستکاری نشود.
    const reversedProducts = [...this.mockProducts].reverse();
    return Promise.resolve(reversedProducts.slice(0, 4));
  }
}
