import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isLoggedIn, setIsLoggedIn } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/checkout");
  };

  return (
    <div className="page-container">
      <div className="auth-card">
        <h1>Welcome Back</h1>

        {isLoggedIn ? (
          <>
            <p>✅ You are already logged in</p>

            <button
              className="primary-btn"
              onClick={() => navigate("/checkout")}
            >
              Go To Checkout
            </button>
          </>
        ) : (
          <>
            <p>
              Login as a guest to continue shopping.
            </p>

            <button
              className="primary-btn"
              onClick={handleLogin}
            >
              Login as Guest
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;