import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck } from 'lucide-react';
import './CareersPage.css';

export default function CareersPage() {
  return (
    <div className="careers-page-wrapper">
      <div className="careers-page-container">
        <nav className="careers-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Careers</span>
        </nav>

        <div className="careers-editorial-layout">
          {/* Left Sticky Rail */}
          <aside className="careers-rail">
            <div className="careers-rail-card">
              <div className="careers-rail-header">
                <span className="careers-rail-kicker">Disciplinary Note</span>
              </div>
              <div className="careers-rail-meta-list">
                <div className="careers-meta-row">
                  <span className="careers-meta-label">Document №</span>
                  <span className="careers-meta-value">MND-HR-08</span>
                </div>
                <div className="careers-meta-row">
                  <span className="careers-meta-label">Headquarters</span>
                  <span className="careers-meta-value">Jersey City / Edison, NJ</span>
                </div>
                <div className="careers-meta-row">
                  <span className="careers-meta-label">Current Hiring Status</span>
                  <span className="careers-meta-value">Private Operator Cohort</span>
                </div>
                <div className="careers-meta-row">
                  <span className="careers-meta-label">Working Style</span>
                  <span className="careers-meta-value">Field-Embedded & Agile</span>
                </div>
              </div>

              <div className="careers-waitlist-callout">
                <div className="careers-meta-label">Store Inquiries</div>
                <p className="careers-contact-text">
                  Are you an independent store owner looking to join our verified hiring network?
                </p>
                <Link to="/signup" className="btn-primary careers-mail-link">
                  <span>Register Store</span>
                  <ArrowRight style={{ width: '12px', height: '12px' }} />
                </Link>
              </div>
            </div>
          </aside>

          {/* Right Reading Column */}
          <article className="careers-article">
            <header className="careers-header">
              <span className="careers-eyebrow">Join the Team</span>
              <h1 className="careers-title">No Openings Right Now</h1>
              <p className="careers-lead">
                We do not have any open positions at the moment. Please check back later for future opportunities.
              </p>
            </header>

            <div className="careers-status-card">
              <span className="careers-status-badge">
                <ShieldCheck style={{ width: '14px', height: '14px' }} />
                <span>Core Engineering & Operations Locked</span>
              </span>
              <p className="careers-contact-text">
                Mandali is built by a small, disciplined team working closely with independent convenience store operators across New Jersey, New York, Pennsylvania, and Georgia.
              </p>
            </div>

            <section>
              <h2 className="careers-discipline-title">Upcoming 2026 Focus Areas</h2>
              <p className="careers-contact-text">
                As we expand regional platform distribution across the Tri-State and Mid-Atlantic corridors, we will open positions across three distinct areas:
              </p>

              <div className="careers-discipline-grid">
                <div className="careers-discipline-card">
                  <h3 className="careers-discipline-title">Mobile Engineering</h3>
                  <p className="careers-discipline-desc">
                    Offline-first mobile interfaces, SMS verified workflows, and zero-latency job matching engines.
                  </p>
                </div>
                <div className="careers-discipline-card">
                  <h3 className="careers-discipline-title">Regional Community</h3>
                  <p className="careers-discipline-desc">
                    Field operators on the ground supporting Gujarati, Hindi, Punjabi, and Spanish speaking store owners.
                  </p>
                </div>
                <div className="careers-discipline-card">
                  <h3 className="careers-discipline-title">Vendor Relations</h3>
                  <p className="careers-discipline-desc">
                    Vetting commercial HVAC, refrigeration, POS, and security camera contractors for independent stores.
                  </p>
                </div>
              </div>
            </section>

            <div className="careers-contact-box">
              <h3 className="careers-contact-heading">Want to introduce yourself early?</h3>
              <p className="careers-contact-text">
                If you have deep roots in retail operations, high-craft mobile engineering, or regional store associations, feel free to drop us a note with your background.
              </p>
              <a href="mailto:hello@themandali.com" className="btn-secondary careers-mail-link">
                <Mail style={{ width: '14px', height: '14px' }} />
                <span>hello@themandali.com</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
