import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Auto from "../images/auto.png"
import { Container, Row, Form, Col, Button, Alert } from "react-bootstrap"
import "./empresa.css"

const Automotor = () => {
  return (
    <>
      <Layout>
        <br />
        <Container>
          <div className="infoEmp">
            <h3>
              {" "}
              <u>Informe de titular patente automotor</u>
            </h3>
            <p>
              Consultá por Patente a qué Registro del Automotor se encuenta
              inscripto un vehículo en Argentina
            </p>
          </div>
          <Row>
            <Col>
              <img alt="auto"  className="auto" src={Auto} width="250" height="250" />
            </Col>

            <Col>
              <Form className="formEmp">
                <Alert variant="info" className="text-center">
                  Informe titular patente automotor
                </Alert>
                <Form.Row>
                  <Form.Group as={Col} className="p-2">
                    <Form.Control type="name" placeholder="Ingrese patente" />
                  </Form.Group>
                </Form.Row>
                <Form.Row className="p-2">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="Ingrese email" />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Button variant="primary" type="submit">
                      Pagar $750
                    </Button>
                  </Form.Group>
                </Form.Row>
              </Form>
            </Col>
          </Row>
          <br />
          <Alert variant="primary">Contenido Informe de Empresa</Alert>
          <Row>
            <Col>
              <ul className="preguntas">
                <li>Fecha de constitución</li>
                <li>Domicilio fiscal</li>
                <li>Teléfonos</li>
                <li>Situación fiscal</li>
                <li>Socios (CUIT, Nombre)</li>
                <li>Vínculos Societarios (Cuit, Razón Social)</li>
              </ul>
            </Col>
            <Col>
              <ul className="preguntas">
                <li>Bancos con los que opera</li>
                <li>Participaciones Societarias</li>
                <li>Cheques rechazados detallado</li>
                <li>Juicios comerciales</li>
                <li>Quiebras</li>
              </ul>
            </Col>
          </Row>

          <Alert variant="primary">Como solicitar este informe?</Alert>
          <ol className="preguntas">
            <li>
              Completá el formulario con los datos solicitados y luego clic en
              "Pagar $".
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

export default Automotor
