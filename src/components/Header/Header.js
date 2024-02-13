import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

// import Nav from '../Nav/Nav';
// import NavLink from '../Nav/NavLink';


const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <header className="header">
        <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
          <ul className='nav-ul'>
            <li className='nav-li'><a className="nav-link" href="/Home">Home</a></li>
            <li className='nav-li'><a className="nav-link" href="/LogOut">Articles</a></li>
            <li className='nav-li'><a className="nav-link"href="/">Register</a></li>
            <li className='nav-li'><a className="nav-link"href="/">Contact</a></li>
          </ul>
        </nav>
  
        <button className="toggle-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='icon-bar'/>
        </button>
      </header>
    );
  };
  

export default Header;

