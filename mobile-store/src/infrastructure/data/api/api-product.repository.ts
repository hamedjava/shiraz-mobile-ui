// src/infrastructure/data/api/api-product.repository.ts

import { Product } from "@/domain/entities/product.entity";
import { IProductRepository } from "@/domain/repositories/iproduct.repository";

// داده‌های mock بر اساس مدل جدید و مسیرهای صحیح تصاویر به‌روزرسانی شدند
const mockProducts: Product[] = [
  {
    id: 'prod-001',
    name: 'کاور سیلیکونی اصلی آیفون 15 پرو',
    price: 1350000,
    // *** اصلاح مسیر بر اساس ساختار پوشه public ***
    image: '/images/icons and pic/sample-cover-of-iphone.jpg', 
    categorySlug: 'covers',
    brand: 'اپل',
    rating: 4.8,
    reviewCount: 125,
    isFeatured: true,
    description: 'این کاور سیلیکونی با طراحی اپل، به خوبی به دکمه‌ها و خمیدگی‌های آیفون شما می‌نشیند و از آن در برابر خط و خش محافظت می‌کند.'
  },
  {
    id: 'prod-002',
    name: 'گوشی سامسونگ گلکسی S24 Ultra',
    price: 52000000,
    // *** اصلاح مسیر بر اساس ساختار پوشه public ***
    image: '/images/icons and pic/sample-of-samsung.jpg', 
    categorySlug: 'mobiles',
    brand: 'سامسونگ',
    rating: 4.9,
    reviewCount: 250,
    isFeatured: true,
    description: 'پرچمدار جدید سامسونگ با دوربین فوق‌العاده و قلم S-Pen. تجربه‌ای بی‌نظیر از تکنولوژی در دستان شما.'
  },
  {
    id: 'prod-003',
    name: 'آداپتور شارژ سریع 20 وات اپل',
    price: 980000,
    // *** اصلاح مسیر بر اساس ساختار پوشه public ***
    image: '/images/icons and pic/mobile-adaptor.png', 
    categorySlug: 'accessories',
    brand: 'اپل',
    rating: 4.7,
    reviewCount: 310,
    isFeatured: false,
    description: 'شارژر دیواری اپل با توان ۲۰ وات، دستگاه شما را با سرعت بالا و به صورت ایمن شارژ می‌کند.'
  },
  {
    id: 'prod-004',
    name: 'گوشی موبایل وان‌پلاس 12',
    price: 41000000,
    // *** اصلاح مسیر بر اساس ساختار پوشه public ***
    image: '/images/icons and pic/sample-one-plus-mobile.jpg', 
    categorySlug: 'mobiles',
    brand: 'وان‌پلاس',
    rating: 4.8,
    reviewCount: 95,
    isFeatured: true,
    description: 'تجربه سرعت و روانی بی‌نظیر با پرچمدار جدید وان‌پلاس، مجهز به جدیدترین پردازنده اسنپدراگون.'
  },
  {
    id: 'prod-005',
    name: 'کاور چرمی کلاسیک سامسونگ',
    price: 850000,
    // *** اصلاح مسیر بر اساس ساختار پوشه public ***
    image: '/images/icons and pic/samsung-cover.jpg', 
    categorySlug: 'covers',
    brand: 'سامسونگ',
    rating: 4.6,
    reviewCount: 78,
    isFeatured: false,
    description: 'این کاور با چرم طبیعی، ظاهری شیک و کلاسیک به گوشی شما می‌بخشد و از آن محافظت می‌کند.'
  }
];


export class ApiProductRepository implements IProductRepository {
  
  private async simulateDelay(ms: number = 50): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, ms));
  }

  async getAllProducts(): Promise<Product[]> {
    await this.simulateDelay();
    return Promise.resolve(mockProducts);
  }

  async getProductById(id: string): Promise<Product | null> {
    await this.simulateDelay();
    const product = mockProducts.find(p => p.id === id);
    return Promise.resolve(product || null);
  }
  
  async getProductsByCategorySlug(slug: string): Promise<Product[]> {
    await this.simulateDelay();
    const filteredProducts = mockProducts.filter(p => p.categorySlug === slug);
    return Promise.resolve(filteredProducts);
  }

  async getFeaturedProducts(): Promise<Product[]> {
    await this.simulateDelay();
    const featured = mockProducts.filter(p => p.isFeatured);
    return Promise.resolve(featured);
  }

  async getNewestProducts(): Promise<Product[]> {
    await this.simulateDelay();
    const newest = [...mockProducts].reverse().slice(0, 4); 
    return Promise.resolve(newest);
  }
}
