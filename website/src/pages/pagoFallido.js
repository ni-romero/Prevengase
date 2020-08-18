import React from "react"
import { Container, Card, Button } from "react-bootstrap"
import "./style.css"
const pagoFallido = () => {
  return (
    <>
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
            <Button variant="primary" size="lg" >volver</Button>
          </Card.Footer>
        </Card>
      </Container>
    </>
  )
}

export default pagoFallido
