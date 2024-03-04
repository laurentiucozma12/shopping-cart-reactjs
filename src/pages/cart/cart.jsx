import { useContext } from 'react';
import { PRODUCTS } from '../../products.js';
import { ShopContext } from '../../context/ShopContext';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem.jsx';

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">Your Cart Items</h1>
      </div>
      <div className="flex flex-col items-center justify-center">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="flex justify-center">
          <div>
            <p className="m-3 text-center">Subtotal: ${totalAmount}</p>
            <button
              onClick={() => navigate('/')}
              className="m-3 h-[50px] w-[150px] cursor-pointer rounded-lg border-none bg-[#131313] text-white"
            >
              Continue Shopping
            </button>
            <button className="m-3 h-[50px] w-[150px] cursor-pointer rounded-lg border-none bg-[#131313] text-white">
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className="mt-10 text-center text-5xl font-bold">
          Your Cart is Empty
        </h1>
      )}
    </div>
  );
}

export default Cart;
