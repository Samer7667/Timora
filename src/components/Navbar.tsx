import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-[#2B2F38] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* شعار الموقع */}
        <Link href="/">
          <Image
            src="/logo.jpg"
            alt="Timora Logo"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* الروابط مع تباعد أفضل */}
        <ul className="flex space-x-8 rtl:space-x-reverse">
          <li>
            <Link href="/" className="hover:text-[#FFD700]">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/products" className="hover:text-[#FFD700]">
              المنتجات
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#FFD700]">
              من نحن
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
