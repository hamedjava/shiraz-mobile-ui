// src/components/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';
import { ProductViewModel } from '../../../viewmodel/ProductViewModel'; // اطمینان حاصل کنید این مسیر صحیح است

interface ProductCardProps {
  product: ProductViewModel;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      href={product.url} 
      className="group block w-64 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="relative aspect-square w-full overflow-hidden">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={256}
          height={256}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="truncate text-base font-semibold text-gray-800" title={product.name}>
          {product.name}
        </h3>
        <p className="mt-2 text-left text-lg font-bold text-blue-600">
          {product.formattedPrice}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
