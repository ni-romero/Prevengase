import React from 'react';
import {Container, Row, Col} from "react-bootstrap"
import Logo from "../images/logo.png"
import "./footer.css"

const Footer = () => {
    return(
        
            <Container fluid className="footer">
                <br/>
                <Row>
                    <Col>
                        <img src="Prevengase\website\src\images\logo.png" />
                    </Col>
                    <Col>
                    <h4>Informes</h4>
                    <ul>
                        <li>Persona y/o Empresa: $390 </li>
                        <li>informe patente: $ 750</li>
                        <li>informe celular: $ 750</li>
                    </ul>
                    </Col>
                    <Col>
                    <h4>Contacto</h4>
                    <p>Mail: info@prevengase.com</p>
                    </Col>
                </Row>
            </Container>
       
        
    )
}

export default Footer