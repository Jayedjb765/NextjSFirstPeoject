

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

    </div>
  );
};

export default HomePage;