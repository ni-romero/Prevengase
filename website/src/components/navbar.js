import React from "react";
import { Link } from "gatsby";
import { Navbar ,Nav } from "react-bootstrap";
import Logo from "../images/logo.jpeg"


const Navigation = () => 

(       
    
    <Navbar collapseOnSelect expand="lg" bg="light" variant="ligth" className="shadow m-0 p-0 ">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
      <Navbar.Brand href="/" >
        <img
          alt="logo"
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block mr-3 "
        />{' '}
        Prevengase
      </Navbar.Brand>
      <Nav className="ml-auto w-50 d-flex justify-content-around " 
      >
      <Nav.Link href="/Personas" className="border-bottom clase ">Persona</Nav.Link>
      <Nav.Link href="/Empresa" className="border-bottom clase">Empresa</Nav.Link>
      <Nav.Link href="/celular"   className="border-bottom clase">Celular</Nav.Link>
      <Nav.Link href="/automotor" className="border-bottom clase">Automotor</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  
  )

  
  export default Navigation




