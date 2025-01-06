// src/app/page.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Your Store</h1>
      <div>
        <Link href="/SingleProduct">
          <button>View Product</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
