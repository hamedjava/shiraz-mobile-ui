// src/domain/repositories/iproduct.repository.ts
import { Product } from "../entities/product.entity";

export interface IProductRepository {
  getFeaturedProducts(): Promise<Product[]>;
}
