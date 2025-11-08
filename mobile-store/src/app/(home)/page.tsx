// src/app/(home)/page.tsx

// --- وارد کردن کامپوننت‌های UI ---
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductList from "@/components/features/product/ProductList";

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
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-text-dark mb-8 border-b-4 border-primary-yellow pb-2 inline-block">
            محصولات ویژه
          </h2>
          <ProductList products={featuredProducts} />
        </section>

        {/* بخش جدیدترین محصولات */}
        <section>
          <h2 className="text-3xl font-bold text-text-dark mb-8 border-b-4 border-primary-yellow pb-2 inline-block">
            جدیدترین‌ها
          </h2>
          <ProductList products={newestProducts} />
        </section>
      </main>
    </>
  );
}
