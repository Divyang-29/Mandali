import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './WaitlistSection.css';

export default function WaitlistSection() {
  const [role, setRole] = useState('Store owner');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [state, setState] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming', 'Other'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="waitlist-section">
      <div className="waitlist-container">
        <div className="waitlist-header">
          <span className="waitlist-pill">Get early access</span>
          <h2 className="waitlist-title">Join the waitlist or get in touch</h2>
          <p className="waitlist-subtitle">
            Be among the first on the platform. Or reach out if you are a partner, investor, or association.
          </p>
        </div>

        <div className="waitlist-form-card">
          {submitted ? (
            <div className="waitlist-success-state">
              <div className="waitlist-success-badge">
                <CheckCircle2 style={{ width: '32px', height: '32px' }} />
              </div>
              <div>
                <h3 className="waitlist-success-title">
                  Thank you for reaching out
                </h3>
                <p className="waitlist-success-text">
                  We received your submission, {firstName || 'friend'}. We will only contact you with verified updates about Mandali.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-secondary"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="waitlist-form">
              <div className="form-grid-two">
                <div className="form-field-group">
                  <label className="form-label" htmlFor="first-name">First name</label>
                  <input
                    id="first-name"
                    required
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-input"
                  />
                </div>
                <div className="form-field-group">
                  <label className="form-label" htmlFor="last-name">Last name</label>
                  <input
                    id="last-name"
                    required
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="email-addr">Email address</label>
                <input
                  id="email-addr"
                  required
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-field-group">
                <label className="form-label">I am a</label>
                <div className="role-radio-group">
                  {['Store owner', 'Employee', 'Partner or investor'].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRole(r)}
                      className={`role-radio-btn ${role === r ? 'selected' : ''}`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="state-select">US State</label>
                <select
                  id="state-select"
                  required
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="form-select"
                >
                  <option value="" disabled>Select US State</option>
                  {states.map((st) => (
                    <option key={st} value={st}>{st}</option>
                  ))}
                </select>
              </div>

              <div className="form-field-group">
                <label className="form-label" htmlFor="message-box">Message</label>
                <textarea
                  id="message-box"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your store or how you would like to get involved"
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn-submit-waitlist">
                <span>Get in touch</span>
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </button>

              <div className="waitlist-compliance">
                By joining the waitlist, you acknowledge our <Link to="/privacy">Privacy Policy</Link>. We will only use your details to contact you about Mandali.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

