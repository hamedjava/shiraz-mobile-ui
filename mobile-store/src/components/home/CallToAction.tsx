// src/components/home/CallToAction.tsx

import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-100">
        <div className="container mx-auto px-4 py-16">
            <div className="bg-primary-yellow rounded-lg shadow-lg p-8 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-4">
                    تخفیف‌های شگفت‌انگیز در راه است!
                </h2>
                <p className="text-lg text-gray-800 mb-8 max-w-2xl mx-auto">
                    برای اطلاع از جدیدترین محصولات و دریافت کدهای تخفیf، در خبرنامه ما عضو شوید.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input 
                        type="email" 
                        placeholder="ایمیل خود را وارد کنید"
                        className="px-6 py-3 rounded-md w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-text-dark"
                    />
                    <button className="bg-text-dark text-white font-bold py-3 px-8 rounded-md hover:bg-gray-800 transition-colors duration-300">
                        عضویت
                    </button>
                </div>
            </div>
        </div>
    </section>
  );
};

export default CallToAction;
