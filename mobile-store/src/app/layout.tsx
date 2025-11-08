// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header"; // گام ۱: وارد کردن کامپوننت هدر

const vazirmatn = Vazirmatn({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "فروشگاه لوازم جانبی موبایل",
  description: "بهترین لوازم جانبی برای گوشی هوشمند شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      {/* گام ۲: اضافه کردن کلاس‌ها برای چیدمان صحیح */}
      <body className={`${vazirmatn.className} bg-background-light text-text-dark flex flex-col min-h-screen`}>
        <Header /> {/* گام ۳: قرار دادن کامپوننت هدر در بالای صفحه */}
        
        {/* گام ۴: قرار دادن محتوای اصلی در یک div با قابلیت رشد */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* <Footer /> در آینده فوتر اینجا قرار خواهد گرفت */}
      </body>
    </html>
  );
}
