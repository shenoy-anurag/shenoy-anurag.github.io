import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            onKeyPress={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            {/* Portfolio. */}
            <Link to="/" className="home active">Home.</Link>
          </div>
          <div className="links-wrapper">
            <Link to="/projects" className="link active">Projects</Link>
            <Link to="/blog" className="link active">Blog</Link>
            <Link to="/about" className="link active">About</Link>
            <button onClick={() => scrollTo("#contact")} onKeyPress={() => scrollTo("#contact")}>Contact</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
