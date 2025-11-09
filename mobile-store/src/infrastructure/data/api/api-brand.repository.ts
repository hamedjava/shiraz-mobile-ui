// src/infrastructure/data/api/api-brand.repository.ts
import { Brand } from "@/domain/entities/brand.entity";
import { IBrandRepository } from "@/domain/repositories/ibrand.repository";

const mockBrands: Brand[] = [
  // تصحیح شد: این فایل در پوشه products قرار دارد و نام آن دارای فاصله است.
  { id: 'brand-01', name: 'اپل', logoUrl: '/images/products/sample-apple icon-svg.jpg' }, 
  // تصحیح شد: این فایل در پوشه brands قرار دارد.
  { id: 'brand-02', name: 'سامسونگ', logoUrl: '/images/brands/sample-of-samsung-svg.png' }, 
  // تصحیح شد: فایل placeholder در پوشه products قرار دارد.
  { id: 'brand-03', name: 'شیائومی', logoUrl: '/images/products/placeholder-icon.svg' }, 
  { id: 'brand-04', name: 'انکر', logoUrl: '/images/products/placeholder-icon.svg' },
  { id: 'brand-05', name: 'هواوی', logoUrl: '/images/products/placeholder-icon.svg' },
];

export class ApiBrandRepository implements IBrandRepository {
  async getAllBrands(): Promise<Brand[]> {
    await new Promise(resolve => setTimeout(resolve, 50));
    return Promise.resolve(mockBrands);
  }
}
