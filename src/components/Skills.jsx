import skills from "./Data/skills.json";

function Skills() {
  return (
    <div className="container skills"
    id="skills"
      
    >
      <h1>Technical Skills</h1>
      
      <div className="skills-section">
        <h3>Frontend & Languages</h3>
        <div className="icons">
          <div className="icon"
           data-aos="flip-left"
        data-aos-duration="1000"
          >
            <div className="image1">
              <div className="react"></div>
              <h2>React.js</h2>
            </div>
            <div className="image1">
              <div className="js"></div>
              <h2>JavaScript (ES6+)</h2>
            </div>
          </div>
          <div className="icon"
           data-aos="flip-left"
        data-aos-duration="1000"
          >
            <div className="image1">
              <div className="css"></div>
              <h2>Tailwind CSS</h2>
            </div>
            <div className="image1">
              <div className="css"></div>
              <h2>Bootstrap</h2>
            </div>
          </div>
          <div className="icon"
           data-aos="flip-left"
        data-aos-duration="1000"
          >
            <div className="image1">
              <div className="html"></div>
              <h2>HTML5</h2>
            </div>
            <div className="image1">
              <div className="css"></div>
              <h2>CSS3</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3>Backend & Tools</h3>
        <div className="icons">
          <div className="icon"
           data-aos="flip-left"
        data-aos-duration="1000"
          >
            <div className="image1">
              <div className="node"></div>
              <h2>Node.js</h2>
            </div>
            <div className="image1">
              <div className="express"></div>
              <h2>Express.js</h2>
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
              <h2>Git/GitHub</h2>
            </div>
          </div>
          <div className="icon"
           data-aos="flip-left"
        data-aos-duration="1000"
          >
            <div className="image1">
              <div className="html"></div>
              <h2>Postman</h2>
            </div>
            <div className="image1">
              <div className="html"></div>
              <h2>MVC Architecture</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
