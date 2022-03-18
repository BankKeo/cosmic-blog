import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Nav>
      <Nav.Link>
        <Link className="header-text" to="/login">
          Login
        </Link>
      </Nav.Link>

      <Nav.Link eventKey={2}>
        <Link className="header-text" to="/register">
          Register
        </Link>
      </Nav.Link>
    </Nav>
  );
};

export default Menu;
