import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Blog from "../components/Blog"
import Footer from "../components/Footer"

const BlogPage = () => (
    <Layout>
        <SEO title="Anurag Shenoy — Blog" />
        <Blog></Blog>
        <Footer></Footer>
    </Layout>
)

export default BlogPage
