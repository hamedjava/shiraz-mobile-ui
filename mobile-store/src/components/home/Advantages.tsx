// src/components/home/Advantages.tsx

import { ShieldCheck, Truck, Headset, WalletCards } from 'lucide-react';
import React from 'react';

const advantages = [
  {
    icon: <Truck size={40} className="text-primary-yellow" />,
    title: 'ارسال سریع و رایگان',
    description: 'برای سفارش‌های بالای ۵۰۰ هزار تومان',
  },
  {
    icon: <ShieldCheck size={40} className="text-primary-yellow" />,
    title: 'ضمانت اصالت کالا',
    description: 'تمامی محصولات اورجینال و معتبر',
  },
  {
    icon: <Headset size={40} className="text-primary-yellow" />,
    title: 'پشتیبانی ۲۴/۷',
    description: 'همیشه پاسخگوی سوالات شما هستیم',
  },
  {
    icon: <WalletCards size={40} className="text-primary-yellow" />,
    title: 'پرداخت امن',
    description: 'درگاه پرداخت امن و مطمئن بانکی',
  },
];

const Advantages = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 border border-gray-200 rounded-lg hover:shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-4">{advantage.icon}</div>
              <h3 className="text-xl font-bold text-text-dark mb-2">{advantage.title}</h3>
              <p className="text-accent-gray">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
