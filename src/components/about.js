import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
// import downloadIcon from "../images/download-64.png"

const About = () => {
  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="image-wrapper">
            <img src={data.aboutImage} alt="about" width={360} height={360}></img>
          </div>

          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <h2>Anurag Shenoy is a Software Developer and Machine Learning Engineer with 3 years of work experience in the industry.</h2>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <br></br>
            <h3>Resume</h3>
            <a href="https://drive.google.com/file/d/1jWDDJtyM7TDxDivUBGbgwE5IEC2W26mx/view?usp=share_link">Download Resume (PDF)</a>
            &nbsp;&nbsp;
            <br></br>
            <br></br>
            <a href="https://docs.google.com/document/d/142UQOp_tI7wkamlZWe1_lRrg9-gtGvMx/edit?usp=share_link&ouid=103781709352320889463&rtpof=true&sd=true">Download Resume (Word)</a>
            <br></br>
            <br></br>
            {/* <h3>Phone Number</h3>
            <a href={"tel:" + data.contactPhoneNumber}>{data.contactPhoneNumber}</a> */}
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
