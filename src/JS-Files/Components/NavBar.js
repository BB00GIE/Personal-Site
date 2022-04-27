import React from "react";
import { Nav, Navbar, Container} from "react-bootstrap";

const NavBar= () => {
    return (
      <Navbar bg="primary" variant="dark">
        <Container>
            <Nav fill variant="tabs" className="me-auto">
            <Navbar.Brand href="/home">Navbar </Navbar.Brand>
              <Nav.Link href="/home">Home </Nav.Link>
              <Nav.Link href="/Contact">Contact </Nav.Link>
              <Nav.Link href="/Project">Project </Nav.Link>
              <Nav.Link href="/Blog">Blog </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    );
  }


  export default NavBar;