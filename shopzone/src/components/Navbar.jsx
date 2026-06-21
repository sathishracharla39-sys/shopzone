import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">🛍 ShopZone</h2>
      

      <div className="nav-links">
  <Link to="/">Home</Link>

  <Link to="/shop">Shop</Link>

  <Link to="/contact">Contact</Link>

  <Link to="/cart">
    Cart ({cartCount})
  </Link>

  {isLoggedIn ? (
    <>
      <span className="user-status">
        👤 Guest
      </span>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

      <Link to="/checkout">
        Checkout
      </Link>
    </>
  ) : (
    <Link to="/login">
      Login
    </Link>
  )}
</div>
    </nav>
  );
}

export default Navbar;