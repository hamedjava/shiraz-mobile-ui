// src/components/home/Features.tsx

import React from 'react';

// --- تعریف کامپوننت‌های آیکون به صورت داخلی ---
// به جای import کردن از فایل‌های خارجی، کد SVG را اینجا قرار می‌دهیم.

const ShippingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 0 1 3.375-3.375h9.75a3.375 3.375 0 0 1 3.375 3.375v1.875M10.5 6h.008v.008H10.5V6Z" />
  </svg>
);

const GuaranteeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
);

const SupportIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m12 0v-1.5a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v1.5m12 0v-1.5a6 6 0 0 0-6-6v0a6 6 0 0 0-6 6v1.5m6 7.5h.008v.008H12v-.008Z" />
  </svg>
);

const PaymentIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 21Z" />
  </svg>
);

const featuresData = [
    { icon: ShippingIcon, title: 'ارسال سریع و رایگان', description: 'برای سفارش‌های بالای ۵۰۰ هزار تومان' },
    { icon: GuaranteeIcon, title: 'ضمانت اصالت کالا', description: 'تمامی محصولات اورجینال و معتبر' },
    { icon: SupportIcon, title: 'پشتیبانی ۲۴/۷', description: 'همیشه پاسخگوی سوالات شما هستیم' },
    { icon: PaymentIcon, title: 'پرداخت امن', description: 'درگاه پرداخت امن و مطمئن بانکی' },
];

export default function Features() {
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featuresData.map((feature) => {
                        const IconComponent = feature.icon; 
                        return (
                            <div 
                                key={feature.title} 
                                className="flex flex-col items-center text-center p-6 bg-white border border-gray-200 rounded-xl"
                            >
                                <div className="mb-4 text-primary">
                                    <IconComponent className="w-12 h-12" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
