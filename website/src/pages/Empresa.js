import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import { Container, Row, Form, Col, Button, Alert } from "react-bootstrap"
import { useForm } from 'react-hook-form'
import "./empresa.css"
import axiosInstance from "../components/axiosInstance"

const Empresa = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = async(data, e) => {
    console.log(data)
    let precio = 390
    const response = await axiosInstance.post("/", { precio: precio })
    console.log(response.data.redirectUrl)
    window.location.href = response.data.redirectUrl
    e.target.reset()
  }

  return (
    <>
      <Layout>
        <br />
        <Container>
          <div className="text-center">
            <h3  style={{color:'#B48B1B'}}>
              {" "}
             Informe de empresa
            </h3>
          </div>
          <Row>
            <Col xs={12} md={10} xl={6}>
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

            <Col xs={12} md={10} xl={6}>
              <Form
                className="formEmp"
                onSubmit={handleSubmit(onSubmit)}
                method="POST"
              >
                <h3 className="text-center">Informe Empresa</h3>
                
                    <Form.Control
                      type="name"
                      name="razon"
                      placeholder="Razon Social o Cuit"
                      ref={register({
                        maxLength: {
                          value: 60,
                          message: "no mas de 60 caracteres",
                        },
                        required: { value: true, message: "Razon social o cuit es obligatorio" }
                      })}
                    />
                    <span className="text-danger text-small d-block mb-2">
                      {errors?.razon?.message}
                    </span>
                    <br />

                <Form.Control
                  type="email"
                  placeholder="Ingrese email"
                  name="mail"
                  ref={register({
                    required: { value: true, message: "Email es obligatorio" },
                  })}
                />
                <span className="text-danger text-small d-block mb-2">
                  {errors?.mail?.message}
                </span>
                <Form.Text className="text-muted">
                  Ingrese el Email donde desea recibir el informe.
                </Form.Text>

                <br />

                <Button
                  variant="primary"
                  className="botonPers"
                  type="submit"
                  size="lg"
                  block
                >
                  Comprar informe $390
                  <script
                    src="https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js"
                    data-preference-id="267818641-2711766f-49a0-4275-970f-31d0c5c8e79c"
                  ></script>
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
