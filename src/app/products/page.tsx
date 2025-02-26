import Link from 'next/link';
const Products = () => {
  // قائمة المنتجات الوهمية
  const products = [
    { id: 1, name: "ساعة رولكس", price: "1500 ريال" },
    { id: 2, name: "ساعة كاسيو", price: "200 ريال" },
    { id: 3, name: "ساعة سامسونج الذكية", price: "800 ريال" }
  ];

  return (
    <>
      <main className="min-h-screen p-5 bg-gray-100">
        <h2 className="text-3xl font-bold text-center text-blue-600">قائمة المنتجات</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <Link href="/products">عرض التفاصيل</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Products;
