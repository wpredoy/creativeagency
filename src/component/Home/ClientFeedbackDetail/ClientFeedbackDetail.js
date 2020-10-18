import React from 'react';
import './ClientFeedbackDetail.css'

const ClientFeedbackDetail = ({feedBack}) => {
    return (
        <div>
            <div className="col-md-4 col-sm-12 mb-3 text-center">
            <div className="clientCard">
                <div className="d-flex">
                    <div className="clientImageStyle">
                        <img src={feedBack.image} className="card-img-top" src={`data:image/jpeg;base64,${feedBack.image.img}`} />
                    </div>
                    <div className="ClientHeaderStyle">
                        <h5 >{feedBack.name}</h5>
                        <h6>{feedBack.designation}</h6>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text">{feedBack.reviewdescription}</p>
                </div>
            </div>
            </div>
           
        </div>
    );
};

export default ClientFeedbackDetail;