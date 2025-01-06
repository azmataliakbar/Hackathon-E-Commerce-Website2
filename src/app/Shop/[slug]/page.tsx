
// src/app/shop/[slug]/page.tsx
"use client"
import { notFound, useRouter } from 'next/navigation';
import Image from 'next/image';
import Header1 from '../../components/Header1';
import Last from '../../components/Footer';
import { useCart } from '../../context/CartContext';
import { useEffect } from 'react';

// Define the type for ProductPageProps
type ProductPageProps = {
  params: Promise<{ slug: string }>; // Wrapping in a Promise if needed
};




  const products = [
    { id: 1, image: '/shopsofa1.png', title: 'Trenton modular sofa, 1 seater', price: '25000', slug:'Product1' },
    { id: 2, image: '/shopchairset1.png', title: 'Table Chair Set, 6+1 set', price: '45000', slug:'Product2' },
    { id: 3, image: '/shopchairset2.png', title: 'Table Stool Set, 6+1 set', price: '40000', slug:'Product3' },
    { id: 4, image: '/shopmirror.png', title: 'Plain console with teak mirror', price: '20000', slug:'Product4' },
    { id: 5, image: '/shoptable1.png', title: 'Plain Table 1', price: '15000', slug:'Product5' },
    { id: 6, image: '/shoptable2.png', title: 'Square Table 2', price: '20000', slug:'Product6' },
    { id: 7, image: '/shoptable3.png', title: 'Round Table 3', price: '30000', slug:'Product7' },
    { id: 8, image: '/shoptable4.png', title: 'Table with 2 draws', price: '45000', slug:'Product8' },
    { id: 9, image: '/shoptable5.png', title: 'Table with designed legs', price: '35000', slug:'Product9' },
    { id: 10, image: '/shopcloset1.png', title: 'Cuboard with door and art work', price: '45000', slug:'Product10' },
    { id: 11, image: '/shopchairset3.png', title: 'Table with 4 Chairs, 4 + 1 set', price: '35000', slug:'Product11' },
    { id: 12, image: '/shopchairset4.png', title: 'Table with 2 Chairs, 2 + 1 set', price: '25000', slug:'Product12' },
    { id: 13, image: '/shoptable6.png', title: 'Table with long leg 6', price: '25000', slug:'Product13' },
    { id: 14, image: '/shopsofa2.png', title: 'Trenton modular sofa, 5 seater', price: '65000', slug:'Product14' },
    { id: 15, image: '/shopsofa3.png', title: 'Trenton modular sofa, 3 seater', price: '35000', slug:'Product15' },
    { id: 16, image: '/shopsofa4.png', title: 'Trenton modular sofa, 5 seater', price: '55000', slug:'Product16' },
  ];

  export default function ProductPage({ params }: ProductPageProps) {
    const { addToCart } = useCart();
    const router = useRouter();
  
    // Find the product based on the slug from the dynamic URL
    const product = products.find(async (p) => p.slug === (await params).slug);
  
    useEffect(() => {
      if (!product) {
        notFound(); // Trigger 404 if the product is not found
      }
    }, [product]);
  
    const handleAddToCart = () => {
      if (product) {
        addToCart({
          id: product.id,
          name: product.title,
          price: Number(product.price),
          image: product.image,
          quantity: 1,
        });
  
        router.push('/Cart'); // Navigate to Cart page
      }
    };
  
    return (
      <div className="bg-white min-h-screen">
        <Header1 />
        <main className="container mx-auto px-4 py-10">
          {product ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="flex justify-center">
                <Image
                  src={product.image}
                  alt={product.title}
                  width={400}
                  height={400}
                  className="rounded-lg hover:scale-110"
                />
              </div>
  
              {/* Product Details */}
              <div>
                <h1 className="text-3xl text-black font-bold mb-4">{product.title}</h1>
                <p className="text-2xl text-red-500 font-bold ml-1 mb-4">Rs. {product.price}</p>
  
                {/* Add to Cart Button */}
                <div className="mt-4">
                  <button
                    onClick={handleAddToCart}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>Product not found</div> // Fallback in case the product is not found
          )}
        </main>
        <Last />
      </div>
    );
  }