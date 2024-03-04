import { PRODUCTS } from '../../products.js';
import { ShopContext } from '../../context/ShopContext';

function Cart() {
  return (
    <div>
      <div className="cart">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
}

export default Cart;
