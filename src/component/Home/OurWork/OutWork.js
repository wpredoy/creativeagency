import React from 'react';
import './OurWork.css'
import carousel1 from '../../../image/carousel-1.png'
import carousel2 from '../../../image/carousel-2.png'
import carousel3 from '../../../image/carousel-3.png'

const OutWork = () => {
    return (
        <div className="workStyle">
            <h2 className="OurWork">Here are some of  <span style={{color: "#7AB259"}}>our works</span></h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>     
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div class="text-center carouselStyle">
                            <img src={carousel1} alt=""/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="text-center carouselStyle">
                            <img src={carousel2} alt=""/>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div class="text-center carouselStyle">
                            <img src={carousel3} alt=""/>
                        </div>
                    </div>
                </div>
  
            </div>
        </div>
    );
};

export default OutWork;