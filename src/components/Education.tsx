import "./styles/Education.css";

const Education = () => {
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          EDU<span className="do-h2">CATION</span>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {/* Box 1: B.TECH CSE */}
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>B.TECH CSE</h3>
              <h4>GSFC University (2022-2026)</h4>
              <p>Bachelor of Technology in Computer Science Engineering.</p>
              <div className="what-content-flex">
                <div className="what-tags">6.92 CGPA</div>
                <div className="what-tags">69.2%</div>
              </div>
            </div>
          </div>

          {/* Box 2: Class 12th */}
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLASS 12th</h3>
              <h4>Kendriya Vidyalaya No.2 E.M.E Baroda (2022)</h4>
              <p>Completed Class 12th from CBSE board.</p>
              <div className="what-content-flex">
                <div className="what-tags">63%</div>
              </div>
            </div>
          </div>

          {/* Box 3: Class 10th */}
          <div className="what-content">
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>CLASS 10th</h3>
              <h4>Kendriya Vidyalaya No.2 E.M.E Baroda (2020)</h4>
              <p>Completed Class 10th from CBSE board.</p>
              <div className="what-content-flex">
                <div className="what-tags">72%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
