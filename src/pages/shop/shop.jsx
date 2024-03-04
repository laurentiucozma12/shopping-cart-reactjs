import { PRODUCTS } from '../../products.js';
import Product from './Product';
import reactIcon from '../../assets/react.svg';

function Shop() {
  return (
    <main>
      <div className="mb-4 mt-24 flex justify-center">
        <img
          src={reactIcon}
          alt="react icon1"
          width="50"
          height="50"
          className="h-9 w-9 sm:h-14 sm:w-14"
        />
        <h1 className="text-4xl font-bold leading-8 sm:text-6xl sm:leading-[48px]">
          React Shop
        </h1>
        <img
          src={reactIcon}
          alt="react icon2"
          width="56"
          height="56"
          className="h-9 w-9 sm:h-14 sm:w-14"
        />
      </div>
      <div
        className="grid h-auto w-full grid-cols-1 place-items-center 
                      sm:grid-cols-2
                      xl:grid-cols-3"
      >
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
