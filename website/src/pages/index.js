import React from "react"

import Layout from "../components/layout"
// import Image from "../components/image"


const IndexPage = () => (
  <div style={{
    backgroundImage: 'url(https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)',
    widht: '100%',
    height: '100vh'
  }}>
  <Layout>
    
    <h1 style={{
      textAlign: 'center',
      color: 'black',
      
    }}>Informe sobre personas, empresas, automotor y celulares</h1>

<h4>Informes que te ayudaran a tomar mejores decisiones.</h4>
<i class="fas fa-laugh-wink fa-7x"></i>
<h3 style={{
  color: 'red'
}}>RÁPIDO, FÁCIL Y EN SIMPLES PASOS!</h3>
  </Layout>
  </div>
)

export default IndexPage
