import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Root = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => {
    setCount(count + 1);
  };

  const handleSubtractCount = () => {
    setCount(count - 1);
  };

  return (
    <>
      <Navbar count={count}/>
      <main>
        <Outlet context={[count, handleAddCount, handleSubtractCount]}/>
      </main>
    </>
  );
};

export default Root;
