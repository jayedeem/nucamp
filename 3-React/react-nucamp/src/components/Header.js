import React, { useState, useRef, useEffect, createRef } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

export default function Header() {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleNav = () => {
    setisNavOpen(!isNavOpen);
  };
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  const FormComponent = () => {
    const usernameRef = useRef();
    const passwordRef = useRef();
    const checkbox = useRef();
    const handleLogin = (e) => {
      e.preventDefault();
      alert(
        `Username: ${usernameRef.current.value} Password: ${passwordRef.current.value} Remember ${checkbox.current.checked}`
      );

      toggleModal();
    };
    return (
      <Form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            name="username"
            innerRef={usernameRef}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            innerRef={passwordRef}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" name="remember" innerRef={checkbox} />
            Remember me
          </Label>
        </FormGroup>
        <Button type="submit" value="submit" color="primary">
          Login
        </Button>
      </Form>
    );
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
            <span className="navbar-text ml-auto">
              <Button outline onClick={toggleModal}>
                <i className="fa fa-sign-in fa-lg" /> Login
              </Button>
            </span>
          </Collapse>
        </div>
      </Navbar>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Login</ModalHeader>
        <ModalBody>
          <FormComponent />
        </ModalBody>
      </Modal>
    </>
  );
}
