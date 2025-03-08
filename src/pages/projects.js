import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Projects from "../components/Projects"
import Footer from "../components/Footer"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Anurag Shenoy" />
    {/* <Header></Header> */}
    <Projects></Projects>
    {/* <About></About> */}
    {/* <Skills></Skills> */}
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default ProjectsPage
