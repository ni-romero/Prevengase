import React from 'react'
import {Container, Card} from 'react-bootstrap'
import { Link } from "gatsby";


const pagoPendiente = () => {
return(
    <>
    <Container className="p-5">



    <Card className="text-center pagoPend">
  <Card.Header><strong>Pago pendiente, esperando confirmación!</strong></Card.Header>
  <Card.Body>
  <img src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif" className="text-center imgPEND"/>
  </Card.Body>
  <Card.Footer className="text-muted"><button className="btn-primary p-1">volver</button></Card.Footer>
</Card>
    
    </Container>

   

    </>
)
}

export default pagoPendiente;