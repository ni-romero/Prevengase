import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import {Card, Accordion } from "react-bootstrap"



const IndexPage = () => (
  <>
  <Layout>
      
     
  <div className="m-auto pt-5 padreInd" >
    
<div className="hola m-auto p-1 col-xl-6 col-lg-10 col-sm-12 col-xs-12">
   

      <h1 className="tituloInd text-center">Informes sobre personas, empresas, celulares y automotor.</h1>
           <h3 className="rapidoFa" style={{
        color: '#B48B1B'
      }}>RÁPIDO, FÁCIL Y EN SIMPLES PASOS!</h3>

      <h4 className="tituloDos">Nuestro campo de actividad está vinculado con la búsqueda artesanal de información, toda ella encuadrada en el art. 5 inc. 2 de la ley 25.326 de Argentina
         y de legítima obtención. </h4>

         <Accordion defaultActiveKey="0">
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Leer más!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body> Nuestros informes no resultan de un registro en una base de datos propia, sino del trabajo personalizado de un investigador, quien 
         recurre a múltiples fuentes de información pública. No poseemos registro ni información alguna relativa a la persona y/o entidad de la cual se solicita un
          informe, sino que para obtenerla, es menester el despliegue de un esfuerzo específico de investigación en fuentes que no son propias. Se cobra una suma 
          monetaria por el solo hecho del tiempo que lleva que nuestro investigador de manera artesanal busque información en distintas fuentes ajenas, y recopile
           lo obtenido en un solo archivo. Dicha información es eliminada definitiva e inmediatamente una vez enviada al solicitante.
    
 </Card.Body>
    </Accordion.Collapse>
  </Card>
  
</Accordion>
</div>
</div>

        
    </Layout>
    <br/>
    <Footer/>
  
  </>
)


export default IndexPage;
