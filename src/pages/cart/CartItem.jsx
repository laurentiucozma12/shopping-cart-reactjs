import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../../context/ShopContext';

export default function CartItem(props) {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div
      className=" m-4 rounded-3xl p-5 shadow-lg shadow-black 
                  sm:m-8 sm:flex sm:w-[600px] sm:items-center sm:p-4
                  xl:w-[700px]"
    >
      <div className="flex items-center justify-center">
        <img
          src={productImage}
          alt={productName}
          className="w-[250px] sm:mr-4"
        />
      </div>
      <div
        className=" w-full text-center 
                    sm:text-left sm:text-3xl"
      >
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
