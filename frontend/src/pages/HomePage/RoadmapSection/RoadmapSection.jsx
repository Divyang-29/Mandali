import { Users, Store, ShoppingCart, ShieldCheck } from 'lucide-react';
import './RoadmapSection.css';

export default function RoadmapSection() {
  const roadmapItems = [
    {
      icon: Users,
      title: 'Employment profiles',
      desc: 'Portable employment profiles are planned after launch.'
    },
    {
      icon: Store,
      title: 'Store marketplace',
      desc: 'Buy and sell convenience stores within the community. No brokers. No generalist platforms. Browse listings from operators who already understand the business: price, volume, lease terms, and staff are all included.'
    },
    {
      icon: ShoppingCart,
      title: 'Procurement Deals',
      desc: 'Alone a store. Together a force. Unlock community buying power through supplier deals negotiated collectively and surfaced directly in the app. The deals are permanent and searchable.'
    },
    {
      icon: ShieldCheck,
      title: 'Fraud and dispute resolution',
      desc: 'Chargeback disputes and credit card fraud resolution tools built specifically for independent convenience store operators. Manage disputes, track resolutions, and protect your margins, without needing a legal team or a corporate finance department.'
    }
  ];

  return (
    <section id="roadmap" className="roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <span className="roadmap-pill">Coming soon</span>
          <h2 className="roadmap-title">More features on the way</h2>
          <p className="roadmap-subtitle">
            Built directly from community feedback after the initial launch.
          </p>
        </div>

        <div className="roadmap-grid">
          {roadmapItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="roadmap-card">
                <div>
                  <div className="roadmap-icon-box">
                    <IconComp style={{ width: '18px', height: '18px' }} />
                  </div>
                  <h3 className="roadmap-card-title">{item.title}</h3>
                  <p className="roadmap-card-desc">{item.desc}</p>
                </div>

                <div>
                  <span className="roadmap-badge">After launch</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

