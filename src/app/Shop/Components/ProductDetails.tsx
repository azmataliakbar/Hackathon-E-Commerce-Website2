'use client'

import Image from 'next/image';
import { useState } from 'react';
import Header1 from '../../components/Header1';
import Last from '../../components/Footer';
import { useRouter } from 'next/navigation';

type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  slug: string;
};

export default function ProductDetails({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const router = useRouter();

  const handleAddToCart = () => {
    // Implement your add to cart logic here
    console.log(`Added ${quantity} of ${product.title} to cart`);
    router.push('/Cart');
  };

  return (
    <div className="bg-white min-h-screen">
      <Header1 />

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={600}
              height={400}
              className="bg-[#FFF9E5] rounded-lg hover:scale-110 mx-auto"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-black hover:scale-y-150 hover:text-red-500">
              {product.title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black hover:scale-y-150 hover:text-blue-500">
              {product.price}
            </p>
            <div className="flex items-center gap-2">
              {[...Array(4)].map((_, i) => (
                <Image
                  key={i}
                  src="/star1.png"
                  alt="Full Star"
                  width={25}
                  height={2}
                  className="hover:scale-150"
                />
              ))}
              <Image
                src="/star2.png"
                alt="Half Star"
                width={25}
                height={2}
                className="hover:scale-150"
              />
              <p className="text-gray-400 ml-6 hover:scale-125 hover:text-blue-500">
                5 Customer Reviews
              </p>
            </div>
            <p className="text-gray-500 mt-4 hover:text-blue-500 hover:scale-y-125">
              Product description goes here. Add more details about {product.title}.
            </p>

            <div className="mt-4">
              <label
                htmlFor="quantity"
                className="text-gray-500 font-bold"
              >
                Quantity:
              </label>
              <div className="flex items-center gap-4 mt-2">
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                  className="border border-gray-300 text-black font-bold bg-gray-200 px-2 py-1 rounded-md text-center w-16"
                />
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-110"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Last />
    </div>
  );
}

