// src/components/home/Brands.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

import { Brand } from '@/domain/entities/brand.entity';

interface BrandsProps {
    brands: Brand[];
}

export default function Brands({ brands }: BrandsProps) {
    if (!brands || brands.length === 0) {
        return null;
    }

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto">
                <h2 className="mb-8 text-center text-2xl font-bold text-gray-700">
                    برندهای معتبر
                </h2>
                <div className="relative">
                    <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white"></div>
                    <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white"></div>

                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        loop={true}
                        freeMode={true}
                        grabCursor={true}
                        slidesPerView="auto"
                        spaceBetween={60} // کمی فاصله را کمتر کردم برای زیبایی بیشتر
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={5000}
                        centerInsufficientSlides={true}
                        className="!px-16 !flex !items-center"
                    >
                        {brands.map((brand) => (
                            <SwiperSlide 
                                key={brand.id} 
                                className="!w-auto" // عرض اسلاید به اندازه محتوای داخلش خواهد بود
                            >
                                {/* ۱. تغییر کلیدی: تگ 'a' اکنون نقش کانتینر با ابعاد ثابت را دارد */}
                                <a
                                    href="#"
                                    title={brand.name}
                                    className="flex h-16 w-32 items-center justify-center p-2" // ارتفاع و عرض ثابت + وسط‌چینی
                                >
                                    {/* ۲. تگ 'img' اکنون داخل کانتینر فیت می‌شود */}
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-h-full max-w-full object-contain transition-all duration-300 filter grayscale hover:filter-none"
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
