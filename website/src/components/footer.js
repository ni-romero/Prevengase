import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Logo from "../images/logo.png"
import Image from "gatsby-image"
import "./footer.css"

const Footer = () => {
    return(
        
            <Container  className="footer">
                <br/>
                <Row>
                    <Col>

                        <img src={Logo} alt="logo"  className="logo"/>
                    </Col>
                    <Col>
                    <h4 className="text-center mt-2">Informes</h4>
                    <ul>
                        <li className="text-center">Persona y/o Empresa: $390 </li>
                        <li className="text-center">informe patente: $ 750</li>
                        <li className="text-center">informe celular: $ 750</li>
                    </ul>
                    </Col>
                    <Col>
                    <h4 className="text-center mt-2">Contacto</h4>
                    <p className="text-center">Mail: info@prevengase.com</p>
                    </Col>
                </Row>
            </Container>
       
        
    )
}

export default Footer