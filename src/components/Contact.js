import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{data.contactSubHeading}</h2>
          </Fade>
          <a className="email-link" href={`mailto:${data.contactEmail}`}>
            {data.contactEmail}
          </a>
          <button className="primary-btn mt-resume">
            <a href={data.resume.urlPdf}>Resume</a>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
