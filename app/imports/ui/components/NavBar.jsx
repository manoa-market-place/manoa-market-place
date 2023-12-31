import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, Cart, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        {currentUser ? (
          <Navbar.Brand as={NavLink} to="/home" key="home">
            <Image src="images/uhm-logo.png" className="d-inline-block" width="50" height="50" alt="UHM Logo" />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand as={NavLink} to="/" key="landing">
            <Image src="images/uhm-logo.png" className="d-inline-block" width="50" height="50" alt="UHM Logo" />
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {currentUser ? (
            <Nav className="me-auto justify-content-start">
              <Nav.Link id="navbar-list-goods" as={NavLink} to="/goods" key="goods">Goods</Nav.Link>
              <Nav.Link id="navbar-list-services" as={NavLink} to="/services" key="services">Services</Nav.Link>
            </Nav>
          ) : ''}
          {currentUser ? (
            <Nav className="me-auto justify-content-center">
              {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Nav.Link id="navbar-admin" as={NavLink} to="/admin">Admin</Nav.Link>
              ) : ([
                <NavDropdown title="Sell Things" id="sell-things">
                  <NavDropdown.Item id="navbar-add-service" as={NavLink} to="/addservice" key="addservice">Add Service</NavDropdown.Item>
                  <NavDropdown.Item id="navbar-add-product" as={NavLink} to="/add" key="add">Add Product</NavDropdown.Item>
                </NavDropdown>,
                <Nav.Link id="navbar-list-product" as={NavLink} to="/listproduct" key="listproduct">My Product</Nav.Link>,
              ])}
            </Nav>
          ) : ''}
          <Nav className="justify-content-end">
            {currentUser ? ([
              <Nav.Link id="navbar-list-cart" as={NavLink} to="/checkout" key="cart"><Cart /></Nav.Link>,
              <NavDropdown id="navbar-current-user" key="user" title={currentUser}>
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                  <NavDropdown.Item id="user-dropdown-admin" as={NavLink} to="/listprofiles">
                    List Profiles
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item id="user-dropdown-profile" as={NavLink} to="/myprofile">
                    My Profile
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  Sign out
                  {' '}
                  <BoxArrowRight />
                </NavDropdown.Item>
              </NavDropdown>,
            ]) : (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin" key="signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup" key="signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
