// src/components/home/HeroSlider.tsx

'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import { Slide } from '@/domain/entities/slide.entity';
import HeroSlideItem from './HeroSlideItem'; // ✅ کامپوننت جدید را import می‌کنیم

interface HeroSliderProps {
  slides: Slide[];
}

export default function HeroSlider({ slides }: HeroSliderProps) {
  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[60vh] lg:h-[80vh] text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        // ✅ افکت Fade نرم‌تر و حرفه‌ای‌تر
        fadeEffect={{
          crossFade: true, 
        }}
        loop={true}
        autoplay={{
          delay: 6000, // زمان را کمی بیشتر می‌کنیم تا انیمیشن‌ها فرصت نمایش داشته باشند
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        // ✅ این کلاس برای اعمال استایل‌های سفارشی از globals.css ضروری است
        className="h-full w-full hero-slider" 
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            {/* ✅ استفاده از کامپوننت جداگانه برای هر اسلاید */}
            <HeroSlideItem 
              slide={slide} 
              isFirstSlide={index === 0} // پراپ priority فقط به اسلاید اول داده می‌شود
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
