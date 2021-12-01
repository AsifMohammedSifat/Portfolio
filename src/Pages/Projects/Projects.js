import React from 'react';
import './Projects.css';

const Projects = () => {
    return (
        <div className="container text-white ">
            <div className=" mx-auto row mt-5 pt-5">
            
                <div className="col col-12 col-md-6">
                    {/* carosuel  */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./images/Projects/2/0.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/2/1.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/2/2.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                </div>

                </div>
                <div className="col col-12 col-md-6">
                    <h3 className="mt-1 text-info">Sigma Travel</h3>
                    <p>
                    Website Features:
                    </p>
                    <ul  className="res-font ms-0">
                    <br/><i className="far fa-hand-point-right"></i> Users can choose an offer and can book it.
                    <br/> <i className="far fa-hand-point-right"></i> User must login to the site to book an offer and other advantage.
                    <br/><i className="far fa-hand-point-right"></i> Admin can manage all Users booked offer and also Update status of the booked.
                    <br/><i className="far fa-hand-point-right"></i> Admin can also update the status of the booked order.<br/>
                    </ul> <br/>
                    <h5>Tools: React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Bootstrap</h5>


                    <a href="https://sigma-travel-asif.netlify.app/home" target="_blank">
                        <button><i className="fas fa-globe"></i> Live Site</button>
                    </a>

                    <a href="https://github.com/AsifMohammedSifat/Sigma-Travel-Clients" target="_blank">
                    <button className="bg-dark text-white"><i className="fab fa-github"></i> Github</button>
                    </a>

                    
                
                </div>

            </div>



            {/* project -2  */}
            <div className="row  mx-auto mt-5 pt-5">
                <div className="col col-12 col-md-6">
                    {/* carosuel  */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./images/Projects/1/0.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/1/1.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/1/3.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                </div>

                </div>
                <div className="col col-12  col-md-6">
                    <h3 className="mt-1 text-info">Sigma AutoMobile</h3>
                    <p>
                    Website Features:
                    </p>
                    <ul className="res-font ms-0">
                    <br/><i className="far fa-hand-point-right"></i> Admin can also update the status of the booked.
                    <br/> <i className="far fa-hand-point-right"></i> User must login to the site to book an offer and other advantage.
                    <br/><i className="far fa-hand-point-right"></i> User must login to the site to purchase a car .Users can see his/her booked cars
from My Orders option on Dashboard,User can add Review also.
                    </ul> <br/>
                    <h5> Tools: React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Bootstrap</h5>


                    <a href="https://sigma-automobile-asif.netlify.app/" target="_blank">
                        <button><i className="fas fa-globe"></i> Live Site</button>
                    </a>

                    <a href="https://github.com/AsifMohammedSifat/Sigma-AutoMobile-Clients" target="_blank">
                    <button className="bg-dark text-white"><i className="fab fa-github"></i> Github</button>
                    </a>

                    
                
                </div>

            </div>



            {/* project-3  */}

            <div className="row mx-auto mt-5 pt-5">
                <div className="col col-12 col-md-6">
                    {/* carosuel  */}
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">


                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>


                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src="./images/Projects/3/0.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/3/1.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src="./images/Projects/3/2.png" className="img-fluid d-block w-100" alt="..."/>
                            </div>
                        </div>


                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                </div>

                </div>
                
         
                <div className="col col-12 col-md-6">
                    <h3 className="mt-1 text-info">Sigma Hospital</h3>
                    <p>
                    Website Features:
                    </p>
                    <ul className="res-font ms-0">
                    <br/><i className="far fa-hand-point-right"></i> Users can choose an offer and can book it.
                    <br/> <i className="far fa-hand-point-right"></i> User must login to the site to book an offer and other advantage.
                    <br/><i className="far fa-hand-point-right"></i> Admin can manage all Users booked offer and also Update status of the booked.
                    <br/><i className="far fa-hand-point-right"></i> Admin can also update the status of the booked order.<br/>
                    </ul> <br/>
                    <h5>Tools: React.js, Node.js, Express.js, MongoDB, Firebase Authentication, Bootstrap</h5>


                    <a href="https://sigma-hospital.netlify.app/home" target="_blank">
                        <button><i className="fas fa-globe"></i> Live Site</button>
                    </a>

                    <a href="https://github.com/AsifMohammedSifat/Sigma-Hospital" target="_blank">
                    <button className="bg-dark text-white"><i className="fab fa-github"></i> Github</button>
                    </a>

                    
                
                </div>

            </div>

        </div>
    );
};

export default Projects;