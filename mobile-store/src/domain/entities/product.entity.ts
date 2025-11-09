// src/domain/entities/product.entity.ts

export type Product = {
  id: string;
  name: string;
  price: number;
  image: string; // نام 'imageUrl' به 'image' برای سادگی و هماهنگی با قبل تغییر کرد
  rating: number;
  reviewCount: number;
  
  // *** تغییر کلیدی ***
  // به جای نام فارسی، از یک شناسه ثابت (slug) استفاده می‌کنیم.
  categorySlug: string; 
  
  brand: string; // نام برند می‌تواند به صورت رشته باقی بماند چون کمتر تغییر می‌کند
  isFeatured: boolean;
  description: string; // این فیلد برای صفحه جزئیات محصول ضروری است، اضافه شد
};
