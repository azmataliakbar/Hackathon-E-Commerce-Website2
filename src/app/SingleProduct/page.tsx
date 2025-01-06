'use client'
import Link from "next/link";
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Header1 from '../components/Header1';
import Last from '../components/Footer';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Shop() {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const router = useRouter();

  const product = {
    id: 1,
    name: 'Asgaard sofa',
    price: 65000,
    description: 'Asgaard Sofa Set 5 Seaters offers the perfect blend of style and comfort. Designed with premium materials and a spacious layout, this sofa set is ideal for hosting guests or relaxing with family. Its elegant design and plush cushions ensure a luxurious seating experience for any living space.',
    image: '/sofasofa.png',
    sizes: ['L', 'XL', 'XS'],
    colors: ['Blue', 'Beige', 'Brown'],
    sku: 'SS001',
    category: 'Sofas',
    tags: ['Sofa', 'Chair', 'Home', 'Shop'],
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size before adding to cart.');
      return;
    }
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      size: selectedSize,
    });
    router.push('/Cart');
  };

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
  };

  return (
    <div className="bg-white min-h-screen">
      <Header1 />

      <main className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex flex-row lg:flex-col gap-2 md:gap-4 lg:gap-4">
              <Image
                src="/sofa11.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa22.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa33.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
              <Image
                src="/sofa44.png"
                alt="Full Star"
                width={100}
                height={100}
                className="hover:scale-125 w-[80px] h-[60px] md:w-40 md:h-20 lg:w-40 lg:h-20 bg-[#FFF9E5] rounded-lg"
              />
            </div>
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="bg-[#FFF9E5] rounded-lg hover:scale-110 mx-auto"
            />
          </div>

          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-black hover:scale-y-150 hover:text-red-500">
              {product.name}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-black hover:scale-y-150 hover:text-blue-500">
              Rs. {product.price}
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
            <p className="text-gray-500 mt-4 hover:text-blue-500 hover:scale-y-125">{product.description}</p>

            <div className="mt-4">
              <span className="text-gray-500 font-bold">Size:</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    className={`border px-2 py-1 rounded-md ${
                      selectedSize === size
                        ? 'bg-gray-300 text-black font-bold'
                        : 'border-gray-300 text-gray-700 font-bold hover:text-red-500 hover:bg-yellow-100'
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 ">
              <span className="text-gray-500 font-bold">Color:</span>
              <div className="flex items-center gap-2 mt-2">
                {['/bluecircle.png', '/blackcircle.png', '/goldencircle.png'].map((color, i) => (
                  <Image key={i} src={color} alt={`Color ${i}`} width={20} height={20} />
                ))}
              </div>
            </div>

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
                <Link href="/Cart">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 hover:scale-110"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Last />
    </div>
  );
}



