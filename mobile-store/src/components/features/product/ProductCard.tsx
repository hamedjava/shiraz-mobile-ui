// src/components/features/product/ProductCard.tsx
import { Product } from "@/domain/entities/product.entity";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 bg-white flex flex-col">
      <div className="relative w-full h-48 sm:h-56">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill // fill باعث می‌شود تصویر کل div والد را بپوشاند
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-text-dark mb-2 truncate flex-grow">{product.name}</h3>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xl font-bold text-accent-gray">
            {product.price.toLocaleString('fa-IR')} <span className="text-sm font-normal">تومان</span>
          </p>
          <div className="flex items-center text-sm text-gray-500">
            <span>⭐</span>
            <span className="mr-1">{product.rating} ({product.reviewCount})</span>
          </div>
        </div>
        <button className="w-full bg-primary-yellow text-text-dark font-bold py-2 px-4 rounded-lg hover:bg-yellow-400 transition-colors mt-auto">
          افزودن به سبد
        </button>
      </div>
    </div>
  );
}
