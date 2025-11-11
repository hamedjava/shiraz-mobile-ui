// src/app/(home)/page.tsx

// --- وارد کردن کامپوننت‌های UI ---
import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import ProductCarousel from "@/components/product/ProductCarousel"; // مسیر اصلاح شد
import Brands from "@/components/home/Brands";
import CallToAction from "@/components/home/CallToAction";
import Features from "@/components/home/Features";

// --- وارد کردن منطق برنامه ---
import { ApiProductRepository } from "@/infrastructure/data/api/api-product.repository";
import { ApiBrandRepository } from "@/infrastructure/data/api/api-brand.repository";
import { ApiCategoryRepository } from "@/infrastructure/data/api/api-category.repository";
import { ProductMapper } from "../../mapper/ProductMapper"; // مسیر اصلاح شد

export default async function HomePage() {
  // --- تزریق وابستگی ---
  const productRepository = new ApiProductRepository();
  const brandRepository = new ApiBrandRepository();
  const categoryRepository = new ApiCategoryRepository();

  // --- فراخوانی موازی داده‌ها ---
  const [featuredProductsEntity, newestProductsEntity, allBrands, allCategories] = await Promise.all([
    productRepository.getFeaturedProducts(),
    productRepository.getNewestProducts(8),
    brandRepository.getAllBrands(),
    categoryRepository.getAllCategories(),
  ]);

  // --- تبدیل Entity به ViewModel ---
  const featuredProductsViewModel = featuredProductsEntity.map(ProductMapper.toViewModel);
  const newestProductsViewModel = newestProductsEntity.map(ProductMapper.toViewModel);

  return (
    <>
      <Hero />
      <Categories categories={allCategories} />

      {/* بخش محصولات ویژه */}
      <section className="container mx-auto px-4 py-12">
        <ProductCarousel 
          title="محصولات ویژه"
          viewAllUrl="/products/featured" // لینک برای دکمه نمایش همه
          products={featuredProductsViewModel}
        />
      </section>
      
      {/* بخش جدیدترین‌ها */}
      <section className="container mx-auto px-4 pb-12">
        <ProductCarousel
          title="جدیدترین‌ها"
          viewAllUrl="/products/newest" // لینک برای دکame نمایش همه
          products={newestProductsViewModel}
        />
      </section>

      <Features />
      <Brands brands={allBrands} />
      <CallToAction />
    </>
  );
}
