import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import BottomNav from '../BottomNav/BottomNav';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import Profile from '../Profile/Profile';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import AddNewItem from '../AddNewItem/AddNewItem';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import VendorBioForm from '../VendorBioForm/VendorBioForm';
import VendorStore from '../VendorStore/VendorStore';

import './App.css';

function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        {/* <BottomNav /> */}
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Profile else shows LoginPage
            exact
            path="/profile"
          >
            <Profile />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Add New Item else shows LoginPage
            exact
            path="/addNewItem"
          >
            <AddNewItem />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Main else shows LoginPage
            exact
            path="/main"
          >
            <Main />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows Cart else shows LoginPage
            exact
            path="/cart"
          >
            <Cart />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows /vendorBio else shows LoginPage
            exact
            path="/vendorBioForm"
          >
            <VendorBioForm />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows /vendorStore else shows LoginPage
            exact
            path="/vendorStore/:storeId"
          >
            <VendorStore />
          </ProtectedRoute>

          <Route
            exact
            path="/login"
          >
            {user.access_level === 'vendor' && user.id ?
              // If the user is already logged in and their access level is vendor, 
              // redirect to the /profile page
              <Redirect to="/profile" />
              : user.access_level === 'customer' && user.id ?
              <Redirect to="/main" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.access_level === 'vendor' && user.id ?
              // If the user is already logged in and their access level is vendor, 
              // redirect them to the /profile page
              <Redirect to="/profile" />
              : user.access_level === 'customer' && user.id ?
              <Redirect to="/main" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.access_level === 'vendor' && user.id ?
              // If the user is already logged in and their access level is vendor, 
              // redirect them to the /profile page
              <Redirect to="/profile" />
              : user.access_level === 'customer' && user.id ?
              <Redirect to="/main" />
              :
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          {/* If none of the other routes matched, we will show a 404. */}
          <Route>
            <h1>404</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
