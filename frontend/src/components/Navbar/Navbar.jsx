import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Globe, ChevronDown, Menu, X, Check, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('English');
  const langRef = useRef(null);
  const location = useLocation();

  const languages = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'gu', label: 'Gujarati', native: 'ગુજરાતી' },
    { code: 'hi', label: 'Hindi', native: 'हिन्दी' }
  ];

  // Close desktop dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close off-canvas drawer and dropdown on route/hash change
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    if (drawerOpen) {
      setDrawerOpen(false);
    }
    if (langDropdownOpen) {
      setLangDropdownOpen(false);
    }
  }

  // Lock body scroll when off-canvas drawer is open
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close drawer on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setDrawerOpen(false);
      }
    };
    if (drawerOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [drawerOpen]);

  return (
    <header className="navbar-wrapper">
      {/* 1. Slim Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-content">
          <div className="announcement-left">
            <span className="announcement-tag">Private Beta</span>
            <span className="announcement-text">
              Now live on Web · iOS App launching soon · Built for independent store operators
            </span>
          </div>
          <Link to="/#waitlist" className="announcement-link">
            <span>Join 1,200+ Operators</span>
            <ArrowRight style={{ width: '12px', height: '12px' }} />
          </Link>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="navbar-container">
        {/* Brand Lockup */}
        <Link to="/" className="brand-link">
          <img 
            src="/logo.png" 
            alt="Mandali" 
            className="brand-logo"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="brand-text-group">
            <span className="brand-title">
              Mandali
              <span className="brand-status-dot" title="Network Online" />
            </span>
            <span className="brand-subtitle">Never alone</span>
          </div>
        </Link>

        {/* Desktop Links (>= 1024px) */}
        <nav className="nav-links-desktop">
          <Link to="/#features" className="nav-link">Features</Link>
          <Link to="/#how-it-works" className="nav-link">How it works</Link>
          <Link to="/market" className="nav-link">Market Facts</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/story" className="nav-link">Our Story</Link>
          <Link to="/faq" className="nav-link">FAQ</Link>
        </nav>

        {/* Action Controls */}
        <div className="nav-actions">
          {/* Desktop Language Selector */}
          <div className="lang-selector" ref={langRef}>
            <button
              type="button"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="lang-btn"
              aria-expanded={langDropdownOpen}
              aria-label="Select language"
            >
              <Globe style={{ width: '14px', height: '14px' }} />
              <span>{currentLang}</span>
              <ChevronDown style={{ width: '12px', height: '12px' }} />
            </button>

            {langDropdownOpen && (
              <div className="lang-dropdown">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setCurrentLang(l.label);
                      setLangDropdownOpen(false);
                    }}
                    className="lang-option"
                  >
                    <span>{l.label} <small className="lang-native">({l.native})</small></span>
                    {currentLang === l.label && <Check style={{ width: '14px', height: '14px', color: 'var(--color-emerald)' }} />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Auth Links */}
          <Link to="/login" className="btn-secondary nav-login-desktop">
            Sign In
          </Link>
          <Link to="/signup" className="btn-primary nav-login-desktop">
            Get Early Access
          </Link>

          {/* Off-Canvas Mobile & Tablet Toggle (< 1024px) */}
          <button
            type="button"
            onClick={() => setDrawerOpen(true)}
            className="mobile-toggle"
            aria-label="Open navigation drawer"
            aria-expanded={drawerOpen}
          >
            <Menu style={{ width: '22px', height: '22px' }} />
          </button>
        </div>
      </div>

      {/* =========================================================
          TRUE OFF-CANVAS SLIDE-OVER DRAWER FOR MOBILE & TABLET (< 1024px)
          ========================================================= */}
      
      {/* Backdrop Scrim */}
      <div 
        className={`drawer-backdrop ${drawerOpen ? 'open' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden={!drawerOpen}
      />

      {/* Off-Canvas Panel */}
      <aside 
        className={`drawer-panel ${drawerOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation Drawer"
        aria-hidden={!drawerOpen}
      >
        {/* Top Drawer Header */}
        <div className="drawer-header">
          <Link to="/" onClick={() => setDrawerOpen(false)} className="drawer-brand-lockup">
            <img 
              src="/logo.png" 
              alt="Mandali" 
              className="drawer-brand-logo"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div className="drawer-brand-text">
              <span className="drawer-brand-title">
                Mandali
                <span className="brand-status-dot" title="Network Online" />
              </span>
              <span className="drawer-brand-subtitle">Never alone</span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setDrawerOpen(false)}
            className="drawer-close-btn"
            aria-label="Close navigation menu"
          >
            <X style={{ width: '20px', height: '20px' }} />
          </button>
        </div>

        {/* Scrollable Navigation Groups */}
        <div className="drawer-body">
          {/* 01 / PLATFORM */}
          <div className="drawer-nav-group">
            <span className="drawer-group-kicker">01 / PLATFORM</span>
            <div className="drawer-nav-links">
              <Link to="/#features" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Features</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/#how-it-works" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>How It Works</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/market" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Market Data (NACS)</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/faq" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>FAQ</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
            </div>
          </div>

          {/* 02 / EDITORIAL & COMPANY */}
          <div className="drawer-nav-group">
            <span className="drawer-group-kicker">02 / EDITORIAL & COMPANY</span>
            <div className="drawer-nav-links">
              <Link to="/about" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>About Mandali</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/story" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Our Story (Founder)</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/founders" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Founders (Miral Patel)</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/why-now" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Why Now</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/approach" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Our Approach</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/ai" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>How We Use AI</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/careers" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Careers</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
              <Link to="/contact" onClick={() => setDrawerOpen(false)} className="drawer-nav-link">
                <span>Contact Mandali</span>
                <ArrowRight className="drawer-link-arrow" style={{ width: '14px', height: '14px' }} />
              </Link>
            </div>
          </div>
        </div>

        {/* Sticky Drawer Footer */}
        <div className="drawer-footer">
          <div className="drawer-lang-row">
            <span className="drawer-lang-label">
              <Globe style={{ width: '14px', height: '14px', color: 'var(--color-saffron-dark)' }} />
              <span>Language</span>
            </span>
            <div className="drawer-lang-pills">
              {languages.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setCurrentLang(l.label)}
                  className={`drawer-lang-pill ${currentLang === l.label ? 'active' : ''}`}
                >
                  {l.native}
                </button>
              ))}
            </div>
          </div>

          <div className="drawer-actions">
            <Link 
              to="/login" 
              onClick={() => setDrawerOpen(false)} 
              className="btn-secondary drawer-btn"
            >
              Sign In (Verified Phone)
            </Link>
            <Link 
              to="/#waitlist" 
              onClick={() => setDrawerOpen(false)} 
              className="btn-primary drawer-btn"
            >
              <span>Get Early Access</span>
              <ArrowRight style={{ width: '14px', height: '14px' }} />
            </Link>
          </div>
        </div>
      </aside>
    </header>
  );
}
