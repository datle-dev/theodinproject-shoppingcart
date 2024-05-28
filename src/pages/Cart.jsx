import { useOutletContext } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useOutletContext();

  return (
    <>
      <h1>Cart</h1>
      {Object.values(cart).map((value) => {
        return (
          <div key={value.product.id}>
            <p>{value.product.title}</p>
            <p>${value.product.price}</p>
            <p>{value.quantity} in cart</p>
          </div>
        )
      })}
    </>
  );
};

export default Cart;
