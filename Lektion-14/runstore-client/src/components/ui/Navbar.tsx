import { NavLink } from 'react-router-dom';
import runstore from '../../assets/runstore.png';

import './navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <li className='logo'>
            <a href=''>
              <img src={runstore} />
            </a>
          </li>
          <li className='menu-item'>
            <NavLink to='/'>Start</NavLink>
          </li>
          <li className='menu-item'>
            <NavLink to='/products'>Produkter</NavLink>
          </li>
          <li className='menu-item'>
            <a href=''>Om Oss</a>
          </li>
          <li className='menu-item'>
            <a href=''>Kontakta Oss</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
