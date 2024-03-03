import React from 'react';
import { PRODUCTS } from '../../products.js';
import Product from './product.jsx';

function Shop() {
  return (
    <div className="shop">
      <div className="mt-24 text-center text-5xl">
        <h1>Shop Name</h1>
      </div>
      <div className="grid h-auto w-full grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
