// src/app/products/[id]/page.tsx

import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductDetailPageProps {
  params: {
    id: string; // این id از URL می‌آید و از نوع string است
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const productRepository = new ApiProductRepository();
  
  // --- اصلاحات کلیدی در اینجا اعمال شد ---
  
  // 1. دیگر نیازی به parseInt نداریم، چون id در کل سیستم string است.
  const productId = params.id; 
  
  // 2. شرط isNaN نیز دیگر کاربردی ندارد، چون تبدیلی به عدد صورت نمی‌گیرد.
  //    بررسی وجود محصول در خط بعدی انجام می‌شود.

  // حالا یک string به متد پاس داده می‌شود که کاملاً صحیح است.
  const product = await productRepository.getProductById(productId);

  // اگر محصولی با این id پیدا نشد، صفحه 404 نمایش داده می‌شود.
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div className="bg-gray-100 rounded-xl p-8 flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-extrabold text-gray-900">{product.name}</h1>
          <p className="text-lg text-gray-600 leading-relaxed">{product.description}</p>
          <div className="my-4">
            <span className="text-4xl font-bold text-blue-600">
              {product.price.toLocaleString('fa-IR')}
            </span>
            <span className="text-lg text-gray-500 mr-2">تومان</span>
          </div>
          <button className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md hover:shadow-lg">
            افزودن به سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
}
