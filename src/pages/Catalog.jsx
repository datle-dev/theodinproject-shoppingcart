import { useOutletContext } from "react-router-dom";

const Catalog = () => {
  const [count, handleAddCount, handleSubtractCount] = useOutletContext();

  return (
    <>
      <h1>Catalog</h1>
      <button type="button" onClick={handleAddCount}>Add to Cart</button>
      <button type="button" onClick={handleSubtractCount}>Subtract from Cart</button>
    </>
  );
};

export default Catalog;
