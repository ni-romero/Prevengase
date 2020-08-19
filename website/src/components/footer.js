import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap"
import Logo from "../images/logo.png"
import "./footer.css"

const Footer = () => {
    return(
        
            <Container  className="footer">
                <br/>
                <Row>
                    <Col xl={4} lg={4} xs={4}>

                        <Image src={Logo} alt="logo"  className="logo"/>
                    </Col>
                    <Col xl={4} lg={4} xs={4}className="footInfo">
                    <h4 className="text-center mt-2">Informes</h4>
                    <ul>
                        <li className="text-center">Persona y/o Empresa: $390 </li>
                        <li className="text-center">informe patente: $ 750</li>
                        <li className="text-center">informe celular: $ 750</li>
                    </ul>
                    </Col>
                    <Col xl={4} lg={4} xs={4}>
                    <h4 className="text-center mt-2">Contacto</h4>
                    <p className="text-center">Mail: info@prevengase.com</p>
                    </Col>
                </Row>
            </Container>
       
        
    )
}

export default Footer