import React from "react"
import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import SEO from "../components/seo"
import { Nav,Card, Accordion, AccordionCollapse, AccordionToggle } from "react-bootstrap"



const IndexPage = () => (
  <>
  <Layout>
  {/* <div
        style={{
          margin: `0 auto`,
          width: "50%",
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: "white",
          opacity: "0.9",
          textAlign: "center",
        }}
      > */}
      
     
  <div className="w-100" style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
   
    minHeight: '100vh',
    margin: `0 auto`,
          width: "50%",
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: "white",
          opacity: "0.9",
          textAlign: "center",
    
  }}>
    
<div className="hola"
style={{
  margin: `0 auto`,
  width: "50%",
  padding: `0 1.0875rem 1.45rem`,
  backgroundColor: "white",
  opacity: "0.9",
  textAlign: "center",
}}
>
   

      <h1 style={{
        textAlign: 'center',
        color: 'black',

      }}>Informes sobre personas, empresas, celulares y automotor.</h1>
           <h3 style={{
        color: '#B48B1B'
      }}>RÁPIDO, FÁCIL Y EN SIMPLES PASOS!</h3>

      <h4>Nuestro campo de actividad está vinculado con la búsqueda artesanal de información, toda ella encuadrada en el art. 5 inc. 2 de la ley 25.326 de Argentina
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



// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
   
//     <Container className="bg-dark">
//       <h1>Prevengase</h1>
//       <p>Welcome to your new Gatsby site.</p>
//       <p>Now go build something great.</p>
//       <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//         <Image />
//       </div>
//     </Container>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

export default IndexPage
