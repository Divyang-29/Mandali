import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';
import './FoundersPage.css';

export default function FoundersPage() {
  return (
    <div className="founders-page-wrapper">
      <div className="founders-page-container">
        
        {/* Breadcrumb */}
        <nav className="founders-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/about">About</Link>
          <span>/</span>
          <span>Founder Profile</span>
        </nav>

        <div className="founders-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="founders-rail">
            <div className="rail-card">
              <span className="rail-kicker">Leadership Record</span>
              <ul className="rail-meta-list">
                <li><span>Name:</span> <strong>Miral Patel</strong></li>
                <li><span>Title:</span> <strong>Founder & CEO</strong></li>
                <li><span>Counter Time:</span> <strong>18 Months</strong></li>
                <li><span>Education:</span> <strong>Stevens Inst. Tech</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Quick Navigation</span>
              <ul className="rail-toc-list">
                <li><a href="#biography">1. Personal Background</a></li>
                <li><a href="#counter-fieldwork">2. 18 Months Behind the Counter</a></li>
                <li><a href="#previous-roles">3. Supply Chain & Finance Roots</a></li>
                <li><a href="#get-in-touch">4. Direct Operator Contact</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Direct Dialogue</h4>
              <p>Miral personally speaks with store owners and operators every week.</p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Send Direct Note</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="founders-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 03 · Founder Profile</span>
              <h1 className="article-title">The person building Mandali</h1>
              <p className="article-lead">
                Mandali was founded by Miral Patel (Founder and CEO). He brings four years inside the convenience store community and leads Mandali's community, go-to-market, and distribution.
              </p>
            </header>

            <section id="biography" className="editorial-section">
              <div className="founder-editorial-card">
                <div className="founder-avatar-box" style={{ width: '60px', height: '60px', fontSize: '20px' }}>MP</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h2 style={{ margin: 0, fontSize: '20px', border: 'none', padding: 0 }}>Miral Patel</h2>
                  <span style={{ fontSize: '13px', color: 'var(--color-saffron-dark)', fontWeight: '600' }}>Founder & CEO, Mandali</span>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Miral is Gujarati, born in India, and joined the US convenience store community as an adult, one relationship at a time.
                  </p>
                  <div style={{ display: 'flex', gap: '16px', marginTop: '4px', fontSize: '13px' }}>
                    <a href="https://www.linkedin.com/company/themandalicom/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-cobalt)', fontWeight: '600' }}>
                      <span>LinkedIn Profile</span>
                      <ExternalLink style={{ width: '13px', height: '13px' }} />
                    </a>
                    <a href="https://x.com/themandalihq" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--color-midnight)', fontWeight: '600' }}>
                      <span>X (@themandalihq)</span>
                      <ExternalLink style={{ width: '13px', height: '13px' }} />
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <section id="counter-fieldwork" className="editorial-section">
              <h2>18 months behind the counter</h2>
              <p>
                In late 2022, while studying for his master's degree at Stevens Institute of Technology, Miral started spending time at Rangoli Paan, a convenience store in Jersey City, New Jersey, run by friends. Over 18 months he helped behind the counter, unpaid, and saw how the business really runs: hiring through WhatsApp groups, buying through word of mouth, and trust that lives in people's phones and memories.
              </p>

              <div className="editorial-pull-quote">
                “Since then he has spoken with more than 300 store owners, managers, and employees across New Jersey, Ohio, Kentucky, Georgia, and Florida. Those conversations shaped what Mandali is today.”
              </div>
            </section>

            <section id="previous-roles" className="editorial-section">
              <h2>Previous background & institutional training</h2>
              <div className="career-node-card">
                <div className="career-node-org">Mehsana Dairy (Gujarat, India)</div>
                <div className="career-node-role">Supply Chain & Operations</div>
                <p className="career-node-desc">
                  Worked within one of the largest agricultural cooperative supply chains in Asia, coordinating daily collection, cold storage logistics, and farmer cooperative governance.
                </p>
              </div>

              <div className="career-node-card">
                <div className="career-node-org">Morgan Stanley (Atlanta Area)</div>
                <div className="career-node-role">Client Relationship Roles, Wealth Management</div>
                <p className="career-node-desc">
                  Managed high-touch fiduciary relationships, private client communications, and financial workflows for business owners.
                </p>
              </div>
            </section>

            <section id="get-in-touch" className="editorial-section">
              <h2>Connecting with Miral</h2>
              <p>
                Miral spends multiple days each week in store locations across northern New Jersey and the New York metropolitan area. If you operate an independent convenience store and want to discuss hiring challenges, contractor issues, or regional associations, reach out directly.
              </p>

              <div style={{ marginTop: '12px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">
                  <span>Send Miral a Message →</span>
                </Link>
                <Link to="/story" className="btn-secondary">
                  <span>Read Full Founding Story →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
