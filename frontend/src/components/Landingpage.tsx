import { Link } from "react-router-dom";
import "../styles/Landingpage.css"; // relative path from src/components


export default function LandingPage() {
  return (
    <div>
      {/* Header */}
      <header id="header">
        <div className="container header-container">
          <span className="logo">VC</span>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h1>Vibe Commerce</h1>
          <p>Where Every Click Feels Like a Deal.</p>
          <Link to="/home" className="btn">
            Buy now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Vibe Ecommerce. All Rights Reserved.</p>
          <p>Made by SVD</p>
        </div>
      </footer>
    </div>
  );
}
