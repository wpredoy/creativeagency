import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import AdminForm from './component/Admin/AdminForm/AdminForm';
import AdminMake from './component/Admin/AdminMake/AdminMake';
import UserReview from './component/UserService/Review/UserReview';
import ParticularUserList from './component/UserService/ServiceList/ParticularUserList';
import UserPenal from './component/UserService/UserPenal/UserPenal';
import Adminpenal from './component/Admin/AdminPenal/Adminpenal';
import Dashboard from './component/Dashboard/Dashboard';
import Nomatch from './component/Nomatch/Nomatch';

export const newUser = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [order, setOder] = useState({})

  return (
    <newUser.Provider value={{loggedInUser, setLoggedInUser, order, setOder}}>
      <Router>
        <Switch>
          <Route exact path="/">
              <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/addService">
              <AdminForm></AdminForm>
          </Route>
          <Route path="/mainAdmin">
            <AdminMake></AdminMake>
          </Route>
          <Route path="/userReview">
            <UserReview></UserReview>
          </Route>
          <Route path="/particularUser">
            <ParticularUserList></ParticularUserList>
          </Route>
          <PrivateRoute path="/userpenal">
              <UserPenal></UserPenal>
          </PrivateRoute>
          <PrivateRoute path="/adminpenal">
           <Adminpenal></Adminpenal>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="*">
            <Nomatch></Nomatch>
          </Route>
        </Switch>
      </Router>
    </newUser.Provider>
  );
}

export default App;
