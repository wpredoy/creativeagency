import React from 'react';
import './Navbar.css'
import logo from '../../../image/navlogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent container">
            <img src={logo}  alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link mr-5 active">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/our-portfolio" className="nav-link mr-5" >Our Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/out-team" className="nav-link mr-5">Our Team</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="contact-us" className="nav-link mr-5">Contact Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/login'><button className="loginButtonStyle">Login</button></Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;