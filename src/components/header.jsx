import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Tyler Peterson</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">About Me</Nav.Link>
        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        <Nav.Link as={Link} to="/resume">Resume</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;