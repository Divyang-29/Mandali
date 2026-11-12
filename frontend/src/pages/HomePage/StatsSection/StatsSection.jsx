import { Link } from 'react-router-dom';
import './StatsSection.css';

export default function StatsSection() {
  const stats = [
    { num: '151,975', label: 'Convenience stores in the US' },
    { num: '95,672', label: 'Owned by operators with 10 or fewer stores' },
    { num: '~80,000', label: 'Indian-American owned stores (estimate)' },
    { num: '100%+', label: 'Typical annual staff turnover' },
    { num: '$341.2B', label: 'In-store sales in 2025' }
  ];

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header-bar">
          <div className="stats-eyebrow">The industry in numbers</div>
          <span className="stats-source-tag">Sources: NACS 2025-2026</span>
        </div>

        <div className="stats-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stat-cell">
              <div className="stat-number tabular-numbers">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="stats-footnote">
          Store counts, turnover and sales: NACS. The ownership figure is an industry estimate, not NACS data.{' '}
          <Link to="/market">See market facts and sources</Link>
        </div>
      </div>
    </section>
  );
}

