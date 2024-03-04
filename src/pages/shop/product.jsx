import { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="flex w-auto max-w-80 flex-col items-center justify-center rounded-2xl duration-300 hover:cursor-pointer hover:ease-in">
      <img src={productImage} alt={productName} className="w-96" />
      <div className="text-center">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
      </div>
      <button
        onClick={() => addToCart(id)}
        className="border-3 min-w-24 rounded-2xl border-solid border-[131313] bg-transparent px-3 py-1 duration-200 hover:cursor-pointer hover:bg-[#131313] hover:text-white"
      >
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
      </button>
    </div>
  );
};

Product.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    productName: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    productImage: PropTypes.string.isRequired,
  }).isRequired,
};

export default Product;
