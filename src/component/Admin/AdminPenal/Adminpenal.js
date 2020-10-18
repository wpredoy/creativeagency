import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Adminpenal = () => {
    const [showAllUserData, setShowAllUserData] = useState([])
    useEffect(() => {
        fetch('https://fast-escarpment-21870.herokuapp.com/adminAllOrderReview')
            .then(res => res.json())
            .then(data => {
                setShowAllUserData(data)
            })
    }, [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9">
                <table className="table">
                        <thead>
                            <tr>
                                <th className="text-dark" scope="col">Sr No</th>
                                <th className="text-dark" scope="col">Name</th>
                                <th className="text-dark" scope="col">Email</th>
                                <th className="text-dark" scope="col">Service</th>
                                <th className="text-dark" scope="col">Project Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showAllUserData.map(
                                (allData, index)=>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{allData.name}</td>
                                        <td>{allData.email}</td>
                                        <td>{allData.service}</td>
                                        <td>{allData.description}</td>
                                
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Adminpenal;