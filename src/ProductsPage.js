// ProductsPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const products = [
    { id: 'product_id_1', name: 'Product 1' },
    { id: 'product_id_2', name: 'Product 2' },
    // Add more products here
  ];

  return (
    <div>
      <h1>Products</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
