import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
   <>
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container">
                <p className="text-white fs-3 fw-bold mx-2">tuBOLETA.com</p>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                 <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                           <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/action">Action</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/series">Series</Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link" to="/comedy">Comedy</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    
    
   </>
  )     
};

export default Navbar;