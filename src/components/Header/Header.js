import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Nav from '../Nav/Nav';
import NavLink from '../Nav/NavLink';


const Header = () => {
  return (
    <header className="header">
        <Nav className="nav">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Articles</NavLink>
                <NavLink to="/">Register</NavLink>
                <NavLink to="/">Contact</NavLink>
        </Nav>


      <button className="toggle-button">
        <FontAwesomeIcon icon={faBars} className='icon-bar'/>
      </button>
    </header>
    
  );
};

export default Header;

