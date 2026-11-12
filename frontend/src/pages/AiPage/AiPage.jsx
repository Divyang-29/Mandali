import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, XCircle } from 'lucide-react';
import './AiPage.css';

export default function AiPage() {
  return (
    <div className="ai-page-wrapper">
      <div className="ai-page-container">
        
        {/* Breadcrumb */}
        <nav className="ai-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Technology & AI Philosophy</span>
        </nav>

        <div className="ai-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="ai-rail">
            <div className="rail-card">
              <span className="rail-kicker">Tech Framework</span>
              <ul className="rail-meta-list">
                <li><span>Core Rule:</span> <strong>Tool, Not a Brand</strong></li>
                <li><span>Monetization:</span> <strong>Zero Data Selling</strong></li>
                <li><span>Human Autonomy:</span> <strong>100% Retained</strong></li>
                <li><span>Bilingual:</span> <strong>Gujarati / Hindi / EN</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Navigation Jump</span>
              <ul className="rail-toc-list">
                <li><a href="#core-mandate">1. The Rules We Build By</a></li>
                <li><a href="#practical-use">2. Where AI Actually Fits</a></li>
                <li><a href="#what-we-refuse">3. What We Will Never Do</a></li>
                <li><a href="#faq-connect">4. Common Questions</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Direct Dialogue</h4>
              <p>Have questions about data privacy or store security?</p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Contact Tech Team</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="ai-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 07 · Technology Stance</span>
              <h1 className="article-title">How Mandali uses AI</h1>
              <p className="article-lead">
                At Mandali, artificial intelligence is a behind-the-scenes utility, not a marketing gimmick. We believe AI is valuable only when it removes real, daily friction for independent store operators.
              </p>
            </header>

            <section id="core-mandate" className="editorial-section">
              <div className="editorial-pull-quote">
                “Store owners do not care about algorithmic buzzwords. They care whether their relief cashier shows up on Monday morning and whether their walk-in cooler compressor gets fixed before ice cream melts. If technology doesn’t solve those two things, it does not belong in the store.”
              </div>
              <p>
                Too many modern software companies view AI as an opportunity to insert intrusive chatbots or replace human workers with synthetic approximations. Mandali takes the opposite stance: convenience store retail is an intensely human business built on neighborhood trust. We use AI strictly to accelerate administrative chores and bridge communication gaps.
              </p>
            </section>

            <section id="practical-use" className="editorial-section">
              <h2>Where AI actually fits</h2>

              <div className="ai-application-node">
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  1. Structured Hiring on Both Sides
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Many experienced convenience store workers do not maintain corporate resumes. Mandali converts conversational work history into verified profiles that clearly highlight POS systems operated (Gilbarco, Verifone, NCR), lottery certification, and schedule availability.
                </p>
              </div>

              <div className="ai-application-node">
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  2. Bilingual Community Translation
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Store operators and staff communicate across Gujarati, Hindi, Spanish, and English. We provide idiomatic, contextual translation so an owner composing a job post in Gujarati can easily connect with English- or Spanish-speaking applicants without linguistic friction.
                </p>
              </div>

              <div className="ai-application-node">
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  3. Emergency Contractor Matching
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  When a commercial condenser trips at 2:00 AM, our dispatch matching engine parses the store's exact equipment model and matches the operator with local licensed technicians who have the required replacement parts on hand.
                </p>
              </div>

              <div className="ai-application-node">
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>
                  4. Regulatory Updates & Contract Analysis
                </strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Independent owners don't retain in-house corporate legal teams. We distill complex state lottery regulations, tobacco licensing rules, and wholesale distributor agreements into clear, plain-English executive summaries.
                </p>
              </div>
            </section>

            <section id="what-we-refuse" className="editorial-section">
              <h2>What we will never do</h2>
              
              <div className="ai-boundary-list">
                <div className="ai-boundary-item">
                  <XCircle style={{ width: '18px', height: '18px', color: '#DC2626', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-midnight)' }}>No Data Brokering:</strong> We will never sell, license, or monetize member store sales figures or purchasing history with distributors or corporate advertisers.
                  </div>
                </div>

                <div className="ai-boundary-item">
                  <XCircle style={{ width: '18px', height: '18px', color: '#DC2626', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-midnight)' }}>No Automated Gatekeeping:</strong> AI will never make hiring or rejection decisions on Mandali. Store owners evaluate candidate profiles and communicate directly with applicants.
                  </div>
                </div>

                <div className="ai-boundary-item">
                  <CheckCircle2 style={{ width: '18px', height: '18px', color: 'var(--color-emerald)', flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--color-midnight)' }}>Human-in-the-Loop Always:</strong> All automated intelligence features remain strictly assistive, transparent, and entirely optional for every store operator.
                  </div>
                </div>
              </div>
            </section>

            <section id="faq-connect" className="editorial-section">
              <h2>Explore further</h2>
              <p>
                Have questions regarding how we handle data security or user authentication? Explore our answers in the FAQ.
              </p>

              <div style={{ marginTop: '14px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/faq" className="btn-primary">
                  <span>Read Frequently Asked Questions →</span>
                </Link>
                <Link to="/about" className="btn-secondary">
                  <span>About Mandali Platform →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
