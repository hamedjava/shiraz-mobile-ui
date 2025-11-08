// src/domain/repositories/iproduct.repository.ts
import { Product } from "../entities/product.entity";

export interface IProductRepository {
  /**
   * لیستی از محصولات منتخب و ویژه را باز می‌گرداند.
   */
  getFeaturedProducts(): Promise<Product[]>;

  /**
   * لیستی از جدیدترین محصولات اضافه شده به فروشگاه را باز می‌گرداند.
   */
  getNewestProducts(): Promise<Product[]>;
}
