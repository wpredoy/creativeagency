import React, { useEffect } from 'react';
import './ClientFeedback.css'
import custom1 from '../../../image/customer-1.png'
import custom2 from '../../../image/customer-2.png'
import custom3 from '../../../image/customer-3.png'
import ClientFeedbackDetail from '../ClientFeedbackDetail/ClientFeedbackDetail';
import { useState } from 'react';
const client = [
    {
        name: "Nash Patrik",
        title: "CEO, Manpol",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
        image: custom1
    },
    {
        name: "Miriam Barron",
        title: "CEO, Manpol",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
        image: custom2
    },
    {
        name: "Bria Malone",
        title: "CEO, Manpol",
        detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
        image: custom3
    }

]

const ClientFeedback = () => {
    const [feedBack, setFeedBack] = useState([])
    useEffect(() => {
        fetch('https://fast-escarpment-21870.herokuapp.com/getAllReview')
            .then(res => res.json())
            .then(data => {
                setFeedBack(data)
            })
    }, [])
    return (
        <div style={{paddingBottom: "150px", backgroundColor: "#E5E5E5"}}>
            <div  className="container">
                <h2 className="ClientFeedback">Clients <span style={{color: "#7AB259"}}>Feedback</span></h2>
                <div className="row">
                    {
                        feedBack.map(feedBack=><ClientFeedbackDetail feedBack={feedBack}></ClientFeedbackDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ClientFeedback;