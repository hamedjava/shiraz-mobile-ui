// src/app/(home)/page.tsx

// --- وارد کردن کامپوننت‌های UI ---
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/features/product/ProductList"; 
import Advantages from "@/components/home/Advantages";    // جدید: کامپوننت مزایای فروشگاه
import Brands from "@/components/home/Brands";          // جدید: کامپوننت برندها
import CallToAction from "@/components/home/CallToAction";  // جدید: کامپوننت فراخوان به اقدام

// --- وارد کردن منطق برنامه ---
import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";
import { GetFeaturedProductsUseCase } from "@/domain/use-cases/get-featured-products.use-case";
import { GetNewestProductsUseCase } from "@/domain/use-cases/get-newest-products.use-case";

export default async function HomePage() {
  // --- تزریق وابستگی ---
  const productRepository = new ApiProductRepository();
  const getFeaturedProducts = new GetFeaturedProductsUseCase(productRepository);
  const getNewestProducts = new GetNewestProductsUseCase(productRepository);

  // --- فراخوانی موازی Use Case ها برای بهینه‌سازی ---
  const [featuredProducts, newestProducts] = await Promise.all([
    getFeaturedProducts.execute(),
    getNewestProducts.execute()
  ]);

  return (
    <>
      <Hero />
      <Categories />

      <main className="container mx-auto px-4 py-12">
        {/* بخش محصولات ویژه */}
        <section id="featured-products" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-text-dark border-b-4 border-primary-yellow pb-2">
              محصولات ویژه
            </h2>
            <a href="/products/featured" className="text-accent-gray hover:text-primary-yellow transition-colors">
              مشاهده همه
            </a>
          </div>
          <ProductList products={featuredProducts} />
        </section>

        {/* بخش جدیدترین محصولات */}
        <section id="newest-products" className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-text-dark border-b-4 border-primary-yellow pb-2">
              جدیدترین‌ها
            </h2>
            <a href="/products/newest" className="text-accent-gray hover:text-primary-yellow transition-colors">
              مشاهده همه
            </a>
          </div>
          <ProductList products={newestProducts} />
        </section>
      </main>

      {/* بخش مزایای ما */}
      <Advantages />

      {/* بخش برندها */}
      <Brands />

      {/* بخش فراخوان به اقدام */}
      <CallToAction />
    </>
  );
}
