import { useState } from 'react';
import { useOutletContext } from "react-router-dom";

const CatalogCard = ({ product }) => {
  const [qty, setQty] = useState(0);
  const [cart, setCart, numCartItems, setNumCartItems] = useOutletContext();
  const [qtyInCart, setQtyInCart] = useState(() => {
    return cart.hasOwnProperty(product.id) ? cart[product.id]['quantity'] : 0;
  });

  const saveToLocalStorage = (cartToSave) => {
    localStorage.setItem('cart', JSON.stringify(cartToSave));
  };

  const handleAddToCart = () => {
    let cartToUpdate;
    cartToUpdate = cart;

    if (cartToUpdate.hasOwnProperty(product.id)) {
      cartToUpdate[product.id] = {
        product: product,
        quantity: cart[product.id]['quantity'] + qty,
      };
    } else {
      cartToUpdate[product.id] = {
        product: product,
        quantity: qty,
      };
      setNumCartItems(numCartItems + 1);
    }

    setCart(cartToUpdate);
    setQtyInCart(cartToUpdate[product.id]['quantity']);
    saveToLocalStorage(cartToUpdate);

    console.log(cartToUpdate);
    console.log(qtyInCart);
  };

  const handleAddQty = () => {
    if (qty < 99) {
      setQty(qty + 1);
    }
  };
  
  const handleRemoveQty = () => {
    if (qty > 0) {
      setQty(qty - 1);
    }
  };

  const handleOnChangeQty = (e) => {
    const re = /^[0-9\b]+$/;

    if (e.target.value === '' || re.test(e.target.value)) {
       setQty(Number(e.target.value));
    }
  };

  const handleOnBlurQty = (e) => {
    if (e.target.value < 0) {
      setQty(0);
    } else if (e.target.value > 99) {
      setQty(99);
    } else {
      setQty(Math.floor(Number(e.target.value)));
    }
  };

  return (
    <>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating.rate} out of 5.0 ({product.rating.count})</p>
      <label htmlFor={'qty-' + product.id} />
      <input
        type="number"
        id={'qty-' + product.id}
        name={'qty-' + product.id}
        onChange={handleOnChangeQty}
        onBlur={handleOnBlurQty}
        min="0"
        max="99"
        value={qty}
      />
      <button type="button" onClick={handleAddQty} disabled={qty >= 99}>+</button>
      <button type="button" onClick={handleRemoveQty} disabled={qty <= 0}>&minus;</button>
      <button type="button" onClick={handleAddToCart} disabled={qty <= 0}>Add to Cart</button>
      {qtyInCart > 0 && <p>{qtyInCart} in cart</p>}
    </>
  );
};

export default CatalogCard;
