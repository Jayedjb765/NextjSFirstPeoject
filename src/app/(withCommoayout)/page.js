

import Link from 'next/link';
import ProductCard from '../../components/products/ProductCard'

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    next: {
      revalidate: 5,
    }
  })
  const products = await res.json()



  return (
    <div className="text-center">
      <h1 className="text-7xl">Hellow World</h1>
      <div className='grid grid-cols-3 gap-8 w-[90%] mx-auto'>
        {products.slice(0, 3).map(product => <ProductCard key={product.id} product={product} />)}

      </div>
      <Link href='/products'><div className="card-actions justify-center mt-10">
        <button className="btn btn-primary">Show more</button>
      </div></Link>

    </div>
  );
};

export default HomePage;