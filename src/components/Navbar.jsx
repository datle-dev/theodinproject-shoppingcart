import { Link } from 'react-router-dom';

const Navbar = ({ numCartItems }) => {

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/cart">Cart</Link>
      <p>{numCartItems} items in cart</p>
    </nav>
  );
};

export default Navbar;
