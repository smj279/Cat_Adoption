import './BaseLayout.css';
import { Link, Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div className="layout">

{/* Header with Navbar */}
      <header className="navbar-container">
        <h1 className="logo">
          <Link className="text-decoration-none animated-logo" to="/">
            Purrfect Adoption
          </Link>
        </h1>
        <div className="flex-grow-1"></div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/available-cats">
                Available Cats
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

 {/* Main Content */}
      <main id="content" className="container mt-4">
        <Outlet />
      </main>

 {/* Footer */}
      <footer className="footer">
        <p className="footer-paragraph">
           <b>Our</b> mission is to provide a loving home for every cat in need. We are dedicated to rescuing, rehabilitating, and rehoming cats, giving them a second chance at happiness. By adopting, you're not just giving a cat a home—you're giving them a future filled with love and care.
        </p>
        <div className="footer-links">
          <div className="footer-column">
            <h5>Services</h5>
            <ul>
              <li>Daycare</li>
              <li>Rescue</li>
              <li>Veterinary</li>
              <li>Adoption</li>
            </ul>
          </div>
          <div className="footer-column">
            <h5>Products</h5>
            <ul>
              <li>Food</li>
              <li>Accessories</li>
              <li>Online order</li>
              <li>Free delivery</li>
            </ul>
          </div>
        </div>
        <p className="mb-0">&copy; 2024 Purrfect Adoption. All Rights Reserved.</p>
        <small>Thanks For Being With Us</small>
      </footer>
    </div>
  );
};

export default BaseLayout;
