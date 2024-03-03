import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';

function Navbar() {
  return (
    <>
      <div className="flex h-5/6 w-full items-center justify-end bg-[#131313] py-4">
        <Link to="/" className="ml-5 mr-12 text-2xl text-white no-underline">
          Shop
        </Link>
        <Link
          to="/cart"
          className="ml-5 mr-12 flex text-2xl text-white no-underline"
        >
          <ShoppingCart size={32} />
          Cart
        </Link>
      </div>
    </>
  );
}

export default Navbar;
