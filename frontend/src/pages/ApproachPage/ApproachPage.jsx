import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './ApproachPage.css';

export default function ApproachPage() {
  return (
    <div className="approach-page-wrapper">
      <div className="approach-page-container">
        
        {/* Breadcrumb */}
        <nav className="approach-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Our Approach</span>
        </nav>

        <div className="approach-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="approach-rail">
            <div className="rail-card">
              <span className="rail-kicker">Strategy Protocol</span>
              <ul className="rail-meta-list">
                <li><span>Philosophy:</span> <strong>Community First</strong></li>
                <li><span>Pace:</span> <strong>Software Second</strong></li>
                <li><span>Phase:</span> <strong>Phase 1 Beta</strong></li>
                <li><span>Coverage:</span> <strong>NJ, NY, PA, GA</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Section Outline</span>
              <ul className="rail-toc-list">
                <li><a href="#core-philosophy">1. Core Philosophy</a></li>
                <li><a href="#rollout-phases">2. What We Build, in Order</a></li>
                <li><a href="#distribution">3. How We Reach Operators</a></li>
                <li><a href="#success-metric">4. What Success Looks Like</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Get Involved</h4>
              <p>Experience Mandali’s verified community tools in your territory.</p>
              <Link to="/signup" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Operator Registration</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="approach-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 06 · Strategic Model</span>
              <h1 className="article-title">Community first. Software second.</h1>
              <p className="article-lead">
                Owners in this community do not buy software from strangers. They trust people they know. Mandali earns trust first with tools that help owners every week, and builds everything else on top of that foundation.
              </p>
            </header>

            <section id="core-philosophy" className="editorial-section">
              <div className="editorial-pull-quote">
                “You cannot sell enterprise software to an operator who is currently restocking a walk-in cooler while ringing up lottery tickets. Software must be lightweight, respectful of time, and solve a burning operational headache on day one.”
              </div>
              <p>
                In technology, the prevailing playbook is to build software in a vacuum, launch aggressive digital marketing funnels, and treat business owners as lead conversion metrics. That approach completely fails with independent convenience store operators. Convenience operators are fiercely pragmatic. They judge partners by word-of-mouth reputation and lived reliability.
              </p>
            </section>

            <section id="rollout-phases" className="editorial-section">
              <h2>What we build, in order</h2>

              <div className="phase-roadmap-node">
                <span className="phase-tag-badge" style={{ backgroundColor: '#E8EEF5', color: 'var(--color-midnight-light)' }}>
                  Phase 1: At Launch (2026)
                </span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  Core Counter Utilities (Live Beta)
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  A verified store feed, regional Spaces, a job board, direct messaging, a local services directory, and industry news. Free at launch for all verified store owners. 100% free for workers forever.
                </p>
              </div>

              <div className="phase-roadmap-node">
                <span className="phase-tag-badge" style={{ backgroundColor: 'var(--color-sandstone-bg)', color: 'var(--color-text-muted)' }}>
                  Phase 2: After Launch (Mid 2026)
                </span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  Collective Leverage & Community Commerce
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Portable employment profiles, a community store marketplace for buying and selling stores without predatory broker commissions, and collective group procurement deals on key wholesale supplies.
                </p>
              </div>

              <div className="phase-roadmap-node">
                <span className="phase-tag-badge" style={{ backgroundColor: 'var(--color-sandstone-bg)', color: 'var(--color-text-muted)' }}>
                  Phase 3: Later (2027)
                </span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  Financial Infrastructure & Alliance Protection
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Chargeback dispute resolution automation, ethical merchant working capital alternatives, collective healthcare benefit alliances, and cooperative refrigeration equipment financing.
                </p>
              </div>
            </section>

            <section id="distribution" className="editorial-section">
              <h2>How we reach store owners</h2>
              <p>
                We do not rely on impersonal online advertisements. We visit stores in person, attend regional retail trade association meetings, and partner with respected community leaders in New Jersey, New York, Pennsylvania, Georgia, and Texas.
              </p>
              <p>
                When one store owner finds a reliable cashier on Mandali who stays for six months, they tell neighboring operators over morning chai. Organic trust is slower to ignite, but once established, it builds an enduring moat.
              </p>
            </section>

            <section id="success-metric" className="editorial-section">
              <h2>What success looks like</h2>
              <p>
                Success is not vanity app downloads. Success is when an owner avoids working a 16-hour double shift because they found a verified relief cashier in 20 minutes. Success is when a store saves $4,000 annually on wholesale beverage orders through collective purchasing.
              </p>

              <div style={{ marginTop: '16px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/ai" className="btn-primary">
                  <span>How Mandali Uses AI →</span>
                </Link>
                <Link to="/faq" className="btn-secondary">
                  <span>Frequently Asked Questions →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
