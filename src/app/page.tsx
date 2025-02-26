import Link from 'next/link';
const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">مرحبًا بك في متجر Timora</h1>
      <p className="text-lg text-gray-700 mt-2">اكتشف أفضل الساعات بأفضل الأسعار!</p>
      <Link href="/products">
  <span className="text-blue-600 hover:underline">تصفح المنتجات</span>
</Link>

    </main>
  );
};

export default Home;
