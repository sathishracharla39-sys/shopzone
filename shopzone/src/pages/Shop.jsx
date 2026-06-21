import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Shop() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
  <div className="page-container">
    <h1 className="section-title">Shop Products</h1>

    <div className="products-grid">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />

          <h3>{product.title}</h3>

          <p className="price">${product.price}</p>
        </div>
      ))}
    </div>
  </div>
);
}

export default Shop;