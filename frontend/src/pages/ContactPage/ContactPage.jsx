import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import './ContactPage.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Store Owner');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      <div className="contact-page-container">
        <nav className="contact-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Contact</span>
        </nav>

        <div className="contact-editorial-layout">
          {/* Left Sticky Rail */}
          <aside className="contact-rail">
            <div className="contact-rail-card">
              <div className="contact-rail-header">
                <span className="contact-rail-kicker">Direct Desks</span>
              </div>

              <div className="contact-meta-list">
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Response Time</span>
                  <span className="contact-meta-value">Within 24 business hours</span>
                </div>
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Primary Inbox</span>
                  <span className="contact-meta-value">hello@themandali.com</span>
                </div>
                <div className="contact-meta-row">
                  <span className="contact-meta-label">Compliance / Legal</span>
                  <span className="contact-meta-value">privacy@themandali.com</span>
                </div>
              </div>

              <div className="contact-desk-card">
                <span className="contact-desk-title">
                  <MapPin style={{ width: '14px', height: '14px', color: 'var(--color-saffron-dark)' }} />
                  <span>Field Operations</span>
                </span>
                <p className="contact-desk-body">
                  Active field representation across Jersey City, Edison, Newark, and the broader NY/NJ metropolitan corridor.
                </p>
              </div>

              <div className="contact-trust-pill">
                We never share or broker operator data. All communications remain strictly between you and the Mandali core team.
              </div>
            </div>
          </aside>

          {/* Right Reading & Form Column */}
          <article className="contact-article">
            <header className="contact-header">
              <span className="contact-eyebrow">Direct Operator Inquiries</span>
              <h1 className="contact-title">Contact Mandali</h1>
              <p className="contact-lead">
                Whether you operate a single store, represent a regional grocers association, or want to explore an official vendor integration, we review all incoming messages daily.
              </p>
            </header>

            {submitted ? (
              <div className="contact-success-state">
                <div className="contact-success-icon-badge">
                  <CheckCircle2 style={{ width: '28px', height: '28px' }} />
                </div>
                <h2 className="contact-success-title">Message Dispatched</h2>
                <p className="contact-success-text">
                  Thank you, {name}. A member of the Mandali operator team will review your inquiry and follow up at <strong>{email}</strong> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setMessage('');
                  }}
                  className="btn-secondary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="contact-form-grid">
                  <div className="contact-field-group">
                    <label className="contact-label" htmlFor="contact-name">Your Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Patel"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="contact-input"
                    />
                  </div>

                  <div className="contact-field-group">
                    <label className="contact-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="contact-input"
                    />
                  </div>
                </div>

                <div className="contact-field-group">
                  <label className="contact-label" htmlFor="contact-role">I Am A</label>
                  <select
                    id="contact-role"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="contact-select"
                  >
                    <option value="Store Owner">Independent Store Owner / Operator</option>
                    <option value="Employee / Cashier">Store Associate / Cashier / Manager</option>
                    <option value="Service Technician">Refrigeration / POS / Equipment Technician</option>
                    <option value="Association / Partner">Retail Association / Wholesale Partner</option>
                    <option value="Media / Other">General Inquiry</option>
                  </select>
                </div>

                <div className="contact-field-group">
                  <label className="contact-label" htmlFor="contact-message">Message or Store Context</label>
                  <textarea
                    id="contact-message"
                    required
                    placeholder="Tell us about your store location, hiring needs, or partnership proposal..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="contact-textarea"
                  />
                </div>

                <div className="contact-form-footer">
                  <button type="submit" className="contact-submit-btn">
                    <span>Send Message</span>
                    <ArrowRight style={{ width: '14px', height: '14px' }} />
                  </button>
                  <span className="contact-trust-status">
                    <ShieldCheck style={{ width: '14px', height: '14px', color: 'var(--color-emerald)' }} />
                    Directly delivered to founder inboxes
                  </span>
                </div>
              </form>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
