import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Projects from "../components/Projects"
// import About from "../components/about"
import Skills from "../components/skills"
// import Promotion from "../components/Promotion"
import { LimitedBlog } from "../components/LimitedBlog"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Anurag Shenoy" />
    <Header></Header>
    <Projects></Projects>
    {/* <About></About> */}
    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <LimitedBlog></LimitedBlog>
    <Contact></Contact>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
