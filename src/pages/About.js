import React from 'react';
import Pizzas from '../assets/pizzas.jpg';
import '../styles/About.css';

function About() {
  return (
    <div className='about'>
        <div 
        className='aboutTop' 
        style={{backgroundImage: `url(${Pizzas})`}}
        ></div>
        
        <div className='aboutBottom'>
            <h1>Acerca de nosotros</h1>
            <p>Reprehenderit deserunt cupidatat cupidatat laborum dolore sunt. Et fugiat sunt amet ea. 
                Ut commodo occaecat labore consequat aliqua voluptate minim deserunt elit. Aliqua consequat
                quis consequat esse consequat laboris et aliquip aliquip magna velit. Aute ea aliqua irure
                consequat fugiat anim ex cupidatat. Reprehenderit magna elit sint commodo commodo commodo pariatur laborum irure eu.
                Reprehenderit deserunt cupidatat cupidatat laborum dolore sunt. Et fugiat sunt amet ea. 
                Ut commodo occaecat labore consequat aliqua voluptate minim deserunt elit. Aliqua consequat
                quis consequat esse consequat laboris et aliquip aliquip magna velit. Aute ea aliqua irure
                consequat fugiat anim ex cupidatat. Reprehenderit magna elit sint commodo commodo commodo pariatur laborum irure eu.
            </p>          
        </div>
    </div>
  );
}

export default About;