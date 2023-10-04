import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Navbar() {
  return (
    <nav className='flex justify-between'>
      <ul className='flex'>
        <li>linkedin</li>
        <li>
        <FontAwesomeIcon icon={solid("linkedin")} />
        </li>
        <li>github</li>
        <li>gmail</li>
      </ul>
      <ul className='flex'>
        <li>About</li>
        <li>Projects</li>
        <li>Certifications</li>
        <li>
          <button>Download CV</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
