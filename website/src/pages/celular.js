import React from "react";
import Layout from "../components/layout";
import {Container , Row , Col } from "react-bootstrap";
import FormCelular from "../components/formCelular";
import axiosInstance from "../components/axiosInstance"
import Image from "../components/image"


const Celular = () => (
    <Layout>
      <Container fluid >
        <Row>
          <Col md={6}>
            <h1>Prevengase</h1>
            <p>Welcome to your new Gatsby site.</p>
            <p>Now go build something great.</p>
            <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
              <Image />
            </div>
          </Col>
          <Col className="border border-dark rounded mb-auto mt-5 mr-5 formCel" >
            <h2 className="text-center">Celular</h2>
            <FormCelular />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
  
  export default Celular
  