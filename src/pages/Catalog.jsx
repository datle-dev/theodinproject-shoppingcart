import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Catalog = () => {
  const [count, handleAddCount, handleSubtractCount] = useOutletContext();
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProducts(json);
        })
        .catch((err) => console.log(err))
    };
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Catalog</h1>
      <button type="button" onClick={handleAddCount}>Add to Cart</button>
      <button type="button" onClick={handleSubtractCount}>Subtract from Cart</button>
    </>
  );
};

export default Catalog;
