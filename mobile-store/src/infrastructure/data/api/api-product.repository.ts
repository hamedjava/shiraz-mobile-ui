// src/infrastructure/data/api/api-product.repository.ts
import { Product } from "@/domain/entities/product.entity";
import { IProductRepository } from "@/domain/repositories/iproduct.repository";

// این کلاس فعلاً داده‌های Mock را شبیه‌سازی می‌کند
export class ApiProductRepository implements IProductRepository {
  
  private readonly mockProducts: Product[] = [
    { id: 1, name: "شارژر دیواری ۲۰ وات اپل", price: 1200000, imageUrl: "/images/charger.jpg", rating: 4.8, reviewCount: 152 },
    { id: 2, name: "کابل تبدیل USB-C به لایتنینگ ۱ متری", price: 850000, imageUrl: "/images/cable.jpg", rating: 4.7, reviewCount: 210 },
    { id: 3, name: "پاوربانک ۲۰۰۰۰ میلی‌آمپر انکر", price: 2500000, imageUrl: "/images/powerbank.jpg", rating: 4.9, reviewCount: 340 },
    { id: 4, name: "هندزفری بی‌سیم Galaxy Buds 2", price: 3100000, imageUrl: "/images/headphone.jpg", rating: 4.6, reviewCount: 188 },
  ];

  async getFeaturedProducts(): Promise<Product[]> {
    // شبیه‌سازی یک تاخیر شبکه برای نمایش رفتار async
    await new Promise(resolve => setTimeout(resolve, 50)); 
    return Promise.resolve(this.mockProducts);
  }
}
