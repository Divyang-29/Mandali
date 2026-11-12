import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import './FaqPage.css';

export default function FaqPage() {
  const faqs = [
    {
      q: 'What is Mandali?',
      a: 'Mandali is a community platform built specifically for independent convenience store owners and employees in the United States. At launch it includes a verified job board, a community feed, direct in-app messaging, a local repair directory, and industry news.'
    },
    {
      q: 'Who founded Mandali?',
      a: 'Mandali was founded by Miral Patel. He spent 18 months behind the counter of a Jersey City convenience store and has conducted over 300 in-depth conversations with store operators across New Jersey, Ohio, Kentucky, Georgia, and Florida.'
    },
    {
      q: 'Who is Mandali for?',
      a: 'Mandali is for independent convenience store owners, store managers, cashiers, supervisors, and trusted local service providers (refrigeration, HVAC, electrical, POS wiring).'
    },
    {
      q: 'Is Mandali free?',
      a: 'Mandali is 100% free for all employees and workers forever. For store owners, Mandali is completely free during the beta rollout period.'
    },
    {
      q: 'When does Mandali launch?',
      a: 'Mandali is currently active on Web in private beta across New Jersey, New York, Pennsylvania, and Georgia. The official iOS mobile app will launch in early 2026.'
    },
    {
      q: 'Do I need an invite to join?',
      a: 'During private rollout, owners join via our waitlist. We verify every store owner and employee by mobile phone number to eliminate spam, scams, and unvetted solicitations.'
    },
    {
      q: 'What does the name Mandali mean?',
      a: 'In Gujarati, Mandali (મંડળી) means a gathering, a trusted circle, or an association of people who come together to look out for each other and share mutual responsibility.'
    },
    {
      q: 'Why does Mandali start with South Asian store owners?',
      a: 'South Asian families, predominantly Gujarati, own an estimated 80,000 independent convenience stores in the United States. The trust networks already exist; Mandali gives this community dedicated software designed for their operational reality.'
    },
    {
      q: 'How is Mandali different from WhatsApp groups?',
      a: 'WhatsApp groups are noisy, unsearchable, prone to scams, and leak personal phone numbers. Mandali provides structured hiring with verifiable local work history, zip-code filtered contractor directories, and private in-app messaging.'
    },
    {
      q: 'How can I contact the Mandali team?',
      a: 'You can reach us directly at hello@themandali.com or submit a request on our contact page. We reply to all store owners within 24 hours.'
    }
  ];

  return (
    <div className="faq-page-wrapper">
      <div className="faq-page-container">
        
        {/* Breadcrumb */}
        <nav className="faq-breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>Frequently Asked Questions</span>
        </nav>

        <div className="faq-editorial-layout">
          {/* ========================================================= */}
          {/* LEFT METADATA RAIL                                        */}
          {/* ========================================================= */}
          <aside className="faq-rail">
            <div className="rail-card">
              <span className="rail-kicker">Knowledge Dispatch</span>
              <ul className="rail-meta-list">
                <li><span>Category:</span> <strong>FAQ & Help</strong></li>
                <li><span>Verified Answers:</span> <strong>10 Topics</strong></li>
                <li><span>Pricing Status:</span> <strong>Free in Beta</strong></li>
                <li><span>Workers:</span> <strong>Free Forever</strong></li>
              </ul>
            </div>

            <div className="rail-card">
              <span className="rail-kicker">Quick Jump</span>
              <ul className="rail-toc-list">
                <li><a href="#faq-items">1. Core Questions (1–10)</a></li>
                <li><a href="#custom-inquiry">2. Operator Support Inquiries</a></li>
              </ul>
            </div>

            <div className="rail-action-box">
              <h4>Need Direct Support?</h4>
              <p>Speak directly with our team regarding store verification.</p>
              <Link to="/contact" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', padding: '6px 12px' }}>
                <span>Contact Mandali</span>
                <ArrowRight style={{ width: '12px', height: '12px' }} />
              </Link>
            </div>
          </aside>

          {/* ========================================================= */}
          {/* RIGHT EDITORIAL ARTICLE                                   */}
          {/* ========================================================= */}
          <article className="faq-article">
            <header className="article-header">
              <span className="article-eyebrow">Document № 08 · Operational Reference</span>
              <h1 className="article-title">Frequently asked questions</h1>
              <p className="article-lead">
                Clear, transparent answers about Mandali, our founding team, pricing, security, and nationwide rollout.
              </p>
            </header>

            <section id="faq-items" className="editorial-section">
              <div className="editorial-pull-quote">
                “Mandali is built on radical operational simplicity. If you ever have a question about how your data is handled or how job verification works, we give you direct answers with zero corporate evasion.”
              </div>

              {faqs.map((f, i) => (
                <div key={i} className="faq-item-card">
                  <h3 className="faq-question-title">{f.q}</h3>
                  <p className="faq-answer-text">{f.a}</p>
                </div>
              ))}
            </section>

            <section id="custom-inquiry" className="editorial-section">
              <h2>Have a question not listed here?</h2>
              <p>
                We welcome inquiries from independent store operators, regional retail associations, wholesale distributors, and prospective partners.
              </p>

              <div style={{ marginTop: '14px', display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <Link to="/contact" className="btn-primary">
                  <span>Send us a question directly →</span>
                </Link>
                <Link to="/about" className="btn-secondary">
                  <span>Read About Mandali →</span>
                </Link>
              </div>
            </section>
          </article>
        </div>

      </div>
    </div>
  );
}
