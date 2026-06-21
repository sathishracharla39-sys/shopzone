import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to ShopZone</h1>

          <p>
            Discover amazing products at the best prices.
            Shop beauty, fashion, electronics and more.
          </p>

          <Link to="/shop" className="shop-btn">
  Start Shopping
</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Get products delivered quickly to your doorstep.</p>
        </div>

        <div className="feature-card">
          <h3>💳 Secure Payments</h3>
          <p>Safe and reliable payment methods.</p>
        </div>

        <div className="feature-card">
          <h3>⭐ Quality Products</h3>
          <p>Carefully selected products from trusted brands.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;