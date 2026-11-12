import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-brand-header">
              <img 
                src="/logo.png" 
                alt="Mandali" 
                className="footer-logo-img"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <span className="footer-brand-title">Mandali</span>
            </div>
            <div className="footer-motto">Never alone.</div>
            <p className="footer-desc">
              The platform built for independent convenience store owners. Connecting operators, staff, and contractors across the US.
            </p>
            <div className="footer-contact-note">
              Direct email: <a href="mailto:hello@themandali.com" className="footer-contact-link">hello@themandali.com</a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div className="footer-col-title">Product</div>
            <ul className="footer-links">
              <li><Link to="/#features">Platform Features</Link></li>
              <li><Link to="/#how-it-works">How It Works</Link></li>
              <li><Link to="/approach">Our Approach</Link></li>
              <li><Link to="/faq">Frequently Asked Questions</Link></li>
              <li><Link to="/#roadmap">Product Roadmap</Link></li>
            </ul>
          </div>

          {/* About & Mission */}
          <div>
            <div className="footer-col-title">About & Mission</div>
            <ul className="footer-links">
              <li><Link to="/about">About Mandali</Link></li>
              <li><Link to="/founders">Founder (Miral Patel)</Link></li>
              <li><Link to="/story">Our Story</Link></li>
              <li><Link to="/why-now">Why Now</Link></li>
              <li><Link to="/market">Market Facts (NACS)</Link></li>
              <li><Link to="/ai">How We Use AI</Link></li>
            </ul>
          </div>

          {/* Company & Access */}
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/login">Sign In (Verified Member)</Link></li>
              <li><Link to="/signup">Join Waitlist</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="footer-bottom">
          <div>
            © 2026 Mandali. All rights reserved. Built with independent convenience store operators.
          </div>
          <div className="footer-legal-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms">Terms of Use</Link>
            <span>•</span>
            <Link to="/support">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

