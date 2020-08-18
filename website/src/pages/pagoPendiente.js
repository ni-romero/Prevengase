import React from 'react'
import {Container, Card} from 'react-bootstrap'
  import Navbar from "../components/navbar"
import Footer from "../components/footer"

const pagoPendiente = () => {
return(
    <>
    <Navbar/>
    <Container className="p-5">



    <Card className="text-center pagoPend">
  <Card.Header><strong>Pago pendiente, esperando confirmación!</strong></Card.Header>
  <Card.Body>
  <img src="https://thumbs.gfycat.com/PotableEmbarrassedFrenchbulldog-small.gif" alt="img" className="text-center imgPEND"/>
  </Card.Body>
  <Card.Footer className="text-muted"><span className=" p-1">Su pago esta siendo procesado!</span></Card.Footer>
</Card>
    
    </Container>

   <Footer/>

    </>
)
}

export default pagoPendiente;