import React from 'react';
import './SocialSection.css'
import social0 from '../../../image/social0.png'
import social1 from '../../../image/social1.png'
import social2 from '../../../image/social2.png'
import social3 from '../../../image/social3.png'
import social5 from '../../../image/social5.png'
import { Link } from 'react-router-dom';


const SocialSection = () => {
    return (
        <div className="socialStyle">
            <nav className="navbar navbar-expand-lg navbar-light container">
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/slack"><img src={social0} alt=""/></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/google"><img src={social1} alt=""/></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/uber"><img src={social2} alt=""/></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/netflix"><img src={social3} alt=""/></Link>
                        </li>
                        <li className="nav-item">
                        <Link to="airbnb"><img src={social5} alt=""/></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default SocialSection;