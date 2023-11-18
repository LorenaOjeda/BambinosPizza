import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/pizza_back.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className='home' style={{backgroundImage: `url(${BannerImage})`}}>
        <div className='headerContainer'>
            <h1>Bambino's Pizza</h1>
            <p>¡Máximo sabor italiano!</p>
            <Link to="/menu">
            <button>
                ORDENA AHORA
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Home