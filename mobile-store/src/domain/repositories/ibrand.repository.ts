// src/domain/repositories/ibrand.repository.ts
import { Brand } from "../entities/brand.entity";

export interface IBrandRepository {
  getAllBrands(): Promise<Brand[]>;
}
