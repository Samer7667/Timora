"use client";
import React from "react";

const About = () => {
  return (
    
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5 text-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">من نحن</h1>
      <p className="text-lg text-gray-700 max-w-2xl">
        مرحبًا بك في <span className="font-bold">Timora</span> – حيث تلتقي الأناقة بالجودة! ⌚✨
      </p>
      <p className="text-lg text-gray-700 max-w-2xl mt-2">
        نحن في <span className="font-bold">Timora</span> نؤمن بأن الساعة ليست مجرد أداة لمعرفة الوقت، بل هي تعبير عن الأناقة والتميز.
        نقدم لك <span className="font-bold">مجموعة مختارة من الساعات الفاخرة</span> التي تجمع بين التصميم العصري والجودة العالية والأسعار المناسبة.
      </p>
      <ul className="text-lg text-gray-700 list-disc mt-4 text-right max-w-xl">
        <li>✔ تصاميم راقية تناسب جميع الأذواق</li>
        <li>✔ جودة مضمونة من أفضل العلامات التجارية</li>
        <li>✔ أسعار تنافسية وعروض حصرية</li>
        <li>✔ خدمة عملاء مميزة لضمان رضاك</li>
      </ul>
      <h2 className="text-2xl font-semibold text-blue-600 mt-6">📞 للتواصل معنا</h2>
      <p className="text-lg text-gray-700">الاسم: <span className="font-bold">سامر عبدالعزيز الفيفي</span></p>
      <p className="text-lg text-gray-700">رقم الجوال: <span className="font-bold">0535620007</span></p>
    </main>
  );
};

export default About;