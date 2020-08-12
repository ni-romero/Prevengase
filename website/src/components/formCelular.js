import React from "react"
import { Form, Row, Col, Button, Dropdown, DropdownButton  } from "react-bootstrap"

const FormCelular = () => {
  return (
    <Form id="formCelular" >
      <Form.Group className=" pt-2 ">
        <Form.Label className="w-100 text-center">
          Ingrese Nombre Titular{" "}
        </Form.Label>
        <Form.Control type="text" placeholder="Nombre" className="col-11 shadow border-primary rounded"/>
      </Form.Group>
      <Row>
        <Col >
          <Form.Group>
            <Form.Label className="w-100 text-center">
              Ingrese Numero{" "}
            </Form.Label>
            <Form.Control type="text" placeholder="Numero" className=" shadow border-primary"/>
          </Form.Group>
        </Col>
        <Col className="p-0 m-0">
          <Form.Group>
            <Form.Label className="w-75 text-center ">
              Ingrese Empresa{" "}
            </Form.Label>
            <DropdownButton id="dropdown-basic-button"  className=" text-center w-75  " title="Empresa">
              <Dropdown.Item href="#/action-1">Personal</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Movistar</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Claro</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Desconozco</Dropdown.Item>
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
            className="col-6 mr-5  border-primary shadow"
            
          />
          <Button variant="dark" className="ml-5 shadow ">
            Enviar
          </Button>
        </Col>
      </Form.Group>
    </Form>
  )
}
export default FormCelular
