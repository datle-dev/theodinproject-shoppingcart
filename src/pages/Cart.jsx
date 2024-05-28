import { useOutletContext } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <h1>Cart</h1>
      <button type="button" onClick={handleAddCount}>Add to Cart</button>
      <button type="button" onClick={handleSubtractCount}>Subtract from Cart</button>
    </>
  );
};

export default Cart;
