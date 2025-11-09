// src/domain/repositories/iproduct.repository.ts

import { Product } from "../entities/product.entity";

export interface IProductRepository {
  /**
   * تمام محصولات را باز می‌گرداند.
   */
  getAllProducts(): Promise<Product[]>;

  /**
   * یک محصول خاص را بر اساس شناسه (ID) آن باز می‌گرداند.
   */
  getProductById(id: string): Promise<Product | null>;

  /**
   * لیستی از محصولات را بر اساس slug دسته‌بندی باز می‌گرداند.
   */
  getProductsByCategorySlug(slug: string): Promise<Product[]>;

  /**
   * لیستی از محصولات منتخب و ویژه را باز می‌گرداند.
   */
  getFeaturedProducts(): Promise<Product[]>;

  /**
   * لیستی از جدیدترین محصولات را باز می‌گرداند (مثلاً 4 محصول آخر).
   */
  getNewestProducts(): Promise<Product[]>;
}
