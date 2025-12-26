import React from "react";
// import project from "./Data/projects.json";
// import bootstrap from "./css/bootsrap.css"
function Projects() {
  return (
    <>
      <h1 className="my-5">Projects</h1>
      <div className="container projects" id="projects">
        <div className="project">
          <div className="card bg-dark text-white" style={{ width: "18rem" }}
           data-aos="flip-right"
      data-aos-duration="1000"
          >
            <img
              src="https://media.istockphoto.com/id/1479330210/photo/artisan-baker-applying-egg-wash-on-to-pastries-in-a-small-bakery.webp?s=1024x1024&w=is&k=20&c=qBh0vu4BO2WHBPJGdsu9jVJ7HdrXWOLtCQHMWzmReKM="
              className="card-img-top"
              alt="..."
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
              src="https://media.istockphoto.com/id/1731629004/photo/mobile-app-design-web-design-streaming-app-and-user-interface.jpg?s=1024x1024&w=is&k=20&c=O2qUL5ZEGP40gikvXFZ0UeDSTUjj8j0osZ_G6GWylEw="
              className="card-img-top"
              alt="..."
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
              src="data:image/jpeg;base64,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QoqDgafc0MgjbrRQggc4wPXeitux6AjFKjOxowmBGGHvn1piN5ZV8pojTMYyWO7DFAZwQMDBxWicgL0oaQ7oZit9cakPhydhWmt5sYI1DflS4JHJjiirLIBtIwzsflTRIxBMx0oy7hDvjnSTDJJpqKcYJZfbIpeUq0mUGF9BTYycUrxppU4HripfaZc/GT9KEPTrREiLHfYVIE3uHkVQ/JetMW/wD50JVSJfU+9Thzy1bVlItMbU5FEXagIcUTXTilQmych83PFC8fBxnNReTANJuSW1U7QbR8TnlQycmlY5G68vWiGQDckY9apP0JaCsuRSsxhjcqyLn5Ux423OqydzJKzGmKiI5j51I7tg9KysoGSdApGM0WI6mOegrKygAZ/rD7VFfNIM1lZQAS4YmRR0prUcqm2MfurKygZEeZyT6D91CljVYwQN63WUACkUaM9aEK3WUig1uocvqGcIaX/jWVlMlmMoFRrKygQVEBQk86gCRWVlHcfY1nepqd63WUxBM5D/ACoKDNZWUgDIo50UE4rKykBMbjetptyrKyhgSBOrnU9RxWVlIYGVjigajW6yky0EOwAFCbc4PKsrKSED/UO5oeKysrQg/9k="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Netflix Clone</h5>
              <p className="card-text">
                This Netflix clone is a fully responsive project . In this
                project i only used Reactjs library. in the project used a
                proper Api an dsome more function.
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
              src="https://media.istockphoto.com/id/1352242378/photo/environment-data-symbol-forecast-for-meteorology-presentation-and-report-background.jpg?s=1024x1024&w=is&k=20&c=eY5p919ZFUdeUlTxwp9vHLh4HngsB9r-PJjltx0vjds="
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Wheather Report</h5>
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
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
