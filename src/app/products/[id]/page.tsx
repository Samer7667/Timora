import Link from 'next/link';
const ProductDetails = ({ params }: { params: { id: string } }) => {
    // بيانات المنتجات الوهمية
    const products: Record<number, { name: string; price: string; description: string }> = {
      1: { name: "ساعة رولكس", price: "1500 ريال", description: "ساعة فاخرة بجودة عالية." },
      2: { name: "ساعة كاسيو", price: "200 ريال", description: "ساعة بسيطة وأنيقة بسعر مناسب." },
      3: { name: "ساعة سامسونج الذكية", price: "800 ريال", description: "ساعة ذكية بأحدث التقنيات." }
    };
  
    const product = products[parseInt(params.id)];
  
    return (
      <main className="min-h-screen p-5 bg-gray-100 text-center">
        {product ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="mt-3">{product.description}</p>
            <Link href="/products">العودة للمنتجات</Link>

          </div>
        ) : (
          <h2 className="text-2xl text-red-600">لم يتم العثور على المنتج!</h2>
        )}
      </main>
    );
  };
  
  export default ProductDetails;
  