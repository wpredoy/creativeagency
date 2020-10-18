import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceProviderDetail.css'

// onClick={()=> handelService(service)}
// handelService
const ServiceProviderDetail = ({service,handelService}) => {
    return (
        <div className="col-md-4 col-sm-12 mb-3 text-center ">
           <div className="card">
                <img src={service.image} className="card-img-top" src={`data:image/jpeg;base64,${service.img.img}`} />
                <Link onClick={()=> handelService(service)}>
                    <div className="card-body">
                        <h5 className="card-title">{service.title}</h5>
                        <p className="card-text">{service.description}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default ServiceProviderDetail;