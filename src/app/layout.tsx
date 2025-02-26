import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; // التأكد من صحة المسار

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "متجر Timora - أفضل الساعات بأفضل الأسعار",
  description: "مرحبًا بكم في متجر Timora حيث نقدم لكم أفضل الساعات بأفضل الأسعار. اكتشف تشكيلتنا الرائعة الآن!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100`}>
        <Navbar /> {/* عرض شريط التنقل */}
        <main className="container mx-auto p-4">{children}</main>
                {/* ✅ إضافة الفوتر هنا */}
                <footer className="bg-gray-900 text-white text-center p-4 mt-8">
          <p className="text-sm">© 2025 جميع الحقوق محفوظة. لا يُسمح بإعادة نشر أو توزيع أي جزء من هذا الموقع دون إذن مسبق من المالك.</p>
        </footer>
      </body>
    </html>
  );
}
