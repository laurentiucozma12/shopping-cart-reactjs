import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../../context/ShopContext';

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="m-8 flex h-[250px] w-[700px] items-center rounded-3xl shadow-lg shadow-black">
      <img src={productImage} alt={productName} className="w-[200px]" />
      <div className="w-full text-3xl">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandle">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="mx-3 w-20 text-center text-2xl font-bold"
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
}

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};
