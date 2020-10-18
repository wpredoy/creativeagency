import React from 'react';
import './HeaderMain.css'
import mainImage from '../../../image/headerimage.png'

const HeaderMain = () => {
    return (
            <main style={{height: '800px'}} className="row d-flex align-items-center">
                <div className="col-md-4  offset-md-1">
                    <h1 className="brandStyle">Let’s Grow Your <br/> Brand To The <br/> Next Level</h1>
                    <p className="headerText">Lorem ipsum dolor sit amet,       consectetur <br/> adipiscing elit. Purus commodo ipsum duis <br />laoreet maecenas. Feugiat
                    </p>
                    <button className="hireButtonStyle">Hire us</button>
                </div>
                <div className="col-md-6 ">
                    <img src={mainImage} alt="" className="img-fluid"/>
                </div>
            </main>
        
    );
};

export default HeaderMain;