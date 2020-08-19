import React from "react";
import Layout from "../components/layout";
import {Container , Row , Col } from "react-bootstrap";
import FormCelular from "../components/formCelular";
import axiosInstance from "../components/axiosInstance"
import Image from "../components/image"
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
                  <span className="font-weight-bold font-italic tituloPer">
                    P
                  </span>
                  restador original
                </p>
                <p className=" text-left pb-1 shadow-h1">
                  &#9745;{" "}
                  <span className="font-weight-bold font-italic  tituloPer">
                    P
                  </span>
                  restador actual
                </p>
                <p className=" text-left pb-3 shadow-h1 ">
                  &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    T
                  </span>
                  itular
                </p>
                <p className=" text-left pb-3 shadow-h1">
                  &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    C
                  </span>
                  lase
                </p>
                <p className=" text-left  pb-1 shadow-h1">
                  &#9745;{" "}
                  <span className="font-weight-bold  font-italic tituloPer">
                    D
                  </span>
                  ni
                </p>
              </Col>
              <Col md={4} xs={6} className=" mr-md-5">
                <p className=" text-left pt-3 pb-1 shadow-h1">
                &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    C
                  </span>
                  uil
                </p>

                <p className=" text-left pb-1 shadow-h1">
                &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    D
                  </span>
                  ireccion
                </p>
                <p className=" text-left pb-1 shadow-h1">
                &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    L
                  </span>
                  ocalidad
                </p>
                <p className=" text-left pb-1  shadow-h1 ">
                  &#9745;{" "}
                  <span className="font-weight-bold font-italic tituloPer">
                    P
                  </span>
                  rovincia
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

export default Celular
