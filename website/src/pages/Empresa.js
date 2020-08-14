import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Container, Row, Form, Col, Button, Alert } from "react-bootstrap"
import "./empresa.css"

const Empresa = () => {
  return (
    <>
      <Layout>
        <br />
        <Container>
          <div className="infoEmp">
            <h3>
              {" "}
              <u>Informe de empresa</u>
            </h3>
            
          </div>
          <Row>
            <Col>
            <p className="infoEmp">
              Un informe completo sobre una Empresa en Argentina. Obtené
              Domicilios, Actividades, Teléfonos, Socios, Cheques, Marcas, NIC
              Argentina y más...
            </p>
              <ul>
                <li>Información completa sobre una empresa</li>
                <li>Investigaciones Privadas</li>
                <li>Conocer a la competencia</li>
                <li>Para juicios comerciales</li>
                <li>Antes de realizar una transacción comercia</li>
              </ul>
            </Col>

            <Col>
              <Form className="formEmp">
                <h3 className="text-center">Informe Empresa</h3>
                <Form.Text className="text-muted text-center">
                     Ingrese uno de los dos campos
                    </Form.Text>
                <Form.Row>
                  <Form.Group as={Col} >
                    <Form.Control type="name" placeholder="Razon Social" />
                  </Form.Group>
                   
                  <Form.Group as={Col} >
                    <Form.Control type="" placeholder="Cuit" />
                  </Form.Group>
                  
                </Form.Row>
                
                  <br/> 
                    <Form.Control type="email" placeholder="Ingrese email" />
                    <Form.Text className="text-muted">
                      Ingrese el Email donde que desea recibir el informe.
                    </Form.Text>
                  <br/>
                 
                
                
                    <Button variant="primary" className="botonPers" type="submit" size="lg" block>
                      Comprar informe $390
                    </Button>
                  
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

export default Empresa
