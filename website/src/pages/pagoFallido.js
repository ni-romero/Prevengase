import React from "react"
import { Container, Card, Button } from "react-bootstrap"
import "./style.css"
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const pagoFallido = () => {
  return (
    <>
    <Navbar/>
      <Container  className="p-5 ">
        <Card className="text-center contenedorcard">
          <Card.Header className="fallido">
            <strong>No se realizo el pago</strong>
            <br/>
            <strong>Por favor intentelo de nuevo!</strong>
          </Card.Header>
          <Card.Body>
            <img
              src="https://media.moddb.com/images/downloads/1/193/192889/MOSHED-2020-2-20-22-48-16.gif"
              className="text-center imgPEND"
            />
          </Card.Body>
          <Card.Footer className="text-muted">
            <span className="text-bold" size="lg" >Lo sentimos!</span>
          </Card.Footer>
        </Card>
      </Container>
      <Footer/>
    </>
  )
}

export default pagoFallido
