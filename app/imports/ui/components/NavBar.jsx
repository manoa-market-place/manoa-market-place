import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Roles } from 'meteor/alanning:roles';
import { Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);

  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        {currentUser ? (
          <Navbar.Brand as={NavLink} to="/home">
            <Image src="images/uhm-logo.png" className="d-inline-block" width="50" height="50" alt="UHM Logo" />
          </Navbar.Brand>
        ) : (
          <Navbar.Brand as={NavLink} to="/">
            <Image src="images/uhm-logo.png" className="d-inline-block" width="50" height="50" alt="UHM Logo" />
          </Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-start">
            {currentUser ? ([
              <Nav.Link id="goods-nav" as={NavLink} to="/goods" key="goods">Goods</Nav.Link>,
              <Nav.Link id="services-nav" as={NavLink} to="/services" key="services">Services</Nav.Link>,
            ]) : ''}
          </Nav>
          {currentUser ? (
            <Nav className="me-auto justify-content-center">
              {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                <Nav.Link id="list-product-admin-nav" as={NavLink} to="/admin" key="admin">Admin</Nav.Link>
              ) : ([
                <Nav.Link id="add-product-nav" as={NavLink} to="/add" key="add">Add Product</Nav.Link>,
                <Nav.Link id="my-product-nav" as={NavLink} to="/myproduct" key="myproduct">My Product</Nav.Link>,
              ])}
            </Nav>
          ) : ''}
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id="login-dropdown" title="Login">
                <NavDropdown.Item id="login-dropdown-sign-in" as={NavLink} to="/signin">
                  <PersonFill />
                  Sign in
                </NavDropdown.Item>
                <NavDropdown.Item id="login-dropdown-sign-up" as={NavLink} to="/signup">
                  <PersonPlusFill />
                  Sign up
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id="navbar-current-user" title={currentUser}>
                {Roles.userIsInRole(Meteor.userId(), 'admin') ? (
                  <NavDropdown.Item id="list-profiles" as={NavLink} to="/listprofiles">
                    List Profiles
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item id="my-profile" as={NavLink} to="/myprofile">
                    My Profile
                  </NavDropdown.Item>
                )}
                <NavDropdown.Item id="navbar-sign-out" as={NavLink} to="/signout">
                  Sign out
                  {' '}
                  <BoxArrowRight />
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
