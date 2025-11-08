// src/domain/use-cases/get-newest-products.use-case.ts
import { Product } from "../entities/product.entity";
import { IProductRepository } from "../repositories/iproduct.repository";

export class GetNewestProductsUseCase {
  constructor(private readonly productRepository: IProductRepository) {}

  async execute(): Promise<Product[]> {
    return this.productRepository.getNewestProducts();
  }
}
