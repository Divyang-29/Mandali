import { useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';
import './AuthPage.css';

export default function AuthPage() {
  const location = useLocation();
  const isSignUp = location.pathname.includes('signup');

  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('Store owner');
  const [step, setStep] = useState(1); // 1 = Phone input, 2 = OTP, 3 = Verified
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneFormat = (val) => {
    const cleaned = val.replace(/\D/g, '').slice(0, 10);
    let formatted = cleaned;
    if (cleaned.length > 6) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
    } else if (cleaned.length > 3) {
      formatted = `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    }
    setPhone(formatted);
    setError('');
  };

  const handleSendCode = (e) => {
    e.preventDefault();
    const raw = phone.replace(/\D/g, '');
    if (raw.length < 10) {
      setError('Please enter a valid 10-digit US mobile number.');
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(2);
    }, 400);
  };

  const handleConfirmCode = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 400);
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-page-container">
        <header className="auth-header-lockup">
          <Link to="/" className="auth-logo-link">
            <img 
              src="/logo.png" 
              alt="Mandali" 
              className="auth-logo-img"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <span className="auth-brand-name">Mandali</span>
          </Link>
          <h1 className="auth-title">
            {isSignUp ? 'Join the Verified Network' : 'Sign in with Phone'}
          </h1>
          <p className="auth-subtitle">
            {isSignUp 
              ? 'Early operator access for store owners, workers, and technicians.'
              : 'Private beta operator access via verified SMS token.'
            }
          </p>
        </header>

        <main className="auth-card">
          {step === 1 && (
            <form onSubmit={handleSendCode} className="auth-form">
              <span className="auth-carrier-badge">
                <ShieldCheck style={{ width: '14px', height: '14px' }} />
                <span>Carrier-Verified Community</span>
              </span>

              {isSignUp && (
                <div className="auth-field-group">
                  <label className="auth-label">I am joining as:</label>
                  <div className="auth-role-group">
                    {['Store owner', 'Employee', 'Partner'].map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRole(r)}
                        className={`auth-role-btn ${role === r ? 'active' : ''}`}
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="auth-field-group">
                <label className="auth-label" htmlFor="auth-phone">Mobile Phone Number</label>
                <div className="auth-phone-input-wrap">
                  <span className="auth-phone-prefix">+1</span>
                  <input
                    id="auth-phone"
                    type="tel"
                    required
                    placeholder="(555) 000-0000"
                    value={phone}
                    onChange={(e) => handlePhoneFormat(e.target.value)}
                    className="auth-phone-input"
                    autoFocus
                  />
                </div>
                {error && <p className="auth-error-msg">{error}</p>}
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="auth-btn-primary"
              >
                <span>{isLoading ? 'Sending SMS...' : 'Send Verification Code'}</span>
                <ArrowRight style={{ width: '14px', height: '14px' }} />
              </button>

              <p className="auth-legal-disclaimer">
                By tapping continue, you agree to receive an automated SMS verification token. Standard carrier message and data rates may apply.
              </p>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleConfirmCode} className="auth-form">
              <p className="auth-otp-intro">
                We sent a 6-digit verification code to <strong>+1 {phone}</strong>.
              </p>

              <div className="auth-field-group">
                <label className="auth-label">Enter 6-Digit Code</label>
                <div className="auth-otp-grid">
                  {['4', '8', '2', '9', '1', '0'].map((digit, i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      defaultValue={digit}
                      className="auth-otp-digit"
                      aria-label={`Digit ${i + 1}`}
                    />
                  ))}
                </div>
              </div>

              <div className="auth-resend-row">
                <span>Didn't receive it?</span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="auth-text-btn"
                >
                  Change phone number
                </button>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="auth-btn-primary"
              >
                <Lock style={{ width: '14px', height: '14px' }} />
                <span>{isLoading ? 'Verifying...' : 'Verify & Continue'}</span>
              </button>
            </form>
          )}

          {step === 3 && (
            <div className="auth-verified-state">
              <div className="auth-verified-icon">
                <CheckCircle2 style={{ width: '28px', height: '28px' }} />
              </div>
              <h2 className="auth-verified-title">Identity Verified</h2>
              <p className="auth-verified-desc">
                Welcome to Mandali. Your phone number has been authenticated. Early beta accounts are being activated in weekly geographic batches.
              </p>
              <Link to="/" className="auth-btn-primary">
                <span>Return to Home</span>
                <ArrowRight style={{ width: '14px', height: '14px' }} />
              </Link>
            </div>
          )}
        </main>

        <nav className="auth-footer-nav">
          {isSignUp ? (
            <p>
              Already registered?{' '}
              <Link to="/login" className="auth-footer-link">Sign in here</Link>
            </p>
          ) : (
            <p>
              Don't have an operator account?{' '}
              <Link to="/signup" className="auth-footer-link">Apply for early access</Link>
            </p>
          )}
        </nav>

        <aside className="auth-legal-disclaimer">
          Protected by Mandali carrier verification protocols.
          <br />
          <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link>
        </aside>
      </div>
    </div>
  );
}
