import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { cartItems, setCartItems } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2>Loading...</h2>;
  }

  const addToCart = () => {
  const existingItem = cartItems.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cartItems.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCartItems(updatedCart);
  } else {
    setCartItems([
      ...cartItems,
      {
        ...product,
        quantity: 1,
      },
    ]);
  }
};

  return (
  <div className="page-container">
    <div className="product-details">
      <div className="product-image-section">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="details-image"
        />
      </div>

      <div className="product-info">
        <h1>{product.title}</h1>

        <h2 className="details-price">
          ${product.price}
        </h2>

        <p className="details-description">
          {product.description}
        </p>

        <button
          className="add-cart-btn"
          onClick={addToCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  </div>
);
}

export default ProductDetails;