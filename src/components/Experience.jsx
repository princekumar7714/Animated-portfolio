import React from "react";
import experience from "./Data/experience.json";
import photo from "./Data/img/trainingBasket.png";
function Experience() {
  return (
    <>
     <h1>Experience</h1>
      <div className="container ex " id="experience">
       
        {experience.map((data) => {
          return (
            <>
              <div key={data.id} className="ex-items text-center my-5"
                 data-aos="zoom-in"
      data-aos-duration="1000"
              >
                <div className="left">
                  <img src={photo} alt="" />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h3 style={{ color: "orange" }}>{data.organisation}</h3>
                  <h4>
                    {" "}
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}
                    </span>{" "}
                   <span style={{ color: "yellow" }}> {data.location}{" "}</span>
                  </h4>
                  <h6 style={{ color: "yellow" }}>{data.experiences[0]}</h6>
                  <h6 style={{ color: "yellow" }}>{data.experiences[1]}</h6>
                  <h6 style={{ color: "yellow" }}>{data.experiences[2]}</h6>
                  <h6 style={{ color: "yellow" }}>{data.experiences[3]}</h6>
                  <h6 style={{ color: "yellow" }}>{data.experiences[4]}</h6>
                  <h6 style={{ color: "yellow" }}>{data.experiences[5]}</h6>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Experience;
