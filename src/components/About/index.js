// import React from "react";

// function About() {
//     return (
//         <div><p>
//                   My name is Ruben Ruiz, and I'm currently employed as a Technical Support Secialist at Bleubeam Inc. I look to transition into a full stack developer. With over 7 years of experience in technical support and troubleshooting, I've developed a strong foundation in software and various operating systems. However, I've always been passionate about development and decided to pursue a career in it.

// I'm now excited to leverage my technical support experience and new development skills to become a back-end developer.

// In my free time, I enjoy working on personal projects, contributing to open-source projects, and staying up-to-date with the latest industry developments. I'm a detail-oriented problem solver, and I'm committed to delivering high-quality work that meets the needs of my clients and users.

// Thank you for taking the time to learn a little bit about me! If you have any questions or would like to work together, please don't hesitate to get in touch.
// </p></div>
//     )
// }

// export default About;

import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          My name is Ruben Ruiz, and I'm currently employed as a Technical Support Secialist at Bleubeam Inc. I look to transition into a full stack developer. With over 7 years of experience in technical support and troubleshooting, I've developed a strong foundation in software and various operating systems. However, I've always been passionate about development and decided to pursue a career in it.</p>
          <p align="LEFT">
          I'm now excited to leverage my technical support experience and new development skills to become a back-end developer.
          </p>
          <p>
          In my free time, I enjoy working on personal projects, contributing to open-source projects, and staying up-to-date with the latest industry developments. I'm a detail-oriented problem solver, and I'm committed to delivering high-quality work that meets the needs of my clients and users.

          </p>
          <p>
          Thank you for taking the time to learn a little bit about me! If you have any questions or would like to work together, please don't hesitate to get in touch.

          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default About
