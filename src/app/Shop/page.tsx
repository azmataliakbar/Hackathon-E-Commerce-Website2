import Image from 'next/image';
import Link from 'next/link';
import Header1 from '../components/Header1';
import Last from '../components/Footer';
import ShopSection from './Components/ShopSection';

export default function Shop() {
  const products = [
    { id: 1, image: '/shopsofa1.png', title: 'Trenton modular sofa, 1 seater', price: '25000', slug:'Product1' },
    { id: 2, image: '/shopchairset1.png', title: 'Table Chair Set, 6+1 set', price: '45,000', slug:'Product2' },
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

  return (
    <div>
      <Header1 />

      {/* Shop section - 1 */}
      <div className="relative">
        <Image
          src="/shop11.png"
          alt="Shop Banner"
          width={1520}
          height={400}
          className="w-full h-[300px] object-cover"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <Image
            src="/shop1logo.png"
            alt="Shop1logo"
            width={60}
            height={60}
            className="hover:scale-150 ml-10"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-black hover:scale-150 hover:text-red-500">Shop</h1>
          <p className="text-lg sm:text-xl text-black font-bold hover:scale-150 hover:text-blue-500">Home &gt; Shop</p>
        </div>
      </div>

      {/* Shop section - 2 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex items-center space-x-4">
            <Image
              src="/shopfilter1.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <button className="text-black text-xl sm:text-2xl font-bold hover:scale-125 hover:text-blue-600">
              Filter
            </button>
            <Image
              src="/shopfilter2.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter3.png"
              alt="Shop Banner"
              width={30}
              height={30}
              className="hover:scale-150"
            />
            <Image
              src="/shopfilter4.png"
              alt="Shop Banner"
              width={4}
              height={2}
              className="hover:scale-125"
            />
          </div>
          <div className="text-black font-bold hover:scale-150 hover:text-blue-600">
            Showing 1-16 of 32 results
          </div>
          <div className="flex flex-col sm:flex-row items-center space-x-4 gap-4 sm:gap-0">
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Show</button>
            <input
              type="text"
              placeholder="16"
              className="border border-gray-300 px-1 py-1 w-[40px] rounded-md text-center text-sm"
            />
            <button className="text-black font-bold hover:scale-125 hover:text-blue-600">Sort By</button>
            <input
              type="text"
              placeholder="Default"
              className="border border-gray-300 px-1 py-1 w-[80px] rounded-md text-center text-sm"
            />
          </div>
        </div>
      </div>

      {/* Shop section - 3 */}
      <div className="bg-white min-h-screen">
        <main className="container mx-auto py-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center text-black hover:text-red-500 hover:scale-125 md:hover:scale-150 lg:hover:scale-150">
            Our Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
  <div key={product.id} className="border p-4 rounded-lg shadow-lg hover:scale-105 transition-all">
    <Image
      src={product.image}
      alt={product.title}
      width={320}
      height={240}
      className="w-full h-64 object-cover rounded-lg"
    />
    <h3 className="text-base text-gray-700 font-semibold mt-4">{product.title}</h3>
    <p className="text-lg font-bold text-gray-700 mt-2">{product.price}</p>
    <Link href={`/Shop/${product.slug}`}>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-500 transition"
      >
        Order Now
      </button>
    </Link>
  </div>
))}

          </div>
        </main>
      </div>

      {/* Shop section - 4 */}
      <div className="bg-[#FAF4F4] p-4">
        <div className="flex justify-between">
          <div className="text-center">
            <section id="returns">
              <ShopSection />
            </section>
          </div>
        </div>
      </div>

      <Last />
    </div>
  );
}



