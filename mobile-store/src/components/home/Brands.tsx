// src/components/home/Brands.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';

const brandsData = [
    // برای تست، می‌توانید تعداد برندها را کم کنید تا وسط‌چینی را ببینید
    { name: 'Brand A', logo: '/images/brands/brand-logo-1.svg' },
    { name: 'Brand B', logo: '/images/brands/brand-logo-2.svg' },
    { name: "Brand C", logo: "/images/brands/brand-logo-3.svg" },
    { name: "Brand D", logo: "/images/brands/brand-logo-4.svg" },
    { name: "Brand E", logo: "/images/brands/brand-logo-5.svg" },
    { name: "Brand F", logo: "/images/brands/brand-logo-6.svg" },
    { name: "Brand G", logo: "/images/brands/brand-logo-7.svg" },
    { name: "Brand H", logo: "/images/brands/brand-logo-8.svg" },
];

export default function Brands() {
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
                        spaceBetween={80}
                        autoplay={{
                            delay: 1,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        speed={5000}
                        
                        // --- راه‌حل نهایی برای وسط‌چینی کامل ---
                        centerInsufficientSlides={true} // کلیدی: اگر اسلایدها کم باشند، کل گروه را وسط‌چین می‌کند.
                        // ------------------------------------------

                        className="!px-16 !flex !items-center" // اطمینان از وسط‌چینی عمودی
                    >
                        {brandsData.map((brand) => (
                            <SwiperSlide 
                                key={brand.name} 
                                className="!w-auto flex items-center" // وسط‌چینی عمودی محتوای داخلی هر اسلاید
                            >
                                <a href="#" title={brand.name} className="block">
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="h-10 w-auto object-contain transition-all duration-300 filter grayscale hover:filter-none"
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
