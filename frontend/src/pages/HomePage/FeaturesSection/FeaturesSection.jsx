import { Briefcase, MessageCircle, Globe, Wrench, MessageSquare, ShoppingCart } from 'lucide-react';
import './FeaturesSection.css';

export default function FeaturesSection() {
  const features = [
    {
      icon: Briefcase,
      title: 'Job board',
      desc: 'Post a job and see who applies, with the work history they have entered and a way to message them directly. No resumes. No blind hires.',
      badges: ['Owners post', 'Employees apply free', 'Phone verified']
    },
    {
      icon: MessageCircle,
      title: 'Community Feed',
      desc: 'Supplier recommendations, industry news, regulatory updates, and community posts, all in one searchable feed with privacy controls that let you decide who can see your posts.',
      badges: ['Deals and offers', 'Searchable', 'Member posts']
    },
    {
      icon: Globe,
      title: 'Industry news',
      desc: 'Industry news for independent store owners: regulatory changes, supplier updates, and what is happening in the business, collected in one place instead of scattered across group chats.',
      badges: ['Regulatory updates', 'Supplier updates', 'Owner focused']
    },
    {
      icon: Wrench,
      title: 'Services directory',
      desc: 'Find local service providers by zip code: plumbers, HVAC, refrigeration repair, electricians, and pest control. Owners rate and review the ones they have used.',
      badges: ['Search by zip code', 'Owner recommended', 'Local providers']
    },
    {
      icon: MessageSquare,
      title: 'Direct messaging',
      desc: 'Message owners or employees directly inside the platform. Job enquiries and store conversations stay in one place inside the app. No more sharing personal numbers over WhatsApp.',
      badges: ['Owners and employees', 'Phone verified', 'In-app messaging']
    },
    {
      icon: ShoppingCart,
      title: 'Procurement Deals',
      desc: 'Alone a store. Together a force. Unlock community buying power through supplier deals negotiated collectively and surfaced directly in the app.',
      badges: ['Bulk discounts', 'Distributor rates', 'Store community']
    }
  ];

  return (
    <section id="features" className="features-section">
      <div className="features-container">
        <div className="features-header">
          <span className="features-pill">The platform</span>
          <h2 className="features-title">Everything your store needs in one place</h2>
          <p className="features-subtitle">
            Everything that currently lives in your job board, your WhatsApp groups, and your contacts spreadsheet, in one place built for independent store owners.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => {
            const IconComp = f.icon;
            return (
              <div key={i} className="feature-card">
                <div>
                  <div className="feature-icon-box">
                    <IconComp style={{ width: '20px', height: '20px' }} />
                  </div>
                  <h3 className="feature-card-title">{f.title}</h3>
                  <p className="feature-card-desc">{f.desc}</p>
                </div>

                <div className="feature-badges-row">
                  {f.badges.map((b, bIdx) => (
                    <span key={bIdx} className="feature-badge-item">{b}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

