import { useState, createContext } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../styles/root.css';

export const CartContext = createContext({});

const Root = () => {
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart !== null ? JSON.parse(storedCart) : {};
  });

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleSubtractCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <Navbar count={count}/>
      <main>
        <CartContext.Provider value={[cart, setCart]}>
          <Outlet context={[count, handleAddCount, handleSubtractCount]}/>
        </CartContext.Provider>
      </main>
    </>
  );
};

export default Root;
