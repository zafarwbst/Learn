import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./header.css";
import Logo from "../assets/logo.svg";

const Header = ({ menu }) => {
  const data = menu?.allContentfulMenu?.nodes;
  console.log("data :>> ", data);
  return (
    <div className="hearde">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {data.map((el) => {
                return <Nav.Link href="#home">{el?.navBar}</Nav.Link>;
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
