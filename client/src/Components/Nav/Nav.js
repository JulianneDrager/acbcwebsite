import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import NavStyle from "./Nav.module.css";
import "style.css";

const Navigation = () => {
  const navBar = NavStyle.navBar;
  const containerNav = NavStyle.containerNav;
  return (
    <>
      <Navbar className={navBar} expand="lg">
        <Container className={containerNav}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" style={{ color: "white" }}>
                Home
              </Nav.Link>
              <Nav.Link href="/#team" style={{ color: "white" }}>
                Meet The Team
              </Nav.Link>
              <Nav.Link href="/#events" style={{ color: "white" }}>
                ACBC Conferences Events
              </Nav.Link>
              <Nav.Link href="/#contact" style={{ color: "white" }}>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Navigation;
