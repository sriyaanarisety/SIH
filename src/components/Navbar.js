import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import Dropdown from './Dropdown';
import NavBar from 'react-bootstrap/Navbar';

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          AIUD
          <i class='fab fa-firstdraft' />
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
      
        <li className='nav-item'>
        <Link to='/Universities' className='nav-links' onClick={closeMobileMenu}>
           Universities
        </Link>
     </li>
     <li className='nav-item'>
        <Link to='/courses' className='nav-links' onClick={closeMobileMenu}>
           Courses
        </Link>
     </li>
     <li className='nav-item'>
     <Link to='/reviews' className='nav-links' onClick={closeMobileMenu}>
        Reviews
     </Link>
  </li>
  <li className='nav-item'>
  <Link to='/news' className='nav-links' onClick={closeMobileMenu}>
     News
  </Link>
</li>
<li className='nav-item'>
<Link to='/admissions' className='nav-links' onClick={closeMobileMenu}>
   Admissions
</Link>
</li>
<li className='nav-item'>
<Link
  to='/recomended'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Ranking
</Link>
</li>
<li className='nav-item'>
<Link to='/contact-us'
  className='nav-links'
  onClick={closeMobileMenu}
>
  Comparison
</Link>
</li>
          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}   >
            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
              Overall <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li>
            <Link
              to='/sign-up'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;
