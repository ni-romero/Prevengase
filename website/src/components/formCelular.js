import React from "react"
import {
  Form,
  Row,
  Col,
  Button,
} from "react-bootstrap"
import { useForm } from 'react-hook-form'

const FormCelular = () => {

  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
      console.log(data)

      e.target.reset();
  }
  return (
    <Form id="formCelular"onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label className="w-100 text-start ">Numero </Form.Label>
            <Form.Control
              type="number"
              placeholder=" Ingrese Numero "
              className=" shadow botonEmpresa"
              name="numero"
              ref={register({
                  required: {
                      value: true, 
                      message: 'Número es requerido'
                      }, 
                  maxLength: {
                      value: 10, 
                      message: 'No más de 10 carácteres!'
                      }
              })}
            />
            <span className="text-danger text-small d-block mb-2">
          {errors.numero && errors.numero.message}
            </span>
            <Form.Text className="text-muted">sin 0 ni 15 ej: 3815666777</Form.Text>
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
        <Col className=" m-0 p-0 ">
          <Form.Control
            type="email"
            placeholder=" Ingrese Email"
            className=" botonEmpresa shadow "
            name="email"
            ref={register({
                required: {
                    value: true, 
                    message: 'email es requerido'
                    }, 
                maxLength: {
                    value: 40, 
                    message: 'No más de 40 carácteres!'
                    },
                minLength: {
                    value: 13, 
                    message: 'Mínimo 13 carácteres'
                    }
            })}
            
          />
          <span className="text-danger text-small d-block mb-2">
          {errors.email && errors.email.message}
      </span>
        </Col>
        <Form.Text className="text-muted">
          Ingrese el Email donde desea recibir el informe.
        </Form.Text>
        <Button
          type="submit"
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
