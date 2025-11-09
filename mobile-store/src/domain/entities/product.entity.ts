// src/domain/entities/product.entity.ts
export type Product = {
  id: string; // بهتر است string باشد برای شناسه‌های منحصر به فرد آینده (UUID)
  name: string;
  price: number;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  // فیلدهای ضروری برای یک محصول واقعی
  category: string;
  brand: string;
  isFeatured: boolean;
};
