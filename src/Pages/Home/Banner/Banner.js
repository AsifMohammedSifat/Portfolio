import React, { useEffect, useState } from 'react';
import './Banner.css'


const Banner = () => {
    
    return (
        <div className=" mt-5 pt-5 container">
            
            {/* <ParticleBackground></ParticleBackground> */}
           <div className="row container ">
               

               <div className="col col-12 col-md-6 d-flex flex-column  justify-content-center align-items-center text-white">
                   <h1>
                       Hi,I am Asif Mohammed Sifat
                   </h1>
                   <h4 className="">I am a Front-end Developer {
                 
                  
                   }</h4>
                   <p>
                       
                        I am an enthusiastic JavaScript developer with knowing some framework for the frontend and  the backend. 
                       </p>
                    <ul className="social-icon">
                        <li><a alt="socila icon" href="https://www.linkedin.com/in/asifmohammedsifat/"><i className="fab fa-linkedin"></i></a></li>
                        <li><a alt="socila icon" href="https://web.facebook.com/asif.engrr/"><i className="fab fa-facebook-square"></i></a></li>
                        <li><a alt="socila icon" href="https://github.com/AsifMohammedSifat"><i className="fab fa-github-square"></i></a></li>
                        
                        <li><a alt="socila icon" href="https://mailto:asifmohaammedsifat38@gmail.com"><i className="fas fa-envelope"></i></a></li>
                    </ul>

                <div className="btn-group">
              

                <a target="_blank" href="https://www.linkedin.com/in/asifmohammedsifat/">  <button>Hire Me</button></a>


                <a target="_blank" href="https://drive.google.com/file/d/1HLVG8G6yct6OIjy79cUrRi596DKbcZKc/view?fbclid=IwAR15LS3Ao-DmUAimsekHxeKSrMtCPuNT6M8VFuFSk-SVG79nr2usRKbsExE"><button>Resume</button></a>

                    
                </div>
                   
               </div>
               <div className="col col-12 col-md-6 d-flex align-items-center justify-content-center flex-column">
                   <div className=" ">
                       
                   <img className="img-fluid  mt-5 p-5 " src="./images/1.png" alt="asif"/>
                   </div>

               </div>
               

           </div>
            
        </div>
    );
};

export default Banner;