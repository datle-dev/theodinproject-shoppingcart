const CatalogCard = ({ product }) => {
  const handleAddToCart = () => {
    console.log('Added to cart:');
    console.log(product);
  };

  return (
    <>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <p>Rating: {product.rating.rate} out of 5.0 ({product.rating.count})</p>
      <button type="button" onClick={handleAddToCart}>Add to Cart</button>
    </>
  );
};

export default CatalogCard;
