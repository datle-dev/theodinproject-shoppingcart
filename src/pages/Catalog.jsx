import { useState, useEffect} from 'react';
import CatalogCard from '../components/CatalogCard';

const Catalog = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      await fetch('https://fakestoreapi.com/products')
        .then((res) => {
          if (res.status >= 400) {
          throw new Error('Server Error');
          }
          return res.json();
        })
        .then((json) => {
          console.log(json);
          setProducts(json);
        })
        .catch((err) => setError(err))
        .finally(() => setLoading(false))
    };
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h1>Catalog</h1>
      {products.map((product) => {
        return (
          <article key={product.id}>
            <CatalogCard product={product} />
          </article>
        )
      })}
    </>
  );
};

export default Catalog;
