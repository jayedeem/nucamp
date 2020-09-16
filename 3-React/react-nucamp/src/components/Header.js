import React, { useState } from 'react';
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };

  return (
    <>
      <Jumbotron fluid className="mb-0">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>NuCamp</h1>
              <h2>a better way to camp</h2>
            </div>
          </div>
        </div>
      </Jumbotron>

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
          </Collapse>
        </div>
      </Navbar>
    </>
  );
}
