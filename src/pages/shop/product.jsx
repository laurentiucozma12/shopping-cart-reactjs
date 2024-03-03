import React from 'react';

function Product(props) {
  const { id, productName, price, productImage } = props.data;
  return (
    <div className="flex h-96 w-72 flex-col items-center justify-center rounded-2xl duration-300 hover:cursor-pointer hover:ease-in">
      <img src={productImage} alt="" className="w-96" />
      <div className="text-center">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button className="min-w-24 border-3 rounded-2xl border-solid border-[131313] bg-transparent px-3 py-1 duration-200 hover:cursor-pointer hover:bg-[#131313] hover:text-white">
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
