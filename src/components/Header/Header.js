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
            <li className='nav-li'><a className="nav-link"href="/Registration">Registration</a></li>
            <li className='nav-li'><a className="nav-link"href="/YourOpinions">Your opinions</a></li>

            <div className=' li-last'>
            <li className='nav-li'><a className="nav-link" href="/LogOut">Log Out</a></li>
            <li className='nav-li'><a className="nav-link" href="https://www.support-online.pl/">Support</a></li>
            </div>

          </ul>
        </nav>
  
        <button className="toggle-button" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='icon-bar'/>
        </button>
      </header>
    );
  };
  

export default Header;

