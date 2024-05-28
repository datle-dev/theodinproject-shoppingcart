import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/root.css';

const Root = () => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart !== null ? JSON.parse(storedCart) : {};
  });

  return (
    <>
      <Navbar />
      <main>
        <Outlet context={[cart, setCart]}/>
      </main>
    </>
  );
};

export default Root;
