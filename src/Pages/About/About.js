import React from 'react';
import './About.css'

const About = () => {
    return (
        <div className="mt-5 container">
            
            {/* <ParticleBackground></ParticleBackground> */}
           <div className="row container ">
           <div className="col col-12  d-flex align-items-center justify-content-center flex-column">
                   <div className="w-50">                       
                   <img className="img-fluid" src="./images/0.png" alt="asif"/>
                   </div>

               </div>
               

               <div className="col col-12 col-md-12 d-flex flex-column  justify-content-center align-items-center text-white">
                   <h1>
                       Hi,I am Asif Mohammed Sifat
                   </h1>
                   <p>
                       Front End Developer |
                        I am an enthusiastic JavaScript developer with knowing some framework for the frontend and  the backend. 
                        <hr className="fw-bold text-info  w-50 mx-auto"/>
                        <h2 className="text-center skills">Skills</h2>
                        <hr/>
                        <p> <span className="fw-bold fs-4">Expertise:</span> React.js, JavaScript, HTML, CSS, Bootstrap 5, React Bootstrap, Tailwind
                        Comfortable: Node.js, Express.js, MongoDB
                        Familiar: Typescript, Context API, REST API, Browser APIs,Material UI</p>
                        <p> <span className="fw-bold fs-4">Comfortable:</span> Node.js, Express.js, MongoDB</p>
                        <p> <span className="fw-bold fs-4">Familiar:</span> Typescript, Context API, REST API, Browser APIs,Material UI</p>
                        <p> <span className="fw-bold fs-4">Tools:</span> Git, Github, VS Code, Chrome Dev-Tool, Firebase, Heroku, Netlify.</p>
                    </p>
                    <ul className="social-icon">
                    <li><a alt="socila icon" href="https://mailto:asifmohaammedsifat38@gmail.com"><i className="fas fa-envelope"></i></a></li>
                        <li><a alt="socila icon" href="https://www.linkedin.com/in/asifmohammedsifat/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a alt="socila icon" href="https://web.facebook.com/asif.engrr/"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a alt="socila icon" href="https://github.com/AsifMohammedSifat"><i className="fab fa-github-square"></i></a></li>
                    </ul>

                <div className="btn-group mx-auto text-center">
              

                <a target="_blank" href="https://www.linkedin.com/in/asifmohammedsifat/">  <button>Hire Me</button></a>


                <a target="_blank" href="https://drive.google.com/file/d/1HLVG8G6yct6OIjy79cUrRi596DKbcZKc/view?fbclid=IwAR15LS3Ao-DmUAimsekHxeKSrMtCPuNT6M8VFuFSk-SVG79nr2usRKbsExE"><button>Resume</button></a>

                    
                </div>
                   
               </div>
             
               

           </div>
           <small className="text-white">Copyright © 2021 by AsifMohammedSifat</small>
            
        </div>
    );
};

export default About;