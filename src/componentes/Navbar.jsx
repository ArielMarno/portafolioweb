import { React, useState } from 'react';
import '../estilos/navbar.css';
import Burguer from './Burguer';

const Navbar = () => {

  const[click, setClick] = useState(false);
  const handleClick = () =>{
  //setear el booleano opuesto al actual cuando se hace click en el boton
    setClick(!click);
  }
  return (
        <nav id='nav'>
            <h1>Marchesano Ariel</h1>
            
            <div className={`links ${click ? 'active' : ''}`}>
                <a href="#about">SOBRE MI</a>
                <a href="#academico">ACADEMICO</a>
                <a href="#proyectos">PROYECTOS</a>
                
                <a href="https://drive.google.com/file/d/1vbxf-9qfUZ2YqLvI87ivT_oDQS5LipzG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className='cv'>CURRICULUM</a>

                <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer" className='hide-links'>GITHUB</a>
                <a href="https://www.linkedin.com/in/arielmarchesano/" target="_blank" rel="noopener noreferrer" className='hide-links'>LINKEDIN</a>
            </div>

            {/* Boton para descargar el Curriculum */}

            <button className="button">
              <span className="button_lg">
                  <span className="button_sl"></span>
                  <a className="button_text" href="https://drive.google.com/file/d/1vbxf-9qfUZ2YqLvI87ivT_oDQS5LipzG/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Ver Curriculum</a>
              </span>
            </button>

            {/* Menu hamburguesa para dispositivos mobiles, sin display hasta 800px */}

            <div className='burguer'>
              <Burguer  click={click} handleClick={handleClick}/>
            </div>
        </nav>
  )
}

export default Navbar