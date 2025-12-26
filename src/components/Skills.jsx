import skills from "./Data/skills.json";

function Skills() {
  return (
    <div className="container skills"
    id="skills"
      
    >
      <h1>Skills</h1>
      <div className="icons">
        <div className="icon"
         data-aos="flip-left"
      data-aos-duration="1000"
        >
          <div className="image1">
            <div className="html"></div>
            <h2>HTML</h2>
          </div>
          <div className="image1">
            <div className="css"></div>
            <h2>CSS</h2>
          </div>
        </div>
        <div className="icon"
         data-aos="flip-left"
      data-aos-duration="1000"
        >
           <div className="image1">
            <div className="js"></div>
            <h2>JS</h2>
          </div>
            <div className="image1">
            <div className="react"></div>
            <h2>Reactjs</h2>
          </div>

        </div>
        <div className="icon"
         data-aos="flip-left"
      data-aos-duration="1000"
        >
            <div className="image1">
            <div className="node"></div>
            <h2>Nodejs</h2>
          </div>
            <div className="image1">
            <div className="express"></div>
            <h2>Expressjs</h2>
          </div>

        </div>
        <div className="icon"
         data-aos="flip-left"
      data-aos-duration="1000"
        >
             <div className="image1">
            <div className="mongo"></div>
            <h2>MongoDB</h2>
          </div>
            <div className="image1">
            <div className="github"></div>
            <h2>Github</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
