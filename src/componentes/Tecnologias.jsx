import React from 'react'
import '../estilos/tecnologias.css';

import css from '../assets/tecnologias/css3.png';
import html5 from '../assets/tecnologias/html5.png';
import js from '../assets/tecnologias/js.png';
import react from '../assets/tecnologias/react.png';

const Tecnologias = () => {
  return (
        <div className='tecnologias' id='tecnologias'>
            <div className='icon-container'>
                <div className='icon'>
                    <img src={html5} alt="icono html5" className='logo html'/>
                    <p>HTML5</p>
                </div>
                <div className='icon'>
                    <img src={css} alt="icono css3" className='logo css'/>
                    <p>CSS3</p>
                </div>
                <div className='icon'>
                    <img src={js} alt="icono javascript" className='logo js'/>
                    <p>JavaScript</p>
                </div>
                <div className='icon'>
                    <img src={react} alt="icono reactjs" className='logo react'/>
                    <p>ReactJS</p>
                </div>
            </div>
        </div>
  )
}

export default Tecnologias