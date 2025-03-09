import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import About from "../components/about"
import Footer from "../components/Footer"

const AboutPage = () => (
  <Layout>
    <SEO title="Anurag Shenoy — About" />
    <About></About>
    <Footer></Footer>
  </Layout>
)

export default AboutPage
