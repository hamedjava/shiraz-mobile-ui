// src/app/(home)/page.tsx
import ProductList from "@/components/features/product/ProductList";
import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";
import { GetFeaturedProductsUseCase } from "@/domain/use-cases/get-featured-products.use-case";

export default async function HomePage() {
  // --- تزریق وابستگی و ساخت Use Case ---
  const productRepository = new ApiProductRepository();
  const getFeaturedProducts = new GetFeaturedProductsUseCase(productRepository);

  // --- فراخوانی Use Case برای گرفتن داده‌ها روی سرور ---
  const featuredProducts = await getFeaturedProducts.execute();

  return (
    <main className="container mx-auto px-4 py-8">
      <section>
        <h1 className="text-3xl font-bold text-text-dark mb-8 border-b-4 border-primary-yellow pb-2 inline-block">
          محصولات ویژه
        </h1>
        <ProductList products={featuredProducts} />
      </section>
      {/* در اینجا می‌توانید بخش‌های دیگر صفحه اصلی را اضافه کنید */}
    </main>
  );
}
