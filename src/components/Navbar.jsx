import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/catalog">Catalog</Link>
      <Link to="/cart">Cart</Link>
    </>
  );
};

export default Navbar;
