// src/app/(home)/page.tsx

// --- وارد کردن کامپوننت‌های UI ---
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/features/product/ProductList";
import Brands from "@/components/home/Brands";
import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features"; // ۱. کامپوننت Features را وارد می‌کنیم

// --- وارد کردن منطق برنامه ---
import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";
import { ApiBrandRepository } from "@/infrastructure/data/api/api-brand.repository";
import { ApiCategoryRepository } from "@/infrastructure/data/api/api-category.repository";
import { Brand } from "@/domain/entities/brand.entity";
import { Category } from "@/domain/entities/category.entity";
import { Product } from "@/domain/entities/product.entity";

export default async function HomePage() {
  // --- تزریق وابستگی ---
  const productRepository = new ApiProductRepository();
  const brandRepository = new ApiBrandRepository();
  const categoryRepository = new ApiCategoryRepository();

  // --- فراخوانی موازی تمام داده‌های مورد نیاز برای بهینه‌سازی ---
  const [featuredProducts, newestProducts, allBrands, allCategories]: [Product[], Product[], Brand[], Category[]] = await Promise.all([
    productRepository.getFeaturedProducts(),
    productRepository.getNewestProducts(),
    brandRepository.getAllBrands(),
    categoryRepository.getAllCategories(),
  ]);

  return (
    <>
      <Hero />
      
      <Categories categories={allCategories} />

      <main className="container mx-auto px-4 py-12">
        {/* بخش محصولات ویژه */}
        <section id="featured-products" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-primary pb-2">
              محصولات ویژه
            </h2>
            <a href="/products/featured" className="text-gray-600 hover:text-primary-dark transition-colors">
              مشاهده همه
            </a>
          </div>
          <ProductList products={featuredProducts} />
        </section>

        {/* بخش جدیدترین محصولات */}
        <section id="newest-products" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 border-b-4 border-primary pb-2">
              جدیدترین‌ها
            </h2>
            <a href="/products/newest" className="text-gray-600 hover:text-primary-dark transition-colors">
              مشاهده همه
            </a>
          </div>
          <ProductList products={newestProducts} />
        </section>
      </main>

      {/* 
        ✅ ۲. کامپوننت Advantages را با Features جایگزین می‌کنیم
        این بخش اکنون ویژگی‌های فروشگاه را بدون انیمیشن نمایش می‌دهد.
      */}
      <Features />

      {/* بخش برندها */}
      <Brands brands={allBrands} />

      {/* بخش فراخوان به اقدام */}
      <CallToAction />
    </>
  );
}
