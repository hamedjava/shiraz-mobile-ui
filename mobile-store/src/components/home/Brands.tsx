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

    // برای حرکت بی‌نهایت و طبیعی، داده‌ها را چند بار تکرار می‌کنیم
    const extendedBrands = [...brands, ...brands, ...brands];

    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        مورد اعتماد برترین‌های صنعت
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg leading-8 text-gray-600">
                        ما با افتخار با شرکت‌های پیشرو در صنعت همکاری می‌کنیم تا بهترین نتایج را برای شما به ارمغان بیاوریم.
                    </p>
                </div>

                {/* 
                  ✅ کانتینر اصلی که کلاس mask-image را از globals.css دریافت می‌کند.
                  دیگر نیازی به div های گرادینت جداگانه نیست.
                */}
                <div className="brands-fade-carousel">
                    <Swiper
                        modules={[Autoplay, FreeMode]}
                        loop={true}
                        // ✅ پیکربندی FreeMode برای تعامل دوگانه
                        freeMode={{
                            enabled: true,
                            sticky: false, // اجازه می‌دهد اسلایدر آزادانه حرکت کند
                            momentum: true, // شتاب پس از سوایپ کاربر
                            momentumRatio: 0.5, // میزان شتاب
                            momentumVelocityRatio: 0.5,
                        }}
                        grabCursor={true}
                        slidesPerView="auto"
                        spaceBetween={80} // افزایش فاصله برای زیبایی بیشتر
                        // ✅ پیکربندی Autoplay برای حرکت آرام و مداوم
                        autoplay={{
                            delay: 1, // شروع حرکت تقریباً بلافاصله
                            disableOnInteraction: false, // مهم: پس از تعامل کاربر، حرکت خودکار ادامه می‌یابد
                            pauseOnMouseEnter: true, // بهترین تجربه کاربری: توقف با نگه داشتن ماوس
                        }}
                        speed={6000} // سرعت حرکت آرام و یکنواخت
                        className="h-24" // ارتفاع برای جای دادن انیمیشن scale
                    >
                        {extendedBrands.map((brand, index) => (
                            <SwiperSlide
                                key={`${brand.id}-${index}`}
                                style={{ width: 'auto' }} // اجازه می‌دهد عرض هر اسلاید متناسب با محتوا باشد
                                className="flex items-center"
                            >
                                <a
                                    href="#"
                                    title={brand.name}
                                    className="flex h-full w-40 items-center justify-center p-2" // کمی عریض‌تر
                                >
                                    <img
                                        src={brand.logo}
                                        alt={brand.name}
                                        className="max-h-10 w-auto object-contain" // اندازه کمی کوچکتر برای ظرافت بیشتر
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
