// imports and functions for portfolio / projects page

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
      languages: "SQL, Javascript, CSS, Spotify API",
      packages: "Express.js, Sequelize, Moment.js, Handlebars",
      image: "./img/musicshoopascreenshot.png",
      description: "Allows a user to search for songs using Spotify's Music Library and saving favorite songs to a database.",
      repo: "https://github.com/jrsr5599/Project-2",
      live: "https://github.com/jrsr5599/Project-2",
    },
    {
      id: 1,
      title: "Campground-Center",
      languages: "html, CSS, JavaScript, JQuery, 3rd Party API's",
      image: "/img/CampgroundCenterPage1.png",
      description: "This page allows you to search for campgrounds in any city and get detailed information such as current Weather, prices, cost and pictures.",
      repo: "https://github.com/CullenKnott/campground-center",
      live: "https://cullenknott.github.io/campground-center/",
    },
    {
      id: 2,
      title: "JATE Text Editor",
      languages: "NodeJS, IndexedDB, html",
      packages: "WebpackPWA, Nodemon, Babel",
      image: "/img/JATEscreenshot.png",
      description: "This is a Text Editor App that you can use online and also install it to use locally.",
      live: "https://jate-2-6e73c30aff06.herokuapp.com/",
      repo: "https://github.com/RubenRuiz411/PWA-Text-Editor",
    },
    {
      id: 3,
      title: "Social API",
      languages: "NodeJS, RestfulAPI",
      packages: "Mongoose, MongoDB, Express, JavaScript",
      image: "/img/socialapiscreenshot.png",
      description: "API database for user thoughts/friends lists/reactions in MongoDB.",
      live: "https://github.com/RubenRuiz411/Social-API",
      repo: "https://github.com/RubenRuiz411/Social-API",
    },
    {
      id: 4,
      title: "Employee Tracker",
      languages: "NodeJS, SQL, JavaScript",
      packages: "MySQL, Inquirer, AsciiArt ",
      image: "/img/employeetrackerscreenshot.png",
      description: "Allows an employer to manage deparments, employees, employee roles and salaries",
      live: "https://github.com/RubenRuiz411/Employee-Tracker",
      repo: "https://github.com/RubenRuiz411/Employee-Tracker",
    },
    {
      id: 5,
      title: "Logo Generator",
      languages: "NodeJS, JavaScript",
      packages: "Inquirer, Jest",
      image: "/img/logogeneratorscreenshot.png",
      description: "Ability to quickly and easily create SVG logos using the terminal.",
      live: "https://github.com/RubenRuiz411/logogenerator",
      repo: "https://github.com/RubenRuiz411/logogenerator",
    },
    {
      id: 6,
      title: "The Note Cracker",
      languages: "NodeJS, JavaScript",
      packages: "Express, Uniqid",
      image: "/img/notecrackerscreenshot.png",
      description: "Create, Edit and Delete notes.",
      live: "https://serene-journey-03471-384c51b0e29f.herokuapp.com/",
      repo: "https://github.com/RubenRuiz411/thenotecracker3",
    },
  ];
  
  return (
    
    <>
      <div className="container about-page">
        <div className="text-zone">
        <a className="flat-button" href="/Resume-RubenRuiz.pdf" download>Download My Resume</a>
        <br></br> <br></br> <br></br> <br></br>

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
