import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots, faHdd, faPlus, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import userLogo from '../../../image/navlogo.png'
import './UserSidebar.css'
import { useContext } from 'react';
import { newUser } from '../../../App';
import firebaseConfig from '../../Login/firebase.config';

const UserSidebar = () => {
    const {loggedInUser, setLoggedInUser} = useContext(newUser);
    const history = useHistory()
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const UserlogOut = () => {
        firebase
          .auth()
          .signOut()
          .then(() => {
            setLoggedInUser(null);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
      const handelLogOut = () => {
        UserlogOut();
        history.push("/");
        sessionStorage.clear();
        window.location.reload();
      };
    return (
        <div>
            <Link to="/" >
                <div style={{ marginTop: "20px" }}>
                    <img style={{ height: "50px" }} src={userLogo} className='img-fluid' alt="" />
                </div>
            </Link>
            <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
                <ul className="list-unstyled">
                    <div className="my-5">
                            <li>
                                <Link to="/userpenal" className="text-dark">
                                    <FontAwesomeIcon icon={faHdd} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/particularUser" className="text-dark">
                                    <FontAwesomeIcon icon={faPlus} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/userReview" className="text-dark" >
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Review</span>
                                </Link>
                            </li>
                            <li>
                                <button style=
                                {{border: 'none', backgroundColor:"black", color: "tomato", width: "90px", height: "30px"}}
                                 onClick={()=> handelLogOut()}>SIGN OUT</button>
                            </li>

                    </div>
                </ul>
            </div>
        </div>
    );
};

export default UserSidebar;