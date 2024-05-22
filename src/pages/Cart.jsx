import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [count, handleAddCount, handleSubtractCount] = useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      <p>{count} items in cart</p>
      <button type="button" onClick={handleAddCount}>Add to Cart</button>
      <button type="button" onClick={handleSubtractCount}>Subtract from Cart</button>
    </>
  );
};

export default Cart;
