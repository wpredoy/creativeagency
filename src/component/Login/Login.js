import React, { useContext } from 'react';
import loginlogo from '../../image/navlogo.png'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import './Login.css'
import { newUser } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    const {loggedInUser, setLoggedInUser} = useContext(newUser);
    const history = useHistory()
    const location = useLocation()
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
      const handelGoogleSignIn = () => {
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            var {displayName,email} = result.user;
            const signInUser = {displayName, email};
            setLoggedInUser(signInUser)
            sessionStorage.setItem("userEmail", result.user.email);
            history.replace(from);
          })
          .catch(function(error) {
            var errorMessage = error.message;
            console.log(errorMessage)
            var email = error.email;
            console.log(email)
          });
      }
    return (
        <div>
            <div className="container allLoginStyle">
                <div className="imageStyle">
                    <Link to="/home">
                        <img src={loginlogo} alt=""/>
                    </Link>
                    
                </div>
                <div className=" container loginFormStyle">
                    <h2>Login With</h2>
                    <button className="loginButton" onClick={handelGoogleSignIn}>Continue with Google</button>
                    <p>Don’t have an account?<span style={{color: "#3F90FC",cursor: "pointer"}}>Create an account</span> </p>
                </div>
            </div>
            
        </div>
    );
};

export default Login;