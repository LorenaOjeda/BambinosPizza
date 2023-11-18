import React, {useState} from 'react';
import Logo from '../assets/logo_bambinos.png';
import {Link} from 'react-router-dom';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/Navbar.css';

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className='navbar'>
        <div className='leftSide'id={openLinks ? "open" : "close"}>
        <img alt="logo" src={Logo}/>
        <div className='hiddenLinks'>
          <Link to = "/">Inicio</Link>
          <Link to = "/menu">Menú</Link>
          <Link to = "/acerca">Acerca de nosotros</Link>
          <Link to = "/contacto">Contacto</Link>
        </div>
        </div>
        <div className='rightSide'>
          <Link to = "/">Inicio</Link>
          <Link to = "/menu">Menú</Link>
          <Link to = "/acerca">Acerca de nosotros</Link>
          <Link to = "/contacto">Contacto</Link>
          <button onClick = {toggleNavbar}>
            <ReorderIcon/>
          </button>
        </div>
      </div>
  );
  }

export default Navbar