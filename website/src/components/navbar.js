import React from "react";
import { Link } from "gatsby";
import { Navbar ,Nav} from "react-bootstrap";

const Navigation = () => 
(       
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
        Prevengase
      </Navbar.Brand>
      <Nav className="ml-auto w-50 d-flex justify-content-around">
      <Nav.Link href="/persona">Persona</Nav.Link>
      <Nav.Link href="/empresa">Empresa</Nav.Link>
      <Nav.Link href="/celular">Celular</Nav.Link>
      <Nav.Link href="/precio">Automotor</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  
  )

  
  export default Navigation




