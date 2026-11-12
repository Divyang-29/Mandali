import { Link } from 'react-router-dom';
import { ArrowRight, MapPin } from 'lucide-react';
import './StoryPage.css';

export default function StoryPage() {
  return (
    <div className="story-page-wrapper">
      <div className="story-page-container">
        
        {/* Breadcrumb */}
        <nav className="story-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <Link to="/about">About</Link>
          <span>/</span>
          <span>Our Story</span>
        </nav>

        <div className="story-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="story-rail">
            <div className="rail-card">
              <span className="rail-kicker">Chronicle Metadata</span>
              <ul className="rail-meta-list">
                <li><span>Origin:</span> <strong>Jersey City, NJ</strong></li>
                <li><span>Store:</span> <strong>Rangoli Paan</strong></li>
                <li><span>Interviews:</span> <strong>300+ Store Operators</strong></li>
                <li><span>Author:</span> <strong>Miral Patel</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Navigation Jump</span>
              <ul className="rail-toc-list">
                <li><a href="#rangoli-paan">1. Rangoli Paan, Jersey City</a></li>
                <li><a href="#conversations">2. 300+ Field Conversations</a></li>
                <li><a href="#alone-a-store">3. Together a Force</a></li>
                <li><a href="#chronology">4. Chronology & Milestones</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Become Part of Mandali</h4>
              <p>Join the collective platform for independent convenience store operators.</p>
              <Link to="/signup" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Join Priority List</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="story-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 02 · Founding Chronicle</span>
              <h1 className="article-title">It started behind the counter</h1>
              <p className="article-lead">
                Mandali did not start as a venture pitch or a software concept. It started behind the counter at Rangoli Paan, a neighborhood convenience store in Jersey City, New Jersey.
              </p>
            </header>

            <section id="rangoli-paan" className="editorial-section">
              <div className="dispatch-badge-box">
                <MapPin style={{ width: '16px', height: '16px', color: 'var(--color-saffron-dark)' }} />
                <span>Rangoli Paan, Jersey City, NJ · Late 2022</span>
              </div>

              <p>
                In late 2022, Miral Patel had just arrived in the United States to pursue his master's degree at Stevens Institute of Technology in Hoboken. Near his daily bus stop in Jersey City sat Rangoli Paan, a busy convenience store where close friends worked evening shifts.
              </p>

              <div className="editorial-pull-quote">
                “He spent evenings and weekends behind the counter—bagging groceries, watching register handoffs, seeing distributor deliveries arrive, and observing how the store operated under real pressure. He was not an employee and it was not a research project. He simply lived it.”
              </div>

              <p>
                What became clear was startling: despite convenience stores being the essential heartbeat of American neighborhoods—open 24 hours, handling cash, fuel, lotto, and dairy—the operational backbone was completely improvised. Hiring happened through chaotic WhatsApp forwards. Store repairs were arranged via scribbled phone numbers on cardboard boxes. When a cashier didn't show up at 6:00 AM, the owner had to abandon their family and work a 16-hour double shift.
              </p>
            </section>

            <section id="conversations" className="editorial-section">
              <h2>300+ field conversations across 5 states</h2>
              <p>
                Over the next two years, Miral traveled across New Jersey, New York, Pennsylvania, Georgia, and Texas, sitting down with more than 300 independent convenience store operators. Whether in Newark, Edison, Philadelphia, Atlanta, or Dallas, the core reality was identical:
              </p>
              <ul className="feature-launch-list">
                <li className="feature-launch-item">
                  <strong>The WhatsApp Bottleneck:</strong> Owners were trapped in dozens of crowded WhatsApp groups where job posts vanished in minutes, spam was rampant, and there was zero way to verify who was on the other end of the line.
                </li>
                <li className="feature-launch-item">
                  <strong>Lack of Local References:</strong> Hiring cashiers without verified work history meant high turnover, inventory loss, and constant anxiety over whether cash drawers would balance.
                </li>
                <li className="feature-launch-item">
                  <strong>Zero Wholesale Leverage:</strong> While corporate chains negotiate volume discounts with distributors, independent owners pay retail wholesale prices with no bargaining power.
                </li>
              </ul>
            </section>

            <section id="chronology" className="editorial-section">
              <h2>Chronology & milestones</h2>
              <div className="story-timeline-card">
                <span className="story-timeline-kicker">Late 2022 – 2023</span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>The Counter Reality</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Unpaid shifts behind the counter at Rangoli Paan. Witnessing daily cashier turnover, register balancing, and wholesale supply chaos firsthand.
                </p>
              </div>

              <div className="story-timeline-card">
                <span className="story-timeline-kicker">2024 – 2025</span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>Fieldwork with 300+ Store Owners</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Testing simple, counter-friendly tools with store owners across NJ, NY, PA, and GA. Proving that operators reject complex enterprise software and demand fast, mobile-first utility.
                </p>
              </div>

              <div className="story-timeline-card">
                <span className="story-timeline-kicker">2026</span>
                <strong style={{ fontSize: '15px', color: 'var(--color-midnight)' }}>Mandali Platform Launch</strong>
                <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                  Launching the dedicated independent network: carrier-verified phone authentication, free job applications for employees, direct in-app messaging, and a trusted contractor directory.
                </p>
              </div>
            </section>

            <section id="alone-a-store" className="editorial-section">
              <h2>Alone a store. Together a force.</h2>
              <p>
                There are 95,672 convenience stores in America owned by independent operators with 10 or fewer stores. Nearly 80,000 of them are owned by Indian-American families. Individually, each store negotiates alone against giant distributors and corporate chains. Together, this community represents more commerce than the largest retail chains in the world.
              </p>
              <p>
                Mandali was created so that no independent store owner ever has to stand alone again.
              </p>

              <div style={{ marginTop: '16px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/founders" className="btn-secondary">
                  <span>Founder Profile (Miral Patel) →</span>
                </Link>
                <Link to="/market" className="btn-secondary">
                  <span>View NACS Market Data →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
