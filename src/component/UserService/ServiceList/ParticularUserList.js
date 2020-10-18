import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { newUser } from '../../../App';
import ParticularlistItem from '../ParticularListItem/ParticularlistItem';
import UserSidebar from '../UserSidebar/UserSidebar';

const ParticularUserList = () => {
    const [particular, setParticular] = useState([])
    const {loggedInUser, setLoggedInUser} = useContext(newUser)

    useEffect(() => {
        fetch('https://fast-escarpment-21870.herokuapp.com/orderserverlist?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setParticular(data)})
    }, [])

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <UserSidebar></UserSidebar>
                    </div>
                    <div className="col-md-9 mt-5">
                        <div className="row">
                            {
                                particular.map(particular=><ParticularlistItem particular={particular}></ParticularlistItem>)
                            }
                        </div>
                       
                    </div>
                </div>
        </div>
    );
};

export default ParticularUserList;