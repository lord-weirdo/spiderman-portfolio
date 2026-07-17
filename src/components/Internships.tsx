import "./styles/Experience.css";

const Internships = () => {
  return (
    <div className="career-section internship-section section-container">
      <div className="career-container">
        <h2>
          My <span>Internships</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>TCS, Gandhinagar</h5>
              </div>
              <h3>8th Sem | Feb 2026 - June 2026 (4 Months)</h3>
            </div>
            <p>
              Designed CipherLens, a comprehensive web-based platform for generating and analyzing Cryptographic Bills of Materials (CBOM). Architected highly concurrent backend using Python & FastAPI and developed interactive frontend dashboard.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer Intern</h4>
                <h5>PayGURU Technosoft, Vadodara</h5>
              </div>
              <h3>7th Sem | Dec 2025 - Jan 2026 (1 Month)</h3>
            </div>
            <p>
              Designed and developed production-grade software systems including a Visitor Management System, WhatsApp Business CRM, and CCTV-based Face Recognition System.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer Intern</h4>
                <h5>PayGURU Technosoft, Vadodara</h5>
              </div>
              <h3>6th Sem | June 2025 - July 2025 (1 Month)</h3>
            </div>
            <p>
              Designed, developed, and deployed "PookieTrak," a cross-platform desktop application for real-time monitoring of software services and network-connected devices using PyQt6.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer Intern</h4>
                <h5>Sannibh Technologies, Vadodara</h5>
              </div>
              <h3>5th Sem | Dec 2024 - Jan 2025 (1 Month)</h3>
            </div>
            <p>
              Developed a full-stack ERP software ("Brass ERP") for brass part manufacturing using the MERN stack. Built secure authentication, client management, and dynamic dashboards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
