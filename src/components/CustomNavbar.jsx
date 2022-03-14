import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>
        <Link className="nav-link" to="/">
          <Navbar.Brand>Star Wars</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link className="nav-link" to="/people">
              People
            </Link>
            <Link className="nav-link" to="/films">
              Films
            </Link>
            <Link className="nav-link" to="/planets">
              Planets
            </Link>
            <Link className="nav-link" to="/species">
              Species
            </Link>
            <Link className="nav-link" to="/starships">
              Starships
            </Link>
            <Link className="nav-link" to="/vehicles">
              Vehicles
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
