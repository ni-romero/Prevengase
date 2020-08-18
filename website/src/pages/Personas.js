import React from 'react'
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Container, Row, Col, Form, Button } from "react-bootstrap"
import "./style.css"
import { Helmet } from 'react-helmet'
import {useState} from 'react'
import { useForm } from 'react-hook-form'



const Personas = () => {
  const {register, errors, handleSubmit} = useForm();
  
  const [datos, setDatos] = useState({
    nombre: '',
    email: ''
})

const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
        ...datos,
        [event.target.name] : event.target.value 


    }) 
}
const enviarDatos = (event) =>{
  // event.preventDefault();
  console.log(datos.nombre + ' ' + datos.email)
  
}
  return (
    <>
     <Helmet>
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
    </Helmet>
    <Layout>
      <h1 className="text-center p-3 tituloPer">Informe de Persona</h1>
      <Container>
        <Row>
          <Col xs={12} md={10} xl={6}>
            <div className="text-center">
          <i class="fas fa-users fa-4x text-info"></i>
        
            {/* <ul> */}
              <p>-Buscá personas, familiares y amigos</p>
              <p>-Evaluar socios ante un acuerdo comercial</p>
              <p>-Ante la contratación de un empleado</p>
              <p>-Verificar datos de un posible inquilino</p>
              <p>-Por cuestiones de infidelidad </p> 
              <p>-Para juicios comerciales y civiles</p> 
              <p>-Investigaciones Privadas</p> 
            {/* </ul> */}
            </div>
          </Col>
          <Col xs={12} md={10} xl={6}>
            <br/>
            <div className="formuPa">
              <Form onSubmit={handleSubmit(enviarDatos)}>
                <h3 className="text-center">Persona</h3>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className="text-center">Nombre o DNI</Form.Label>

                  <Form.Control type="name"
                   placeholder="Ingrese nombre o DNI"
                   onChange={handleInputChange} 
                   name="nombre" 
                   ref={
                     register({
                      required: {
                        value: true, 
                        message: 'Nombre es requerido'
                        }, 
                    maxLength: {
                        value: 15, 
                        message: 'No más de 15 carácteres!'
                        },
                    minLength: {
                        value: 4, 
                        message: 'Mínimo 4 carácteres'
                        }
                     })
                  }
                  /> 
                  <span className="text-danger text-small d-block mb-2">
                  {errors.nombre && errors.nombre.message}
              </span>

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className="text-center">Email</Form.Label>

                  <Form.Control type="email" 
                  placeholder="Ingrese e-mail"
                   onChange={handleInputChange}
                    name="email"
                    ref={
                      register({
                       required: {
                         value: true, 
                         message: 'Email es requerido'
                         }, 
                     maxLength: {
                         value: 45, 
                         message: 'No más de 45 carácteres!'
                         },
                     minLength: {
                         value: 14, 
                         message: 'Mínimo 14 carácteres'
                         }
                      })
                   }
                    
                    />
                    <span className="text-danger text-small d-block mb-2">
                    {errors.email && errors.email.message}
                </span>
                  <Form.Text className="text-muted">
                    Ingrese el Email donde que desea recibir el informe.
    </Form.Text>
                </Form.Group>

                <Button className="botonPers" type="submit" size="lg" block>
                  Comprar informe $390
  </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
      <br/>
      
      </Layout>
      <Footer/>
    </>
  )
}
export default Personas