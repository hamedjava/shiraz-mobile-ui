// src/components/home/HeroSlideItem.tsx

import React from 'react';
import Image from 'next/image';
import { Slide } from '@/domain/entities/slide.entity';

interface HeroSlideItemProps {
  slide: Slide;
  isFirstSlide: boolean;
}

export default function HeroSlideItem({ slide, isFirstSlide }: HeroSlideItemProps) {
  return (
    <div className="relative h-full w-full">
      {/* 
        ✅ استفاده از next/image برای بهینه‌سازی کامل:
        - fill: تصویر کل والد خود (div) را پر می‌کند.
        - object-cover: معادل bg-cover عمل می‌کند و نسبت تصویر را حفظ می‌کند.
        - priority: به Next.js می‌گوید این تصویر (فقط برای اسلاید اول) حیاتی است و باید فوراً لود شود (بهبود LCP).
        - sizes: به مرورگر کمک می‌کند تا بهترین نسخه تصویر را بر اساس اندازه صفحه انتخاب کند.
      */}
      <Image
        src={slide.imageUrl}
        alt={slide.title}
        fill
        priority={isFirstSlide}
        sizes="(max-width: 768px) 100vw, 100vw"
        className="object-cover"
      />
      {/* یک لایه تیره برای خوانایی بهتر متن */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* محتوای اسلاید */}
      <div className="relative z-10 h-full w-full flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          {/* کلاس 'slide-content' برای هدف‌گیری انیمیشن‌ها در CSS استفاده می‌شود */}
          <div className="max-w-2xl text-right space-y-4 slide-content">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              {slide.title}
            </h1>
            <p className="text-lg md:text-xl font-light">
              {slide.subtitle}
            </p>
            <a
              href={slide.link}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
            >
              {slide.buttonText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
