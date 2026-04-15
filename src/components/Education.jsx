import React from "react";

function Education() {
  return (
    <>
      <div className="mt-5 mb-4 pt-5">
        <h1 className="my-3">Education</h1>
        <div className="container education" id="education">
        <div className="education-item"
             data-aos="fade-up"
             data-aos-duration="1000"
        >
          <div className="card bg-dark text-white" style={{ width: "100%" }}>
            <div className="card-body">
              <h3 className="card-title">Bachelor of Computer Applications (BCA)</h3>
              <h5 className="card-subtitle mb-2 text-warning">Dewan VS Group of Institutions, Meerut</h5>
              <p className="card-text">
                <span className="text-success">2022 – 2025</span>
              </p>
              <p className="card-text">
                Completed Bachelor's degree in Computer Applications with focus on software development and web technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="education-item"
             data-aos="fade-up"
             data-aos-duration="1000"
        >
          <div className="card bg-dark text-white" style={{ width: "100%" }}>
            <div className="card-body">
              <h3 className="card-title">Senior High School (Class 12)</h3>
              <h5 className="card-subtitle mb-2 text-warning">Resonance Public School, Baraut</h5>
              <p className="card-text">
                <span className="text-success">2020 – 2021</span>
              </p>
              <p className="card-text">
                Completed intermediate education with foundation in mathematics and computer science.
              </p>
            </div>
          </div>
        </div>

        <div className="education-item"
             data-aos="fade-up"
             data-aos-duration="1000"
        >
          <div className="card bg-dark text-white" style={{ width: "100%" }}>
            <div className="card-body">
              <h3 className="card-title">MERN Stack Development Course</h3>
              <h5 className="card-subtitle mb-2 text-warning">Training Basket Institute, Noida</h5>
              <p className="card-text">
                <span className="text-success">Completed</span>
              </p>
              <p className="card-text">
                Mastered full-stack development using MongoDB, Express.js, React.js, and Node.js. 
                Gained hands-on experience in building dynamic web applications with user authentication and authorization.
                Worked extensively on RESTful APIs, database integration, and industry-standard deployment practices.
                Developed skills in responsive design using Bootstrap and modern JavaScript frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Education;
