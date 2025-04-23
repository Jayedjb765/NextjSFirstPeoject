import React from "react";
import ProductCard from "../../components/products/ProductCard";

const ProductsPage = async () => {
  const res = await fetch("http://localhost:5000/products", {
    cache: "no-store",
  });
  const products = await res.json();
  console.log(products);
  return (
    <div>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
