"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Header1 from "../../components/Header1";
import Last from "../../components/Footer";


type Product = {
  id: number;
  image: string;
  title: string;
  price: string;
  slug: string;
};

// Product data (shared with the Shop page)
const products: Product[] = [
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

type ProductPageProps = {
  params: { slug: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  // Find the product by slug
  const product = products.find((p) => p.slug === slug);

  // If the product is not found, return a 404
  if (!product) {
    notFound();
  }

  return (
    <div>
      <Header1 />

      <div className="container mx-auto py-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src={product.image}
            alt={product.title}
            width={500}
            height={500}
            className="w-full md:w-1/2 object-cover rounded-lg"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <p className="text-xl text-gray-700 font-semibold">Price: {product.price}</p>
            <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>

      <Last />
    </div>
  );
}