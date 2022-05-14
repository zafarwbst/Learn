import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./header.css";

const Header = () => {
  return (
    <div className='hearde'>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>Learn-Gatsby</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='#home'>Home</Nav.Link>
              <Nav.Link href='#link'>About</Nav.Link>
              <Nav.Link href='#link'>Services</Nav.Link>
              <Nav.Link href='#link'>Team</Nav.Link>
              <Nav.Link href='#link'>Works</Nav.Link>
              <Nav.Link href='#link'>Prices</Nav.Link>
              <Nav.Link href='#link'>Subscribe</Nav.Link>
              <Nav.Link href='#link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
