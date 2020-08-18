import React from 'react'
import {Container, Card} from 'react-bootstrap'
import { Link } from "gatsby";


const pagoExitoso = () => {
return(
    <>
    <Container className="p-5">



    <Card className="text-center pagoExit">
  <Card.Header><strong>Su pago fue procesado exitosamente!</strong></Card.Header>
  <Card.Body>
  <img src="https://www.ozean.ch/uploads/images/NewsNews/check_noun_002_06440.jpg" className="text-center"/>
  </Card.Body>
  <Card.Footer className="text-muted"><button className="btn-success p-1">volver</button></Card.Footer>
</Card>
    
    </Container>

   

    </>
)
}

export default pagoExitoso;