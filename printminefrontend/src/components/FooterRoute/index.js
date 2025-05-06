import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "./index.css";

const FooterRoute = () => (
  <footer id="footer" className="footer">
    <div className="footer-container">
      <div className="footer-section">
        <h3 className="footer-title">Primtmine</h3>
        <p className="footer-description">
          Building modern web apps with PrimeNG, PrimeFlex, and Angular.
        </p>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Quick Links</h4>
        <ul className="footer-links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#footer">About</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
          <li>
            <a href="#footer">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-subtitle">Follow Us</h4>
        <div className="footer-icons">
          <a href="#footer">
            <FaFacebookF className="social-icons" />
          </a>
          <a href="#footer">
            <FaTwitter className="social-icons" />
          </a>
          <a href="#footer">
            <FaInstagram className="social-icons" />
          </a>
        </div>
      </div>
    </div>

    <div className="footer-bottom">
      <p>© 2025 Primtmine. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterRoute;
