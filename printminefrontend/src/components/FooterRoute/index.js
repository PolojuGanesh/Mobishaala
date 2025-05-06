import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import "./index.css";

const FooterRoute = () => (
  <footer id="footer" class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3 class="footer-title">Primtmine</h3>
        <p class="footer-description">
          Building modern web apps with PrimeNG, PrimeFlex, and Angular.
        </p>
      </div>

      <div class="footer-section">
        <h4 class="footer-subtitle">Quick Links</h4>
        <ul class="footer-links">
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

      <div class="footer-section">
        <h4 class="footer-subtitle">Follow Us</h4>
        <div class="footer-icons">
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

    <div class="footer-bottom">
      <p>© 2025 Primtmine. All rights reserved.</p>
    </div>
  </footer>
);

export default FooterRoute;
