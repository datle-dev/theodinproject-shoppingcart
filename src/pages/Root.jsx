import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/root.css';

const Root = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart !== null ? JSON.parse(storedCart) : {};
  });

  const [numCartItems, setNumCartItems] = useState(() => {
    return Object.keys(cart).length;
  });

  return (
    <>
      <Navbar numCartItems={numCartItems}/>
      <main>
        <Outlet context={[cart, setCart, numCartItems, setNumCartItems]}/>
      </main>
    </>
  );
};

export default Root;
