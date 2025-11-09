// src/infrastructure/data/api/api-category.repository.ts

import { Category } from "@/domain/entities/category.entity";
import { ICategoryRepository } from "@/domain/repositories/icategory.repository";

// داده‌های Mock با مسیرهای صحیح آیکون‌ها بر اساس ساختار پوشه شما به‌روز شد
const mockCategories: Category[] = [
    {
        id: "cat-1",
        name: "موبایل",
        // ❌ مسیر قبلی و اشتباه: "/images/icons/mobile-icon.svg"
        iconUrl: "/icons/mobile-icon.svg", // ✅ مسیر صحیح بر اساس ساختار پوشه‌ها
        href: "/categories/mobiles",
    },
    {
        id: "cat-2",
        name: "لپ تاپ",
        iconUrl: "/icons/laptop-icon.svg", // ✅ مسیر صحیح بر اساس ساختار پوشه‌ها
        href: "/categories/laptops",
    },
    {
        id: "cat-3",
        name: "ساعت هوشمند",
        iconUrl: "/icons/smartwatch-icon.svg", // ✅ مسیر صحیح بر اساس ساختار پوشه‌ها
        href: "/categories/smartwatches",
    },
    {
        id: "cat-4",
        name: "لوازم جانبی",
        iconUrl: "/icons/accessories-icon.svg", // ✅ مسیر صحیح بر اساس ساختار پوشه‌ها
        href: "/categories/accessories",
    },
];

export class ApiCategoryRepository implements ICategoryRepository {
    async getAllCategories(): Promise<Category[]> {
        // شبیه‌سازی تاخیر شبکه
        await new Promise(resolve => setTimeout(resolve, 50));
        return mockCategories;
    }
}
