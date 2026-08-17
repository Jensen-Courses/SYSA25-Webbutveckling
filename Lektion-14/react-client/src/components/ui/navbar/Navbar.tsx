import runstore from '../../../assets/runstore.png';

import './navbar.css';
import MenuItem from './MenuItem';
import MenuIcon from './MenuIcon';

function Navbar() {
  return (
    <header>
      <nav>
        <ul>
          <MenuIcon
            url='/'
            alt='Runstore logo'
            image={runstore}
            className='logo'
            text='RunStore'
          />
          <MenuItem text='Start' url='/' />
          <MenuItem text='Produkter' url='/products' />
          <MenuItem text='Om Oss' url='/about' />
          <MenuItem text='Kontakta Oss' url='/contact' />
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
