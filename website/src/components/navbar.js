import React from "react";
import { Navbar ,Nav } from "react-bootstrap";
import Logo from "../images/logo.jpeg"


const Navigation = () => 

(       
    
    <Navbar collapseOnSelect expand="lg" bg="ligth" className="shadow m-0 p-0 ">
        
        <Navbar.Brand href="/" className="text-primary" >
        <img
          alt="logo"
          src={Logo}
          width="80"
          height="80"
          className="d-inline-block mr-3 "
        />{' '}
        Inicio
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav " className="bg-primary" />
         <Navbar.Collapse id="responsive-navbar-nav" >
     
      <Nav className="ml-auto w-50 d-flex justify-content-around " 
      >
      <Nav.Link href="/Personas" className="border-bottom clase text-primary ">Persona</Nav.Link>
      <Nav.Link href="/Empresa" className="border-bottom clase text-primary">Empresa</Nav.Link>
      <Nav.Link href="/celular"   className="border-bottom clase text-primary">Celular</Nav.Link>
      <Nav.Link href="/automotor" className="border-bottom clase text-primary">Automotor</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Navbar>
  
  )

  
  export default Navigation




