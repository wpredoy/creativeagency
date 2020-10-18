import React from 'react';

const ParticularlistItem = ({particular}) => {
    return (
        <section>
            <div className="col-md-4">
            <div className="card mt-3">
                <img src={particular.image} className="card-img-top" src={`data:image/jpeg;base64,${particular.image.img}`} />
                    <div className="card-body">
                        <h5 className="card-title">{particular.service}</h5>
                        <p className="card-text">{particular.description}</p>
                    </div>
            </div>
            </div>
        </section>
    );
};

export default ParticularlistItem;