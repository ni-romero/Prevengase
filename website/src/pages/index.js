import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Container, Col, Row } from "react-bootstrap"
import FormCelular from "../components/formCelular"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container fluid className="bg-dark">
      <Row>
        <Col md={6}>
          <h1>Prevengase</h1>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Col>
        <Col className="bg-primary">
          <h2 className="text-center">Celular</h2>
          <FormCelular />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default IndexPage
