import React from "react";
// import project from "./Data/projects.json";
// import bootstrap from "./css/bootsrap.css"
function Projects() {
  return (
    <>
      <h1 className="my-5">Projects</h1>
      <div className="container projects" id="projects">
        
        {/* Academic Projects Section */}
        <h2 className="text-center mb-4">Academic Projects</h2>
        <div className="project">
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://geetashakti.org/og-image.svg"
              className="card-img-top"
              alt="Geetashakti Platform"
            />
            <div className="card-body">
              <h5 className="card-title">Geetashakti - Non-profit Platform</h5>
              <p className="card-text">
                Built a non-profit initiative platform for cancer awareness with workshop management and outreach tracking. Implemented a clean UI/UX to improve user navigation for screening camp information.
              </p>
              <a href="https://geetashakti.org" target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
          
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=250&fit=crop&crop=center"
              className="card-img-top"
              alt="Bookstore Management"
            />
            <div className="card-body">
              <h5 className="card-title">Bookstore Management Application</h5>
              <p className="card-text">
                Developed a CRUD application with MVC architecture for efficient inventory management. Implemented image upload and advanced filter functionalities using Node.js and Express.
              </p>
              <a href="#" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
          
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop&crop=center"
              className="card-img-top"
              alt="Power Health Gym"
            />
            <div className="card-body">
              <h5 className="card-title">Power Health Gym</h5>
              <p className="card-text">
                Designed a fully responsive fitness website with modern UI components and location mapping. Built with React.js and Tailwind CSS for optimal user experience.
              </p>
              <a href="#" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>

        {/* Other Projects Section */}
        <h2 className="text-center mb-4 mt-5">Other Projects</h2>
        <div className="project">
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop&crop=center"
              className="card-img-top"
              alt="Bakery Website"
            />
            <div className="card-body">
              <h5 className="card-title">Bakery Website</h5>
              <p className="card-text">
                This bakery website is fully responsive and simple projects. In
                this project i used HTML, CSS and JAVASCRIPT And TAILWIND.
              </p>
              <a href="#" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
          
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=250&fit=crop&crop=center"
              className="card-img-top"
              alt="HULU UI"
            />
            <div className="card-body">
              <h5 className="card-title">HULU UI</h5>
              <p className="card-text">
                This HULU UI project i made with the help of HTML , CSS ,
                TAilwind and JAVASCRIPT. This project is a fully responsive
                website
              </p>
              <a href="#" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
          
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://images.unsplash.com/photo-1561489403-61a0ed5bbeb5?w=400&h=250&fit=crop&crop=center"
              className="card-img-top"
              alt="Weather Report"
            />
            <div className="card-body">
              <h5 className="card-title">Weather Report</h5>
              <p className="card-text">
                This weather Report is also create with the help of HTML , CSS ,
                JAVASCIPT .
              </p>
              <a href="#" className="btn btn-primary mx-3">
                {" "}
                Demo
              </a>
              <a href="#" className="btn btn-warning">
                {" "}
                Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 pt-4"></div>
    </>
  );
}

export default Projects;
