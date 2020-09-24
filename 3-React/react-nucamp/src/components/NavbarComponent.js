import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default function NavbarComponent({ isNavOpen, toggleModal, toggleNav }) {
  return (
    <Navbar dark sticky="top">
      <div className="container">
        <NavbarBrand className="mr-auto" href="/">
          <img
            src="/assets/images/logo.png"
            height="30"
            width="30"
            alt="NuCamp Logo"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNav} />
        <Collapse isOpen={isNavOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink className="nav-link" to="/home">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/directory">
                <i className="fa fa-list fa-lg" /> Directory
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/aboutus">
                <i className="fa fa-info fa-lg" /> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contactus">
                <i className="fa fa-address-card fa-lg" /> Contact Us
              </NavLink>
            </NavItem>
          </Nav>
          <span className="navbar-text ml-auto">
            <Button outline onClick={toggleModal}>
              <i className="fa fa-sign-in fa-lg" /> Login
            </Button>
          </span>
        </Collapse>
      </div>
    </Navbar>
  );
}
