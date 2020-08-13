
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import Footer from "./footer"
import "./footer.css"
import "./layout.css"
// import Empresa from "../pages/Empresa"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
      </Helmet>
      <Header siteTitle={data.site.siteMetadata.title} />
      <br/>
      <div
        style={{
          margin: `0 auto`,
          width: '50%',
          padding: `0 1.0875rem 1.45rem`,
          backgroundColor: 'white',
          opacity: '0.9',
          textAlign: 'center'

        }}
      >



        <main>{children}</main>
        {/* <Empresa/> */}
       <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
