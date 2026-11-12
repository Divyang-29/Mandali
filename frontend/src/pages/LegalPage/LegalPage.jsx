import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';
import './LegalPage.css';

export default function LegalPage() {
  const location = useLocation();
  const path = location.pathname;

  const isTerms = path.includes('terms');
  const isSupport = path.includes('support');
  // default is privacy

  return (
    <div className="legal-page-wrapper">
      <div className="legal-page-container">
        <nav className="legal-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>{isTerms ? 'Terms of Service' : isSupport ? 'Support & Operations' : 'Privacy Policy'}</span>
        </nav>

        <div className="legal-editorial-layout">
          {/* Left Sticky Rail */}
          <aside className="legal-rail">
            <div className="legal-rail-card">
              <div className="legal-rail-header">
                <span className="legal-rail-kicker">Legal Directory</span>
              </div>

              <div className="legal-nav-list">
                <Link 
                  to="/privacy" 
                  className={`legal-nav-item ${!isTerms && !isSupport ? 'active' : ''}`}
                >
                  <span>Privacy Policy</span>
                  <ArrowRight style={{ width: '12px', height: '12px' }} />
                </Link>
                <Link 
                  to="/terms" 
                  className={`legal-nav-item ${isTerms ? 'active' : ''}`}
                >
                  <span>Terms of Service</span>
                  <ArrowRight style={{ width: '12px', height: '12px' }} />
                </Link>
                <Link 
                  to="/support" 
                  className={`legal-nav-item ${isSupport ? 'active' : ''}`}
                >
                  <span>Support & Help Desk</span>
                  <ArrowRight style={{ width: '12px', height: '12px' }} />
                </Link>
              </div>

              <div className="legal-meta-list">
                <div className="legal-meta-row">
                  <span className="legal-meta-label">Effective Date</span>
                  <span className="legal-meta-value">October 2026 Revision</span>
                </div>
                <div className="legal-meta-row">
                  <span className="legal-meta-label">Governing Law</span>
                  <span className="legal-meta-value">State of New Jersey, USA</span>
                </div>
                <div className="legal-meta-row">
                  <span className="legal-meta-label">Data Controller</span>
                  <span className="legal-meta-value">Mandali Community Inc.</span>
                </div>
              </div>

              <div className="legal-help-box">
                <div className="legal-meta-label">Questions or Inquiries</div>
                <p className="legal-help-desc">
                  Reach our dedicated data privacy and member compliance officers:
                </p>
                <a href="mailto:privacy@themandali.com" className="legal-help-link">
                  <Mail style={{ width: '14px', height: '14px' }} />
                  <span>privacy@themandali.com</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Reading Column */}
          <article className="legal-article">
            <header className="legal-header">
              <span className="legal-eyebrow">Legal & Compliance</span>
              <h1 className="legal-title">
                {isTerms ? 'Terms of Service' : isSupport ? 'Mandali Support & Help Desk' : 'Privacy Policy'}
              </h1>
              <p className="legal-lead">
                {isTerms 
                  ? 'These terms govern your access and use of the Mandali platform across Web, iOS, and SMS verification infrastructure.' 
                  : isSupport
                  ? 'Operator troubleshooting, account verification assistance, job posting support, and technical services guidelines.'
                  : 'How Mandali collects, safeguards, and handles independent store operator and worker information without data broking.'}
              </p>
            </header>

            {isTerms ? (
              <div className="legal-content-body">
                <section className="legal-section-block">
                  <h2 className="legal-section-title">1. The Mandali Service</h2>
                  <p className="legal-paragraph">
                    Mandali is a private community network built specifically for independent convenience store owners, cashiers, supervisors, and licensed service technicians. It provides verified operator communication channels, a local convenience job board, direct messaging, and an authentic local contractor directory.
                  </p>
                  <div className="legal-callout-box">
                    <span className="legal-callout-kicker">Key Principle</span>
                    Mandali is not an anonymous bulletin board. Every account is authenticated via a verified US carrier mobile phone number.
                  </div>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">2. Accounts & Phone Verification</h2>
                  <p className="legal-paragraph">
                    You agree to provide accurate, complete information when requesting access. You may not share accounts across unrelated retail operators. Store owners are responsible for the truthfulness of job listings and compensation rates posted under their registered store profile.
                  </p>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">3. Community Standards & Zero-Spam Policy</h2>
                  <p className="legal-paragraph">
                    Mandali was founded on community trust. Fraudulent listings, predatory wage advertising, unauthorized commercial lead scrapers, automated bot submissions, abusive language, or discrimination will result in immediate permanent account termination without appeal.
                  </p>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">4. Limitation of Liability</h2>
                  <p className="legal-paragraph">
                    Mandali facilitates introductions between independent store operators, job seekers, and independent equipment contractors. Mandali is not an employer, employment agency, or licensed contractor. We do not guarantee employment outcomes or contractor performance.
                  </p>
                </section>
              </div>
            ) : isSupport ? (
              <div className="legal-content-body">
                <section className="legal-section-block">
                  <h2 className="legal-section-title">Signing In & SMS Access Codes</h2>
                  <p className="legal-paragraph">
                    Mandali relies on 6-digit carrier SMS codes for login security. If you did not receive your verification code within 60 seconds:
                  </p>
                  <ul className="legal-list">
                    <li>Confirm that your mobile carrier allows short-code messaging.</li>
                    <li>Ensure you entered a valid 10-digit US mobile number (VOIP numbers like Google Voice are restricted).</li>
                    <li>If issues persist, contact hello@themandali.com with your mobile carrier name.</li>
                  </ul>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">Job Board & Hiring Inquiries</h2>
                  <p className="legal-paragraph">
                    Store owners can post cashier, stocker, and shift manager openings directly. If you have filled an opening and wish to archive it, or if you need to update hourly compensation rates, please email our operator desk or adjust it directly in your dashboard.
                  </p>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">Commercial Service Directory Onboarding</h2>
                  <p className="legal-paragraph">
                    If you are a licensed commercial refrigeration technician, HVAC contractor, or certified POS technician serving independent retail locations in NJ, NY, or PA, submit your EPA certification and contractor license number to support@themandali.com for verification.
                  </p>
                </section>
              </div>
            ) : (
              <div className="legal-content-body">
                <section className="legal-section-block">
                  <h2 className="legal-section-title">1. Information We Collect</h2>
                  <p className="legal-paragraph">
                    We collect your verified mobile phone number, full name, state/zip code, store affiliation (for owners), and work history details (for workers who elect to create a public hiring profile).
                  </p>
                  <div className="legal-callout-box">
                    <span className="legal-callout-kicker">Strict Privacy Promise</span>
                    We never sell, rent, or monetize your individual or store data with third-party data brokers, cigarette distributors, or corporate advertisers.
                  </div>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">2. Member Visibility & Contact Protection</h2>
                  <p className="legal-paragraph">
                    Store owners can review candidate profiles who submit an application for their open jobs. We never publish your private mobile phone number publicly on the open web. Initial conversations take place through Mandali's secure platform messaging.
                  </p>
                </section>

                <section className="legal-section-block">
                  <h2 className="legal-section-title">3. Data Retention & Account Deletion</h2>
                  <p className="legal-paragraph">
                    You have full ownership of your data. You may request immediate and permanent account deletion at any time by sending an email to privacy@themandali.com. All stored profile details, session tokens, and communication archives are permanently expunged within 30 days.
                  </p>
                </section>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
}
