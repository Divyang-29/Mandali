import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './MarketPage.css';

export default function MarketPage() {
  return (
    <div className="market-page-wrapper">
      <div className="market-page-container">
        
        {/* Breadcrumb */}
        <nav className="market-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Market Facts & Industry Data</span>
        </nav>

        <div className="market-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="market-rail">
            <div className="rail-card">
              <span className="rail-kicker">Industry Census</span>
              <ul className="rail-meta-list">
                <li><span>Authority:</span> <strong>NACS 2025–2026</strong></li>
                <li><span>Total Stores:</span> <strong className="tabular-numbers">151,975</strong></li>
                <li><span>Independent:</span> <strong className="tabular-numbers">95,672 (63%)</strong></li>
                <li><span>Merch Sales:</span> <strong className="tabular-numbers">$341.2 Billion</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Jump to Section</span>
              <ul className="rail-toc-list">
                <li><a href="#macro-census">1. Macro Store Census</a></li>
                <li><a href="#data-table">2. Comparative Metrics Table</a></li>
                <li><a href="#per-store-economics">3. Per-Store Economics</a></li>
                <li><a href="#diaspora-segment">4. The South Asian Footprint</a></li>
                <li><a href="#citations">5. Research Citations</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Operator Network</h4>
              <p>Connect with fellow verified operators in your state.</p>
              <Link to="/signup" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Join Beta Network</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="market-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 04 · Market Intelligence</span>
              <h1 className="article-title">The US convenience store market</h1>
              <p className="article-lead">
                An authoritative overview of convenience retail in America: 151,975 total storefronts, 63% independent ownership, and $341.2 billion in annual in-store commerce.
              </p>
            </header>

            <section id="macro-census" className="editorial-section">
              <p>
                The convenience store industry is one of the most critical and physically widespread retail categories in the United States. Convenience locations outnumber grocery stores, drugstores, and dollar stores combined, serving as essential neighborhood hubs open early and late across all 50 states.
              </p>

              <div className="editorial-pull-quote">
                “Dividing $341.2 billion in annual in-store sales by total store count yields approximately $2.25 million in food, packaged beverage, and general merchandise sales per store each year. Convenience stores also sell approximately 80% of all motor fuel purchased in the United States.”
              </div>
            </section>

            <section id="data-table" className="editorial-section">
              <h2>Key industry metrics (NACS State of the Industry)</h2>
              
              <div className="editorial-data-table-wrap">
                <table className="editorial-data-table">
                  <thead>
                    <tr>
                      <th>Metric Category</th>
                      <th>Industry Benchmark</th>
                      <th>Context / Operational Significance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Total Store Population</strong></td>
                      <td className="table-stat-value">151,975</td>
                      <td>National retail footprint verified by NACS 2025–2026 census</td>
                    </tr>
                    <tr>
                      <td><strong>Independent Operators (≤10 stores)</strong></td>
                      <td className="table-stat-value">95,672 (63.0%)</td>
                      <td>Single-store and family-owned operators represent the majority</td>
                    </tr>
                    <tr>
                      <td><strong>Indian-American Owned (Estimate)</strong></td>
                      <td className="table-stat-value">~80,000</td>
                      <td>Dominant demographic share across independent retail operations</td>
                    </tr>
                    <tr>
                      <td><strong>Annual Staff Turnover Rate</strong></td>
                      <td className="table-stat-value">100%+</td>
                      <td>Highest employee replacement rate in retail commerce</td>
                    </tr>
                    <tr>
                      <td><strong>Annual In-Store Merchandise Sales</strong></td>
                      <td className="table-stat-value">$341.2 Billion</td>
                      <td>Food, snacks, packaged beverages, tobacco, and general merchandise</td>
                    </tr>
                    <tr>
                      <td><strong>Average In-Store Sales / Store</strong></td>
                      <td className="table-stat-value">~$2.25 Million</td>
                      <td>Excludes fuel pumps and lottery agency pass-throughs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="per-store-economics" className="editorial-section">
              <h2>Per-store economic reality</h2>
              <p>
                While the aggregate market volume is immense, individual store economics are defined by tight margins. Labor represents the largest controllable cash expense, typically ranging between 12% and 16% of gross sales. Credit card swipe fees routinely rank as an owner's second largest operational cost.
              </p>
              <p>
                Because ownership is fragmented across nearly 100,000 independent proprietors, operators have historically possessed zero collective bargaining power with beverage distributors, candy suppliers, ATM terminal providers, or merchant card processors.
              </p>
            </section>

            <section id="diaspora-segment" className="editorial-section">
              <h2>The South Asian & Gujarati community footprint</h2>
              <p>
                An estimated 80,000 convenience stores across the United States are operated by South Asian families, predominantly of Gujarati heritage. Over the past 40 years, this diaspora has built an extraordinary commercial network that also spans motels, independent grocery stores, and quick-service restaurant franchises.
              </p>
              <p>
                Mandali was designed specifically to support this community by establishing verified hiring, in-app messaging, bilingual post translation, and group procurement tools.
              </p>
            </section>

            <section id="citations" className="editorial-section">
              <h2>Sources & methodological notes</h2>
              <p style={{ fontSize: '13px', color: 'var(--color-text-muted)' }}>
                Store counts, sales figures, and employee turnover statistics are drawn directly from the <strong>National Association of Convenience Stores (NACS) 2025–2026 State of the Industry</strong> report. The ~80,000 ownership figure is an industry consensus compiled across regional Asian American, Indo-American, and regional grocery associations in New Jersey, New York, Pennsylvania, Georgia, and Texas.
              </p>

              <div style={{ marginTop: '16px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/why-now" className="btn-primary">
                  <span>Read The Why Now Thesis →</span>
                </Link>
                <Link to="/about" className="btn-secondary">
                  <span>About Mandali →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
