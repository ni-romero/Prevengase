import React from "react"
import {
  Form,
  Row,
  Col,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap"

const FormCelular = () => {
  return (
    <Form id="formCelular">
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="w-100 text-start ">Numero </Form.Label>
            <Form.Control
              type="text"
              placeholder=" Ingrese Numero "
              className=" shadow botonEmpresa"
            />
            <Form.Text className="text-muted">Ejemplo 1130587239</Form.Text>
          </Form.Group>
        </Col>
        <Col className="p-0 mr-4">
          <Form.Group >
            <Form.Label className="w-100 text-start  ">
              Ingrese Empresa{" "}
            </Form.Label>
            <Form.Control as="select" className=" text-center botonEmpresa  ">
              <option>Personal</option>
              <option>Movistar</option>
              <option>Claro</option>
              <option>Desconozco</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group>
        <Form.Label className="w-50 text-start "> Email </Form.Label>
        <Col className=" d-flex m-0 p-0 ">
          <Form.Control
            type="email"
            placeholder=" Ingrese Email"
            className=" botonEmpresa shadow "
          />
        </Col>
        <Form.Text className="text-muted">
          Ingrese el Email donde que desea recibir el informe.
        </Form.Text>
        <Button
          variant="outline-primary "
          size="lg"
          className="mt-3 shadow botonPers "
          block
        >
          Comprar informe $390
        </Button>
      </Form.Group>
    </Form>
  )
}
export default FormCelular
