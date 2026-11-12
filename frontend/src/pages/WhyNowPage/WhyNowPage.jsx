import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './WhyNowPage.css';

export default function WhyNowPage() {
  return (
    <div className="whynow-page-wrapper">
      <div className="whynow-page-container">
        
        {/* Breadcrumb */}
        <nav className="whynow-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Why Now</span>
        </nav>

        <div className="whynow-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="whynow-rail">
            <div className="rail-card">
              <span className="rail-kicker">Macro Analysis</span>
              <ul className="rail-meta-list">
                <li><span>Pillars:</span> <strong>4 Core Pressures</strong></li>
                <li><span>Labor Burden:</span> <strong>#1 Expense</strong></li>
                <li><span>Turnover:</span> <strong>100%+ Annual</strong></li>
                <li><span>Resolution:</span> <strong>Collective Platform</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Document Jump</span>
              <ul className="rail-toc-list">
                <li><a href="#hiring-pressure">1. Hiring Breakdown</a></li>
                <li><a href="#succession">2. Generational Handover</a></li>
                <li><a href="#cost-escalation">3. Escalating Store Costs</a></li>
                <li><a href="#trust-deficit">4. The WhatsApp Limit</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Take Action</h4>
              <p>Experience how Mandali streamlines store hiring in under 5 minutes.</p>
              <Link to="/signup" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Join Operator Waitlist</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="whynow-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 05 · The Industry Thesis</span>
              <h1 className="article-title">Why Mandali, and why now</h1>
              <p className="article-lead">
                Independent convenience stores are a large, steady business. But the way owners hire, buy, and get help has barely changed in thirty years—and the operational pressure on them is compounding.
              </p>
            </header>

            <section id="hiring-pressure" className="editorial-section">
              <div className="editorial-pull-quote">
                “Labor is the largest controllable cash expense for convenience stores (NACS). Employee turnover in the industry routinely exceeds 100% per year. In our fieldwork, owners report spending 10 to 15 hours every single week managing no-shows and hunting for replacement cashiers.”
              </div>

              <div className="thesis-card-block">
                <span className="thesis-card-num">Pillar 01</span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-midnight)' }}>
                  1. Hiring is the biggest cost and the most broken process
                </h3>
                <p className="thesis-card-desc">
                  When a cashier does not show up at 6:00 AM, the store cannot simply close its doors. The owner or a family member must drop their personal commitments and work behind the register. Traditional job boards charge hundreds of dollars per post and deliver unvetted resumes from people who have never touched a lottery terminal or Gilbarco POS. Mandali provides free worker applications, verified work histories, and direct messaging.
                </p>
              </div>
            </section>

            <section id="succession" className="editorial-section">
              <div className="thesis-card-block">
                <span className="thesis-card-num">Pillar 02</span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-midnight)' }}>
                  2. A generation is handing over the keys
                </h3>
                <p className="thesis-card-desc">
                  Thousands of first-generation immigrant store owners who acquired their stores in the 1990s and 2000s are now entering retirement. Their children and younger relatives are stepping into management or expanding into multi-unit operations. This incoming generation grew up with modern mobile software and expects seamless, digitized workflows rather than paper logbooks and unorganized group chats.
                </p>
              </div>
            </section>

            <section id="cost-escalation" className="editorial-section">
              <div className="thesis-card-block">
                <span className="thesis-card-num">Pillar 03</span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-midnight)' }}>
                  3. Operating costs and interchange swipe fees keep rising
                </h3>
                <p className="thesis-card-desc">
                  State minimum wage increases, utility rates, and credit card interchange swipe fees (consistently an owner’s second largest operational expense) continue to squeeze store gross margins. Independent stores must band together to unlock collective procurement deals, commercial insurance discounts, and wholesale pricing parity with national corporate chains.
                </p>
              </div>
            </section>

            <section id="trust-deficit" className="editorial-section">
              <div className="thesis-card-block">
                <span className="thesis-card-num">Pillar 04</span>
                <h3 style={{ margin: 0, fontSize: '17px', color: 'var(--color-midnight)' }}>
                  4. Trust does not scale through informal group chats
                </h3>
                <p className="thesis-card-desc">
                  Informal WhatsApp groups are flooded with spam, unvetted solicitations, and anonymous scammers. Store owners cannot risk their inventory or personal security on unverified phone numbers. Mandali solves this by establishing carrier-grade phone authentication: every store operator and job applicant is an authenticated human being with a verifiable local footprint.
                </p>
              </div>

              <div style={{ marginTop: '20px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/approach" className="btn-primary">
                  <span>Explore Our Product Approach →</span>
                </Link>
                <Link to="/market" className="btn-secondary">
                  <span>Review Industry Census Data →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
