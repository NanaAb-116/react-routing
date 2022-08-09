import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navbars() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">Navbar</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/">Home</Link>
            <Link to="/contact">contact</Link>
            <Link to="/about">about</Link>
            <Link to="/services">services</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navbars;
