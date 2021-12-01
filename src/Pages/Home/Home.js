import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Projects from '../Projects/Projects';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="brand-name text-center mt-5 text-dark" id="serviceid">My Projects</h1>
            <hr className="fw-bold text-info  w-50 mx-auto"/>
            <Projects></Projects>

            <h1 className="brand-name text-center mt-5 text-dark" id="serviceid">About Me</h1>
            <hr className="fw-bold text-info  w-50 mx-auto"/>
            <About></About>
        
            
        </div>
    );
};

export default Home;