import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, MapPin, CheckCircle, Briefcase, UserCheck } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' | 'profile'
  const [appliedJobs, setAppliedJobs] = useState([]);

  const jobs = [
    {
      id: 1,
      title: 'Cashier Needed',
      pay: '$17/hr',
      store: 'Quick Stop Mart • 2.4 mi',
      tags: ['Full-time', 'Urgent'],
      isUrgent: true
    },
    {
      id: 2,
      title: 'Shift Supervisor',
      pay: '$20/hr',
      store: 'Oak Street Deli • 5.0 mi',
      tags: ['Full-time'],
      isUrgent: false
    },
    {
      id: 3,
      title: 'Night Cashier',
      pay: '$16/hr',
      store: 'Maple Ave Market • 1.1 mi',
      tags: ['Part-time'],
      isUrgent: false
    },
    {
      id: 4,
      title: 'Stock Clerk',
      pay: '$15/hr',
      store: 'River Road Shop • 3.2 mi',
      tags: ['Part-time'],
      isUrgent: false
    }
  ];

  const handleApply = (id) => {
    if (!appliedJobs.includes(id)) {
      setAppliedJobs([...appliedJobs, id]);
    }
  };

  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Left Column: Authentic Value Proposition */}
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            <span>Now on web · iOS coming soon</span>
          </div>

          <h1 className="hero-title">
            The platform built for independent convenience store owners
          </h1>

          <p className="hero-description">
            Hire employees, find local services, follow industry news, and stay connected with nearby store owners, all in one platform built for independent convenience stores.
          </p>

          <div className="hero-actions">
            <a href="#waitlist" className="hero-btn-primary">
              <span>Join the Waitlist</span>
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </a>
            <Link to="/market" className="hero-btn-secondary">
              <span>Read Market Thesis</span>
            </Link>
          </div>

          <div className="hero-trust-bar">
            <div className="hero-trust-item">
              <ShieldCheck style={{ width: '16px', height: '16px', color: 'var(--color-emerald)' }} />
              <span>Members verify their phone number</span>
            </div>
            <div className="font-editorial hero-trust-saffron">
              “Built behind the counter, not in a boardroom”
            </div>
          </div>
        </div>

        {/* Right Column: High-Density Interface Demonstration */}
        <div className="hero-card-preview">
          <div className="preview-header">
            <div className="preview-nav-tabs">
              <button
                type="button"
                onClick={() => setActiveTab('jobs')}
                className={`preview-tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
              >
                <Briefcase style={{ width: '13px', height: '13px', display: 'inline', marginRight: '4px' }} />
                <span>Job Board Feed (4)</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('profile')}
                className={`preview-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
              >
                <UserCheck style={{ width: '13px', height: '13px', display: 'inline', marginRight: '4px' }} />
                <span>Verified Applicant</span>
              </button>
            </div>
            <span className="preview-subtext">
              themandali.com/app
            </span>
          </div>

          {activeTab === 'jobs' ? (
            <div className="preview-body">
              {jobs.map((job) => {
                const isApplied = appliedJobs.includes(job.id);
                return (
                  <div key={job.id} className="job-listing-item">
                    <div className="job-item-header">
                      <div>
                        <div className="job-item-title">{job.title}</div>
                        <div className="job-item-store">
                          <MapPin style={{ width: '12px', height: '12px', display: 'inline', marginRight: '3px' }} />
                          {job.store}
                        </div>
                      </div>
                      <div className="job-item-pay tabular-numbers">{job.pay}</div>
                    </div>

                    <div className="job-item-footer">
                      <div className="job-item-tags">
                        {job.tags.map((t, i) => (
                          <span key={i} className={`tag-badge ${t === 'Urgent' ? 'urgent' : ''}`}>
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleApply(job.id)}
                        className="btn-secondary job-apply-btn"
                      >
                        {isApplied ? (
                          <span className="job-applied-indicator">
                            <CheckCircle style={{ width: '12px', height: '12px' }} /> Applied
                          </span>
                        ) : (
                          'Apply Free'
                        )}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="preview-body candidate-card">
              <div className="candidate-header">
                <div className="candidate-avatar">
                  PP
                </div>
                <div>
                  <div className="candidate-name-row">
                    <strong className="candidate-name">Priya Patel</strong>
                    <span className="tag-badge candidate-verified-badge">
                      Phone verified
                    </span>
                  </div>
                  <div className="candidate-meta">
                    Edison, NJ · Available immediately
                  </div>
                </div>
              </div>

              <div className="candidate-experience-box">
                <div className="candidate-experience-label">
                  Verified Experience (6 Years)
                </div>
                <div className="candidate-experience-list">
                  <div><strong>Shift Lead</strong>, corner store (2023 – Present • 2 yrs)</div>
                  <div><strong>Cashier</strong>, neighborhood market (2021 – 2023 • 2 yrs)</div>
                  <div><strong>Cashier</strong>, family store (2019 – 2021 • 2 yrs)</div>
                </div>
              </div>

              <div className="candidate-skills-row">
                <span className="tag-badge">POS Systems</span>
                <span className="tag-badge">Night shift</span>
                <span className="tag-badge candidate-lang-badge">Gujarati</span>
                <span className="tag-badge">Lottery Terminal</span>
              </div>

              <Link to="/contact" className="btn-primary candidate-hire-btn">
                Message Priya via In-App Chat
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
