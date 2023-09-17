import React from "react";
import Project from "./Project";

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

function Portfolio() {
  return (
    <div>
      <p className="content is-medium">Portfolio</p>
      <hr />

      <Project projects={projects} />
    </div>
  );
}

export default Portfolio;
