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
