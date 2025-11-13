// src/infrastructure/repositories/api/api.slide.repository.ts

import { Slide } from "@/domain/entities/slide.entity";
import { ISlideRepository } from "@/domain/repositories/islide.repository";
import { v4 as uuidv4 } from 'uuid';

export class ApiSlideRepository implements ISlideRepository {
    private slides: Slide[] = [
        {
            id: uuidv4(),
            title: "جدیدترین پرچمدار اینجاست",
            subtitle: "تجربه سرعت و زیبایی بی‌نظیر با نسل جدید گوشی‌های هوشمند.",
            imageUrl: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            buttonText: "همین حالا بخرید",
            link: "/products/smartphones/new-flagship"
        },
        {
            id: uuidv4(),
            title: "لوازم جانبی حرفه‌ای",
            subtitle: "هدفون، ساعت هوشمند و هرآنچه برای تکمیل اکوسیستم دیجیتال خود نیاز دارید.",
            imageUrl: "https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            buttonText: "مشاهده لوازم جانبی",
            link: "/categories/accessories"
        },
        {
            id: uuidv4(),
            title: "تخفیف ویژه لپ‌تاپ‌ها",
            subtitle: "تا ۳۰٪ تخفیف برای لپ‌تاپ‌های منتخب. بهترین فرصت برای ارتقا!",
            imageUrl: "https://images.pexels.com/photos/205470/pexels-photo-205470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            buttonText: "مشاهده تخفیف‌ها",
            link: "/deals/laptops"
        },
    ];

    async getSlides(): Promise<Slide[]> {
        return Promise.resolve(this.slides);
    }
}