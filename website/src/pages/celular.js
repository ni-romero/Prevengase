import React from "react";
import Layout from "../components/layout";
import {Container , Row , Col } from "react-bootstrap";
import FormCelular from "../components/formCelular";
import Footer from "../components/footer"

const Celular = () => (
  <Layout>
    <Container>
      <h1 className="text-center p-3 tituloPer">Informe de Celular</h1>
      <Row>
        <Col md={6} className=" mb-auto mt-5">
          <div className="align-middle">
            <h3 className="alert alert-info text-center w-75  m-auto">
              Contenido Informe Celular
            </h3>
            <Row className="m-auto w-75 ">
              <Col md={6} xs={6}>
                <p className=" text-left pt-3 pb-1  shadow-h1 ">
                  &#9745;{" "}
                  Dni
                  
                </p>
                <p className=" text-left pb-1 shadow-h1">
                  &#9745;{" "}
                  Clase
                
                </p>
                <p className=" text-left pb-2 shadow-h1 ">
                  &#9745;{" "}
                  
                  Titular
                </p>
                <p className=" text-left pb-2 shadow-h1">
                  &#9745;{" "}
                  Prestador actual
                </p>
                <p className=" text-left  pb-1 shadow-h1">
                  &#9745;{" "}
                  Prestador original
                </p>
              </Col>
              <Col md={4} xs={6} className=" mr-md-5">
                <p className=" text-left pt-3 pb-1 shadow-h1">
                &#9745;{" "}
                  Cuil
                </p>

                <p className=" text-left pb-1 shadow-h1">
                &#9745;{" "}
                  Direccion
                </p>
                <p className=" text-left pb-1 shadow-h1">
                &#9745;{" "}
                  Localidad
                </p>
                <p className=" text-left pb-1  shadow-h1 ">
                  &#9745;{" "}
                  Provincia
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className=" mb-auto mt-5 ml-2 mr-2  formuPa ">
          <h2 className="text-center">Celular</h2>
          <FormCelular />
        </Col>
      </Row>
    </Container>
    <br />
    <Footer />
  </Layout>
)

export default Celular;
