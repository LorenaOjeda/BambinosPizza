import React from 'react';
import PizzaChef from '../assets/pizzaChef.png';
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
        <div 
        className='leftSide' 
        style={{backgroundImage: `url(${PizzaChef})`}}
        ></div>
        <div className='rightSide'>
            <h1>Contáctanos</h1>
            <form id='contact-form' method='POST'>
                <label htmlFor='name'>Nombre completo</label>
                <input name='name' placeholder='Escribe tu nombre completo' type='text'/>
                <label htmlFor='email'>Correo electrónico</label>
                <input name='email' placeholder='Escribe tu correo electrónico' type='email'/>
                <label htmlFor='message'>Mensaje</label>
                <textarea rows='6' placeholder='Escribe tu mensaje' name='message' required></textarea>
                <button type='submit'> Enviar </button>
            </form>
        </div>
    </div>
  )
}

export default Contact