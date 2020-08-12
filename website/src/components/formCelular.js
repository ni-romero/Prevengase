import React from "react"
import { Form, Row, Col, Button, Dropdown, DropdownButton  } from "react-bootstrap"

const FormCelular = () => {
  return (
    <Form>
      <Form.Group className=" pt-2 ">
        <Form.Label className="w-100 text-center">
          Ingrese Nombre Titular{" "}
        </Form.Label>
        <Form.Control type="text" placeholder="Nombre" className="col-11 "/>
      </Form.Group>
      <Row>
        <Col >
          <Form.Group>
            <Form.Label className="w-100 text-center">
              Ingrese Numero{" "}
            </Form.Label>
            <Form.Control type="text" placeholder="Numero" />
          </Form.Group>
        </Col>
        <Col className="p-0 m-0">
          <Form.Group>
            <Form.Label className="w-75 text-center ">
              Ingrese Empresa{" "}
            </Form.Label>
            <DropdownButton id="dropdown-basic-button" variant="ligth" className="border text-center w-75" title="Empresa">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className="w-50 text-center">Ingrese Emal </Form.Label>
        <Col className=" d-flex m-0 p-0 ">
          <Form.Control
            type="email"
            placeholder="Email"
            className="col-6 mr-5"
          />
          <Button variant="dark" className="ml-5 ">
            Enviar
          </Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
export default FormCelular
