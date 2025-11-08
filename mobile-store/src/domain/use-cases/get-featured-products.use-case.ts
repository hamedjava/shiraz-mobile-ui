// src/domain/use-cases/get-featured-products.use-case.ts
import { Product } from "../entities/product.entity";
import { IProductRepository } from "../repositories/iproduct.repository";

export class GetFeaturedProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getFeaturedProducts();
  }
}
