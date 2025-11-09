// src/components/ProductCard.tsx

import { Product } from "@/domain/entities/product.entity";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link 
      href={`/products/${product.id}`} // لینک به صفحه جزئیات محصول
      className="group block overflow-hidden border border-gray-200 rounded-xl hover:shadow-lg transition-shadow duration-300 bg-white"
    >
      <div className="relative h-[250px] sm:h-[300px] p-4">
        <Image
          // استفاده از فیلد صحیح 'image'
          src={product.image} 
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="relative p-6 text-center border-t border-gray-100">
        <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition-colors h-14 flex items-center justify-center">
          {product.name}
        </h3>
        
        <div className="mt-4">
          <span className="text-xl font-bold text-gray-900">
            {product.price.toLocaleString('fa-IR')}
          </span>
          <span className="text-sm text-gray-500 mr-1">
            تومان
          </span>
        </div>
      </div>
    </Link>
  );
}
