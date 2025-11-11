// src/mappers/ProductMapper.ts

import { Product } from "@/domain/entities/product.entity";
import { ProductViewModel } from "../viewmodel/ProductViewModel";

export class ProductMapper {
  public static toViewModel(entity: Product): ProductViewModel {
    return {
      id: entity.id,
      name: entity.name,
      // فرمت کردن قیمت با جداکننده هزارگان و واحد "تومان"
      formattedPrice: `${entity.price.toLocaleString('fa-IR')} تومان`,
      // انتخاب اولین تصویر به عنوان تصویر اصلی کارت
      imageUrl: entity.images[0] || '/images/placeholder.png', // در صورت نبود تصویر، از جایگزین استفاده کن
      // ایجاد URL داینامیک برای صفحه محصول
      url: `/products/${entity.id}`, // فرض می‌کنیم ساختار URL به این شکل است
      rating: entity.rating,
    };
  }
}
