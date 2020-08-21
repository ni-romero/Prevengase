import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Auto from "../images/auto.png"
import { Container, Row, Form, Col, Button, Alert } from "react-bootstrap"
import { useForm } from 'react-hook-form'
import axiosInstance from "../components/axiosInstance"
import "./empresa.css"

const Automotor = () => {

  const { register, handleSubmit, errors ,reset} = useForm();

  const onSubmit = async (data, e) =>{
    console.log(data)

 const { mail , patente }= data


let Datos={precio:750, patente , email:mail ,tipo:"Automotor"}
  const response = await axiosInstance.post("/", Datos)
 window.location.href = response.data.redirectUrl
     reset();

  }

  return (
    <>
      <Layout>
        <br />
        <Container>
          <div className="infoEmp">
            <h3 className="tituloAutom">Informe de titular patente automotor
            </h3>
          </div>
          <Row>
            <Col  xs={12} md={10} lg={6} xl={6}>
              
              <img
                alt="auto"
                className="auto"
                src={Auto}
                width="200"
                height="200"
              />
              <p className="infoEmp">
                Consultá por Patente a qué Registro del Automotor se encuenta
                inscripto un vehículo en Argentina
              </p>
            </Col>

            <Col  xs={12} md={10} lg={6} xl={6}>
              <Form className="formEmp" onSubmit={handleSubmit(onSubmit)}>
                <h3 className="text-center">
                  Informe titular patente automotor
                </h3>

                <Form.Control type="name" name="patente" placeholder="Ingrese patente" 
                ref={register({
                  required:  { value: true, message:'Patente es obligatorio'},
                  maxLength: { value: 7, message:'no mas de 7 caracteres' },
                  minLength: { value:6, message:'no menos de 6 caracteres'}
                })} />
                <span className="text-danger text-small d-block mb-2">{errors?.patente?.message}</span>
                <br />
              
                <Form.Control type="email" placeholder="Ingrese email" name="mail" ref={register({ required: {value:true, message:'Email es obligatorio'},  })}/>
                <span className="text-danger text-small d-block mb-2">{errors?.mail?.message}</span>
                <Form.Text className="text-muted">
                  Ingrese el Email donde que desea recibir el informe.
                </Form.Text>
                
                <br />
                <Button variant="primary" className="botonPers" type="submit"  size="lg" block>
                  Comprar informe $750
                  
                </Button>
              </Form>
            </Col>
          </Row>
          <br />
          <Alert variant="primary">Contenido Informe de Automotor</Alert>
          <Row>
            <Col>
              <ul className="preguntas">
                <li>Titular de patente</li>
                <li>Porcentaje de propiedad</li>
                <li>Marca</li>
                <li>Modelo</li>
                <li>Version</li>
                
              </ul>
            </Col>
            <Col>
              <ul className="preguntas">
                
                <li>Año de fabricacion</li>
                <li>Direccion</li>
                <li>localidad</li>
                <li>Provincia</li>
              </ul>
            </Col>
          </Row>

          <Alert variant="primary">Como solicitar este informe?</Alert>
          <ol className="preguntas">
            <li>
              Completá el formulario con los datos solicitados y luego clic en
              "Comprar informe $".
            </li>
            <li>
              Para abonar serás direccionado a Mercado Pago (No es necesario
              tener cuenta de MercadoPago)
            </li>
            <li>
              Seguí las instrucciones según desees abonar en efectivo o con
              tarjeta.
            </li>
            <li>
              Acreditado el importe iniciaremos la gestión de tu Informe de
              Empresa solicitado.
            </li>
          </ol>
          <Alert variant="primary">Preguntas Frecuentes</Alert>
          <ul>
            <li className="preguntas">¿El servicio es confidencial?</li>
            <p>
              Toda operación en nuestro sitio es confidencial, anónima y segura
              para nuestros clientes.
            </p>
            <li className="preguntas">
              ¿Qué demora tiene el informe una vez abonado?
            </li>{" "}
            <p>
              Una vez que se acredite tu pago, gestionaremos y enviaremos el
              informe al mail indicado. Generalmente es en el día, aunque una
              demora de 2 a 24hs hábiles es normal.
            </p>
            <li className="preguntas">
              ¿Cómo reclamo si no recibo el informe?
            </li>
            <p>
              Si no recibiste tu informe escríbinos desde tu correo a
              info@prevengase.com.
            </p>
          </ul>
        </Container>
      </Layout>
      <Footer />
    </>
  )
}

export default Automotor;
