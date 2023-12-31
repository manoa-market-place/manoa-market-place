import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
import AddProduct from '../pages/AddProduct';
import ListProduct from '../pages/ListProduct';
import ListProductAdmin from '../pages/ListProductAdmin';
import Home from '../pages/Home';
import EditProfile from '../pages/EditProfile';
import MyProfile from '../pages/MyProfile';
import ListProfiles from '../pages/ListProfiles';
import AddService from '../pages/AddService';
import ListService from '../pages/ListService';
import ListGoods from '../pages/ListGoods';
import ListCartGoods from '../pages/ListCartGoods';
import ViewGood from '../pages/ViewGood';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/myprofile" element={<ProtectedRoute><MyProfile /></ProtectedRoute>} />
          <Route path="/profile/:_id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/goods" element={<ProtectedRoute><ListGoods /></ProtectedRoute>} />
          <Route path="/goods/:_id" element={<ProtectedRoute><ViewGood /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><ListService /></ProtectedRoute>} />
          <Route path="/add" element={<ProtectedRoute><AddProduct /></ProtectedRoute>} />
          <Route path="/addservice" element={<ProtectedRoute><AddService /></ProtectedRoute>} />
          <Route path="/listproduct" element={<ProtectedRoute><ListProduct /><ListService /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><ListCartGoods /></ProtectedRoute>} />
          <Route path="/admin" element={<AdminProtectedRoute ready={ready}><ListProductAdmin /></AdminProtectedRoute>} />
          <Route path="/listprofiles" element={<AdminProtectedRoute ready={ready}><ListProfiles /></AdminProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Home />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Home />,
};

export default App;
