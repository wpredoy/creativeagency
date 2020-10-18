import React from 'react';
import './ServiceProvider.css'
import ServiceProviderDetail from '../ServiceProviderDetail/ServiceProviderDetail';
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { newUser } from '../../../App';
import { useHistory } from 'react-router-dom';


const ServiceProvider = () => {
    const [services, setServices] = useState([])
    const {setOder} = useContext(newUser)
    const history = useHistory()
    useEffect(() => {
        fetch('https://fast-escarpment-21870.herokuapp.com/allagency')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                // console.log(data)
            })
    }, [])

    const handelService = (data) => {
        setOder(data)
        history.push('/dashboard')
    } 
    // handelService={handelService}

    return (
        <div className=" serviceStyle">
            <div className="container">
                <h2 className="awesomeProvider">Provide awesome  <span style={{color: "#7AB259"}}>services</span></h2>
                <div className='row'>
                    {
                        services.map(service=><ServiceProviderDetail handelService={handelService}  service={service}></ServiceProviderDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceProvider;