import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Salesforce Developer </h4>
                <h5>Appstride Technologies</h5>
              </div>
              <h3>2026 - Present</h3>
            </div>
            <p>
              Working on Salesforce application development involving custom objects, 
              Apex programming, SOQL queries, validation rules, and automation. 
              Gaining hands-on experience in building business logic, data modeling, 
              and implementing real-world CRM solutions under mentor guidance.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Amici Infotech</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Worked on full-stack web development using HTML, CSS, PHP, and MySQL 
              to build a dynamic website for mid-semester paper solutions. 
              Implemented categorized PDF upload/retrieval, responsive design, 
              form handling, and basic CRUD operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Education</h4>
                <h5>Government Engineering College, Dahod</h5>
              </div>
              <h3>2023 - 2026</h3>
            </div>
            <p>
              Bachelor's in Computer Engineering (pursuing) - CGPA: 8.11. 
              Foundation in full-stack web development, database management, 
              and software engineering principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma</h4>
                <h5>Government Polytechnic College, Dahod</h5>
              </div>
              <h3>2020 - 2023</h3>
            </div>
            <p>
              Diploma in Computer Engineering - CGPA: 9.08. 
              Strong foundation in programming fundamentals, algorithms, 
              and computer science concepts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
