import React, {  useEffect } from 'react';
import "firebase/auth";
import { useState } from 'react';
import Adminpenal from '../Admin/AdminPenal/Adminpenal';
import UserPenal from '../UserService/UserPenal/UserPenal';


const Dashboard = () => {
    const [admin, setAdmin] = useState(false);
      const getEmail = sessionStorage.getItem('userEmail');
      useEffect(() => {
        fetch(`https://fast-escarpment-21870.herokuapp.com/check-admin`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: getEmail }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.admin === true) {
              setAdmin(true);
            } else if (data.admin === false) {
              setAdmin(false);
            }
          })
      }, []);
    return (
        <>
        {admin === false ? (
          <section>
            <UserPenal></UserPenal>
          </section>
        ) : (
            <section>
            <Adminpenal></Adminpenal>
          </section>
        )}
      </>
    );
};

export default Dashboard;