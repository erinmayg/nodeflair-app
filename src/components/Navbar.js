import React, { useState } from 'react';
import '../css/navbar.css';
import { ReactComponent as NodeFlair } from '../assets/nodeflair.svg';
import { FaBars } from 'react-icons/fa';

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className={'navbar position-fixed' + (toggleMenu && ' navbar-hide')}>
      <div className='navbar-inner-container'>
        <a className='navbar-icon' href='https://www.nodeflair.com/'>
          <NodeFlair />
        </a>
        <span
          className={
            toggleMenu
              ? 'navbar-dropdown-clickable-options-container'
              : 'navbar-clickable-options-container show-only-on-large'
          }
        >
          <a href='/consult'>
            <span className='navbar-clickable-option'>Consult</span>
          </a>
          <a href='/jobs'>
            <span className='navbar-clickable-option'>Jobs</span>
          </a>
          <a href='/blog'>
            <span className='navbar-clickable-option'>Blog</span>
          </a>
        </span>
        <span className='clickable-options-icon show-only-on-small'>
          <FaBars
            onClick={() => {
              setToggleMenu(!toggleMenu);
              console.log(toggleMenu);
            }}
          />
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
