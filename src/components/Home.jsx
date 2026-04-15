import React, { useEffect, useRef } from "react";
import pdf from "../pdf/Prince_Kumar_MERN_Resume.pdf";
import hero from '../icons/prince_profile.jpg'; 
import Typed from "typed.js"

function Home() {
  const typedRef = useRef(null)

    useEffect(() => {
   const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Prince Kumar",
        "Aspiring MERN Stack Developer",
        "Building responsive web solutions"
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed(typedRef.current , options)
    
      return () => {
        typed.destroy()
      }
    }, [])
    
  
  return  (
    <>
      <div className="conatiner Home" id="home">
        <div className="left"
           data-aos="fade-up-right"
      data-aos-duration="1000">
          <h1 ref={typedRef}>
           
          </h1>
          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right"
           data-aos="fade-up-left"
      data-aos-duration="1000"
        >
          <div className="image">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
