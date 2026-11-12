import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      <div className="about-page-container">
        
        {/* Breadcrumb */}
        <nav className="about-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>About Us</span>
        </nav>

        <div className="about-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="about-rail">
            <div className="rail-card">
              <span className="rail-kicker">Document Dispatch</span>
              <ul className="rail-meta-list">
                <li><span>Category:</span> <strong>Company & Platform</strong></li>
                <li><span>Scope:</span> <strong>United States</strong></li>
                <li><span>Edition:</span> <strong>2026 Rollout</strong></li>
                <li><span>Status:</span> <strong style={{ color: 'var(--color-emerald)' }}>Active Beta</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Contents</span>
              <ul className="rail-toc-list">
                <li><a href="#overview">1. Platform Overview</a></li>
                <li><a href="#name-meaning">2. What the Name Means</a></li>
                <li><a href="#launch-capabilities">3. Capabilities at Launch</a></li>
                <li><a href="#leadership">4. Who is Building It</a></li>
                <li><a href="#related-documents">5. Related Documents</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Independent Operator?</h4>
              <p>Onboarding takes under 5 minutes with carrier phone verification.</p>
              <Link to="/signup" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Get Early Access</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="about-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 01 · Community Foundation</span>
              <h1 className="article-title">Built for a community that was already there</h1>
              <p className="article-lead">
                Mandali is a community platform for independent convenience store owners in the United States. At launch it includes a community feed and Spaces, a job board, direct messaging, a services directory, and industry news.
              </p>
            </header>

            <section id="overview" className="editorial-section">
              <p>
                Across the United States, independent convenience stores open early, close late, and run on personal relationships. Many of them are owned by first- and second-generation immigrant families who have built their businesses through decades of relentless hard work, mutual aid, and quiet discipline.
              </p>

              <div className="editorial-pull-quote">
                “Mandali is a Gujarati word (મંડળી) for a circle of people who come together, a trusted group. In villages across Gujarat, people formed a mandali to help each other buy seeds, share irrigation equipment, or support a neighbor through a bad season. That is exactly what this platform is built to be.”
              </div>
            </section>

            <section id="name-meaning" className="editorial-section">
              <h2>What the name means</h2>
              <p>
                In Gujarati, <em>Mandali</em> means a gathering, group or association. It is not a distant corporate hierarchy; it is a community of people who share the work and look out for each other. For independent store owners who often feel isolated behind the register, Mandali means you are never alone.
              </p>
            </section>

            <section id="launch-capabilities" className="editorial-section">
              <h2>What Mandali does at launch</h2>
              <p>
                Mandali is launching on web and iOS, and is free at launch. The initial release focuses on solving the most urgent weekly operational challenges:
              </p>
              <ul className="feature-launch-list">
                <li className="feature-launch-item">
                  <strong>Job board:</strong> Post store jobs and browse verified candidate profiles with local work history. Free for workers forever.
                </li>
                <li className="feature-launch-item">
                  <strong>Community Feed:</strong> Share supplier tips, regulatory updates, and local advice with privacy controls that let you choose visibility.
                </li>
                <li className="feature-launch-item">
                  <strong>Services directory:</strong> Find refrigeration, HVAC, plumbing, and electrical contractors rated and reviewed by nearby owners.
                </li>
                <li className="feature-launch-item">
                  <strong>Industry news:</strong> Stay informed on tobacco regulations, lottery rules, and supplier updates without WhatsApp noise.
                </li>
              </ul>
            </section>

            <section id="leadership" className="editorial-section">
              <h2>Who is building it</h2>
              <div className="founder-editorial-card">
                <div className="founder-avatar-box">MP</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <h3 style={{ margin: 0, fontSize: '18px', color: 'var(--color-midnight)' }}>Miral Patel</h3>
                  <span style={{ fontSize: '13px', color: 'var(--color-saffron-dark)', fontWeight: '600' }}>Founder & CEO</span>
                  <p style={{ margin: 0, fontSize: '14px', color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>
                    Miral spent 18 months behind the counter of a convenience store in Jersey City and has spoken with more than 300 store owners across the country. He leads Mandali's community, product, and distribution.
                  </p>
                  <div style={{ marginTop: '6px' }}>
                    <Link to="/founders" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-midnight)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <span>Read founder biography & experience</span>
                      <ChevronRight style={{ width: '14px', height: '14px' }} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <section id="related-documents" className="editorial-section">
              <h2>Related documents</h2>
              <div className="article-subpage-grid">
                <Link to="/story" className="subpage-card-link">
                  <strong style={{ fontSize: '14px', color: 'var(--color-midnight)' }}>Our Story →</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>How Mandali started behind the counter in Jersey City.</span>
                </Link>
                <Link to="/why-now" className="subpage-card-link">
                  <strong style={{ fontSize: '14px', color: 'var(--color-midnight)' }}>Why Now →</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>The economic pressures facing independent operators today.</span>
                </Link>
                <Link to="/market" className="subpage-card-link">
                  <strong style={{ fontSize: '14px', color: 'var(--color-midnight)' }}>Market Facts →</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>NACS data and convenience store industry statistics.</span>
                </Link>
                <Link to="/approach" className="subpage-card-link">
                  <strong style={{ fontSize: '14px', color: 'var(--color-midnight)' }}>Our Approach →</strong>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-muted)' }}>Community first. Software second.</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
