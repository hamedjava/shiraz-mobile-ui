// src/viewmodels/ProductViewModel.ts

export type ProductViewModel = {
    id: string;
    name: string;
    formattedPrice: string; // قیمت فرمت‌شده برای نمایش
    imageUrl: string; // فقط تصویر اصلی برای نمایش در کارت
    url: string; // آدرس صفحه محصول
    rating: number;
  };
  