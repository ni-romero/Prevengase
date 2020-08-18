import React from 'react'
import {Container, Card} from 'react-bootstrap'
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const pagoExitoso = () => {
return(
    <>
    <Navbar/>
    <Container className="p-5">



    <Card className="text-center pagoExit">
  <Card.Header><strong>Su pago fue procesado exitosamente!</strong></Card.Header>
  <Card.Body>
  <img src="https://www.ozean.ch/uploads/images/NewsNews/check_noun_002_06440.jpg" alt="img" className="text-center"/>
  </Card.Body>
  <Card.Footer className="text-muted"><span className=" p-1">Gracias por su compra, en breve nos comunicaremos contigo</span></Card.Footer>
</Card>
    
    </Container>

   <Footer/>

    </>
)
}

export default pagoExitoso;