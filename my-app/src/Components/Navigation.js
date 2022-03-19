import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="justify-content-end w-100 ps-3 pe-5"
            activeKey="/home"
          >
            <Nav.Item>
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/meals">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/reviews">Skills</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/reviews">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/reviews">Contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
