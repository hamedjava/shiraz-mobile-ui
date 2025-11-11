// src/domain/entities/product.entity.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  images: string[]; // تغییر به آرایه برای پشتیبانی از چندین تصویر
  rating: number;
  reviewCount: number;
  categorySlug: string; 
  brand: string;
  isFeatured: boolean;
  description: string;
  createdAt: string; // فیلد ضروری برای مرتب‌سازی جدیدترین‌ها (فرمت ISO 8601)
};
