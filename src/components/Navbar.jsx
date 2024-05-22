import { Link } from 'react-router-dom';

const Navbar = ({ count }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/cart">Cart</Link>
      <p>{count} items in cart</p>
    </nav>
  );
};

export default Navbar;
