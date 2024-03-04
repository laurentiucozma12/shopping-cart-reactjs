import { useContext } from 'react';
import { PRODUCTS } from '../../products.js';
import { ShopContext } from '../../context/ShopContext.jsx';
import { useNavigate } from 'react-router-dom';
import CartItem from './CartItem.jsx';

function Cart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();

  return (
    <main className="mb-4 mt-4">
      <div className="flex items-center justify-center">
        <h1 className="text-center text-5xl font-bold">Your Cart Items</h1>
      </div>
      <div className="flex items-center justify-center">
        <div>
          {PRODUCTS.map((product) => {
            if (cartItems[product.id] !== 0) {
              return <CartItem key={product.id} data={product} />;
            }
          })}
        </div>
      </div>
      {totalAmount > 0 ? (
        <div className="flex justify-center">
          <div>
            <p className="m-4 text-center text-2xl font-bold">
              Subtotal: ${totalAmount}
            </p>
            <div className="block sm:flex">
              <button
                onClick={() => navigate('/')}
                className="m-4 block min-w-56 cursor-pointer rounded-lg border-none bg-[#131313] p-3 text-xl font-bold text-white"
              >
                Continue Shopping
              </button>
              <button className="m-4 block min-w-56 cursor-pointer rounded-lg border-none bg-[#131313] p-3 text-xl font-bold text-white">
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <h1 className="mt-10 text-center text-5xl font-bold">
          Your Cart is Empty
        </h1>
      )}
    </main>
  );
}

export default Cart;
