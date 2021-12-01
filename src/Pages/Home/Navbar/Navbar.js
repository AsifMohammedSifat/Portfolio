import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-color fixed-top">
      <div className="container-fluid">

       <Link to="/home" className="navbar-brand brand-name">AMS</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse  bg-color" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto justify-content-between">

            <li className="nav-item">
             <Link to="/home" className="nav-link active text-white fs-5" aria-current="page">Home</Link>
            </li>

            <li className="nav-item">
             <Link to="/about" className="nav-link text-white fs-5">About Me</Link>
            </li>

            <li className="nav-item">
             <Link to="/projects" className="nav-link text-white fs-5">Projects</Link>
            </li>
            <li className="nav-item">
             <Link to="/contact" className="nav-link text-white fs-5">Contact</Link>
            </li>
            <li className="nav-item">
             <Link to="/blogs" className="nav-link text-white fs-5">Blogs</Link>
            </li>
            
          </ul>
        </div>
      </div>
</nav>
      
    </div>
  );
};

export default Navbar;