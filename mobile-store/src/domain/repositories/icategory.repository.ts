// src/domain/repositories/icategory.repository.ts
import { Category } from "../entities/category.entity";

export interface ICategoryRepository {
  getAllCategories(): Promise<Category[]>;
}
