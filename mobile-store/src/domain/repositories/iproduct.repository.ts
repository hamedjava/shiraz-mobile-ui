// src/domain/repositories/iproduct.repository.ts

import { Product } from "../entities/product.entity";

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getProductsByCategorySlug(slug: string): Promise<Product[]>;
  getFeaturedProducts(): Promise<Product[]>;

  /**
   * لیستی از جدیدترین محصولات را باز می‌گرداند.
   * @param limit - تعداد محصولاتی که باید بازگردانده شود (اختیاری).
   */
  getNewestProducts(limit?: number): Promise<Product[]>; // <-- پارامتر limit اضافه شد
}
