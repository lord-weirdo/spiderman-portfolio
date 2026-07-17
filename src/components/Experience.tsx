import "./styles/Experience.css";

const Experience = () => {
  return (
    <div className="career-section experience-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Associate: Python</h4>
                <h5>GSFC University, Vadodara</h5>
              </div>
              <h3>July 2025 - Oct 2025</h3>
            </div>
            <p>
              Conducted lab lectures for BTech CSE 3rd semester students, teaching Python programming fundamentals. Provided supplementary learning materials and prepared students for end-semester practical examinations. Served as a mentor bridging the gap between faculty and students.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Associate: Python</h4>
                <h5>GSFC University, Vadodara</h5>
              </div>
              <h3>Jan 2025 - Apr 2025</h3>
            </div>
            <p>
              Conducted lab lectures for BTech FEHS 2nd semester students, teaching Python programming fundamentals. Maintained attendance records and academic progress reports for approximately 35 students. Provided individualized support to students struggling with programming concepts.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Academic Associate: C</h4>
                <h5>GSFC University, Vadodara</h5>
              </div>
              <h3>Aug 2024 - Nov 2024</h3>
            </div>
            <p>
              Conducted lab lectures for BSc Data Science 1st semester students, teaching C programming language fundamentals. Provided supplementary learning materials to enhance student comprehension and prepared students for end-semester practical examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
