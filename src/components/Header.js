import React from "react"
import Fade from "react-reveal/Fade"
import scrollTo from "gatsby-plugin-smoothscroll"

import data from "../yourdata"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h1>
              Hi, I'm {data.firstName}{" "}
              {/* <span role="img" aria-label="Emoji">
                👋
              </span> */}
            </h1>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                {data.headerTaglines[0]
                  ? data.headerTaglines[0]
                  : "Building digital"}
              </h1>
              <h1>
                {" "}
                {data.headerTaglines[1]
                  ? data.headerTaglines[1]
                  : "products, brands"}
              </h1>
            </div>
            {/* <div className="heading-wrapper">
              <h1>
                {data.headerTagline
                  ? data.headerTagline
                  : "Building digital products, and obtaining insights from data"}
              </h1>
            </div> */}
          </Fade>
          <Fade bottom>
            <p>{data.headerParagraph}</p>
          </Fade>
          <Fade bottom>
            <button
              onClick={() => scrollTo("#contact")} onKeyPress={() => scrollTo("#contact")}
              className="primary-btn"
            >
              CONNECT WITH ME
            </button>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
