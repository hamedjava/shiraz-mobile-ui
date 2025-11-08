// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer"; // <-- گام ۱: وارد کردن کامپوننت فوتر

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
      <body className={`${vazirmatn.className} bg-background-light text-text-dark flex flex-col min-h-screen`}>
        <Header />
        
        {/* محتوای اصلی صفحه که قابلیت رشد دارد */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer /> {/* <-- گام ۲: قرار دادن کامپوننت فوتر در انتهای صفحه */}
      </body>
    </html>
  );
}
