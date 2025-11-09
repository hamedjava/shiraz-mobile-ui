// src/app/categories/[slug]/page.tsx

// اصلاح شد: مسیر صحیح کامپوننت ProductCard وارد شد
import ProductCard from "../../../components/features/product/ProductCard";
import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";

// این اینترفیس نوع پارامترهای ورودی به صفحه را مشخص می‌کند
interface CategoryPageProps {
  params: {
    slug: string;
  };
}

// برای تبدیل slug به نام فارسی برای نمایش در عنوان صفحه
const categoryDisplayNames: { [key: string]: string } = {
  'mobiles': 'گوشی موبایل',
  'covers': 'کاور و قاب',
  'chargers': 'شارژر و آداپتور',
  'cables': 'کابل و رابط',
  'powerbanks': 'پاوربانک',
  'screen-protectors': 'محافظ صفحه',
};

// کامپوننت به صورت async تعریف می‌شود تا بتوانیم از await استفاده کنیم
export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  const productRepository = new ApiProductRepository();
  const products = await productRepository.getProductsByCategorySlug(slug);

  const categoryName = categoryDisplayNames[slug] || "دسته‌بندی نامشخص";

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 border-b pb-4">
        {categoryName}
      </h1>
      
      {products.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-gray-600 text-lg">
            متاسفانه محصولی در این دسته‌بندی یافت نشد.
          </p>
        </div>
      )}
    </div>
  );
}
