import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cartItems, setCartItems } =
    useContext(CartContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [orderPlaced, setOrderPlaced] =
    useState(false);

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (total, item) =>
      total + item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    if (
      !name ||
      !email ||
      !phone ||
      !address
    ) {
      alert("Please fill all fields");
      return;
    }

    setOrderPlaced(true);

    setCartItems([]);

    localStorage.removeItem(
      "cartItems"
    );
  };

  if (orderPlaced) {
  return (
    <div className="page-container">
      <div className="checkout-card">
        <h1>🎉 Order Confirmed</h1>

        <p>
          Thank you for shopping with ShopZone.
        </p>

        <p>
          Order ID:
          #
          {Math.floor(
            10000 + Math.random() * 90000
          )}
        </p>

        <p>
          Your items will be delivered
          within 3-5 business days.
        </p>
        <Link
  to="/shop"
  className="primary-btn"
  style={{
    display: "inline-block",
    marginTop: "20px",
    textDecoration: "none",
    textAlign: "center",
  }}
>
  Continue Shopping
</Link>
      </div>
    </div>
  );
}

  return (
    <div className="page-container">
      <div className="checkout-card">
        <h1>Checkout</h1>

        <input
          type="text"
          placeholder="Full Name"
          className="checkout-input"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <input
          type="email"
          placeholder="Email Address"
          className="checkout-input"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Phone Number"
          className="checkout-input"
          value={phone}
          onChange={(e) =>
            setPhone(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Delivery Address"
          className="checkout-input"
          value={address}
          onChange={(e) =>
            setAddress(e.target.value)
          }
        />
        {cartItems.length === 0 && (
  <p className="empty-cart-msg">
    Your cart is empty. Add products before checkout.
  </p>
)}

        <div className="order-summary">
          <h2>Order Summary</h2>

          <p>Items: {totalItems}</p>

          <p>
            Total: $
            {totalPrice.toFixed(2)}
          </p>
        </div>

        <div className="checkout-products">
          <h3>Products</h3>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="checkout-product"
            >
              <span>
                {item.title}
              </span>

              <span>
                × {item.quantity}
              </span>
            </div>
          ))}
        </div>

        <button
  className="primary-btn"
  onClick={handlePlaceOrder}
  disabled={cartItems.length === 0}
>
  Place Order
</button>
      </div>
    </div>
  );
}

export default Checkout;