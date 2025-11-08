// src/app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google"; // فونت وزیرمتن
import "./globals.css";

// تنظیمات فونت وزیرمتن
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
      <body className={`${vazirmatn.className} bg-background-light text-text-dark`}>
        {children}
      </body>
    </html>
  );
}
