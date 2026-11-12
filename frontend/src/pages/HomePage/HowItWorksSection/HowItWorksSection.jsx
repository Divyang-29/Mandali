import './HowItWorksSection.css';

export default function HowItWorksSection() {
  const ownerSteps = [
    {
      num: 1,
      title: 'Create your owner profile',
      desc: 'Add store details, location, and contact information in under 3 minutes.'
    },
    {
      num: 2,
      title: 'Post a job or browse employees',
      desc: 'Post openings in under 2 minutes. Browse applicant profiles before reaching out.'
    },
    {
      num: 3,
      title: 'Hire with confidence',
      desc: 'Message applicants directly and ask the questions a resume never answers.'
    }
  ];

  const employeeSteps = [
    {
      num: 1,
      title: 'Build your profile',
      desc: 'Add your work history, previous employers, and availability so owners can understand your experience.'
    },
    {
      num: 2,
      title: 'Browse jobs near you',
      desc: 'See all open positions in your area within the industry you know. Apply in one tap, no resume needed.'
    },
    {
      num: 3,
      title: 'Always free',
      desc: 'Mandali is free for employees forever. Apply for jobs and keep your profile up to date.'
    }
  ];

  return (
    <section id="how-it-works" className="how-section">
      <div className="how-container">
        <div className="how-header">
          <span className="how-pill">How it works</span>
          <h2 className="how-title">Simple for owners. Simple for employees.</h2>
          <p className="how-subtitle">
            Onboarding takes under 5 minutes. No forms. No resumes.
          </p>
        </div>

        <div className="how-columns-grid">
          {/* For Store Owners */}
          <div className="how-column-box">
            <div className="how-column-heading">For store owners</div>
            <div className="how-steps-list">
              {ownerSteps.map((s) => (
                <div key={s.num} className="how-step-item">
                  <div className="how-step-num">{s.num}</div>
                  <div className="how-step-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* For Employees */}
          <div className="how-column-box">
            <div className="how-column-heading">For employees</div>
            <div className="how-steps-list">
              {employeeSteps.map((s) => (
                <div key={s.num} className="how-step-item">
                  <div className="how-step-num">{s.num}</div>
                  <div className="how-step-body">
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

