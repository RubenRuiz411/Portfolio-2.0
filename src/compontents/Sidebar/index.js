import './index.scss'
import { useState } from 'react'
import LogoR from '../../assets/images/logo-portfolio.png'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faLinkedin,
    faGithub,
  } from '@fortawesome/free-brands-svg-icons'
  import {
    faHome,
    faUser,
    faEnvelope,
    faSuitcase,
  } from '@fortawesome/free-solid-svg-icons'

// const Sidebar = () => (
//     <div className='nav-bar'>
//         <Link className='logo' to='/'>
//             <img src={LogoR} alt='logo' />
//         </Link>
//     </div>
// )

const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
  
    return (
      <div className="nav-bar">
        <Link 
          className="logo"
          to="/"
          onClick={() => setShowNav(false)}>
          <img src={LogoR} alt="Logo" />

        </Link>
        <ul>
        <nav className={showNav ? 'mobile-show' : ''}>
          <NavLink 
            exact="true"
            activeclassname="active"
            to="/"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faHome} color="#FFD700" />
          </NavLink>
          <NavLink 
            activeclassname="active"
            className="about-link"
            to="/about"
            onClick={() => setShowNav(false)}>
            <FontAwesomeIcon icon={faUser} color="#FFD700" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="portfolio-link"
            to="/portfolio"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faSuitcase} color="#FFD700" />
          </NavLink>
          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
            onClick={() => setShowNav(false)}
          >
            <FontAwesomeIcon icon={faEnvelope} color="#FFD700" />
          </NavLink>

        </nav>

            <a
              href="https://www.linkedin.com/in/ruben-ruiz-821753132/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                color="#FFD700"
                className="anchor-icon"
              />
            </a>


            <a
              href="https://github.com/RubenRuiz411"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                color="#FFD700"
                className="anchor-icon"
              />
            </a>

        </ul>
      </div>
    )
  }
  

  

export default Sidebar