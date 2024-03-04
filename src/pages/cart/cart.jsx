import { useContext } from 'react';
import { PRODUCTS } from '../../products.js';
import { ShopContext } from '../../context/ShopContext';
import CartItem from './CartItem.jsx';

function Cart() {
  const { cartItems } = useContext(ShopContext);

  return (
    <div>
      <div className="dlex-col flex items-center justify-center">
        <h1 className="text-5xl font-bold">Your Cart Items</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
