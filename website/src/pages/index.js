import React from "react"
import Layout from "../components/layout"



const IndexPage = () => (
  <div style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
    widht: '100%',
    height: '100vh',
    
  }}>
    <Layout>

      <h1 style={{
        textAlign: 'center',
        color: 'black',

      }}>Informes sobre personas, empresas, celulares y automotor.</h1>
           <h3 style={{
        color: 'red'
      }}>RÁPIDO, FÁCIL Y EN SIMPLES PASOS!</h3>

      <h4>Nuestro campo de actividad está vinculado con la búsqueda artesanal de información, toda ella encuadrada en el art. 5 inc. 2 de la ley 25.326 de Argentina
         y de legítima obtención. Nuestros informes no resultan de un registro en una base de datos propia, sino del trabajo personalizado de un investigador, quien 
         recurre a múltiples fuentes de información pública. No poseemos registro ni información alguna relativa a la persona y/o entidad de la cual se solicita un
          informe, sino que para obtenerla, es menester el despliegue de un esfuerzo específico de investigación en fuentes que no son propias. Se cobra una suma 
          monetaria por el solo hecho del tiempo que lleva que nuestro investigador de manera artesanal busque información en distintas fuentes ajenas, y recopile
           lo obtenido en un solo archivo. Dicha información es eliminada definitiva e inmediatamente una vez enviada al solicitante.</h4>
    
 
    </Layout>
    <br/>
  </div>

)

export default IndexPage
