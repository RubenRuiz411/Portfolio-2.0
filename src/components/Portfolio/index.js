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
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Project from "./Project";


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])
  const projects = [
    {
      id: 0,
      title: "Music Shoopa",
      languages: "SQL, Javascript, CSS",
      packages: "Express.js, Sequelize, Moment.js, Handlebars",
      image: "./img/musicshoopascreenshot.png",
      description: "Allows a user to search for songs using Spotify's Music Library and saving favorite songs to a database.",
      repo: "https://github.com/jrsr5599/Project-2",
      live: "pending",
    },
    {
      id: 1,
      title: "Campground-Center",
      languages: "html, CSS, JavaScript, JQery",
      image: "/img/CampgroundCenterPage1.png",
      description: "Allows you to edit and post blogs. You can also leave comments on your own blog or the blogs of others.",
      repo: "https://github.com/CullenKnott/campground-center",
      live: "https://cullenknott.github.io/campground-center/",
    },
    {
      id: 2,
      title: "JATE Text Editor",
      languages: "NodeJS, IndexedDB, html",
      packages: "WebpackPWA, Nodemon, Babel,  ",
      image: "/img/JATEscreenshot.png",
      description: "Allows instructors to quickly create quizzes and print the quiz to a PDF to distribute to their students, as well as keep a copy for themselves with the answer key!",
      live: "https://jate-2-6e73c30aff06.herokuapp.com/",
      repo: "https://github.com/RubenRuiz411/PWA-Text-Editor",
    },
   
  ];
  
  return (
    
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
          <Project projects={projects} />

        </div>
    

      </div>
      
      <Loader type="ball-zig-zag-deflect" />
    </>
  )
}

export default Portfolio
