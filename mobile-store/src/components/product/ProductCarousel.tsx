// src/components/product/ProductCarousel.tsx

"use client";

// --- وارد کردن کتابخانه‌ها و کامپوننت‌ها ---
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import ProductCard from "../../components/features/product/ProductCard"; // اطمینان حاصل کنید مسیر درست است
import { ProductViewModel } from "../../viewmodel/ProductViewModel";

// --- وارد کردن استایل‌های Swiper ---
import "swiper/css";
import "swiper/css/free-mode";

// --- تعریف Props کامپوننت ---
//  vvv  این بخش کلیدی اصلاح شده است  vvv
interface ProductCarouselProps {
  title: string;
  viewAllUrl: string;
  products: ProductViewModel[];
}
//  ^^^  پایان بخش اصلاح شده         ^^^

export default function ProductCarousel({ title, viewAllUrl, products }: ProductCarouselProps) {
  // اگر هیچ محصولی وجود نداشت، چیزی رندر نکن
  if (!products || products.length === 0) {
    return null;
  }
  
  return (
    <div>
      {/* هدر بخش: شامل عنوان، آندرلاین و دکمه "نمایش همه" */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <div className="mt-2 h-1 w-16 rounded-full bg-yellow-400"></div>
        </div>
        <Link
          href={viewAllUrl}
          className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition-colors hover:text-gray-900"
        >
          <span>نمایش همه</span>
          <ChevronLeft size={18} />
        </Link>
      </div>

      {/* کاروسل محصولات */}
      <div>
        <Swiper
          modules={[FreeMode]}
          slidesPerView="auto"
          spaceBetween={16}
          freeMode={true}
          grabCursor={true}
          className="!pb-2"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} className="!w-auto">
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
