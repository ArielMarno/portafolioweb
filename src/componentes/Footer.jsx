import React from 'react'
import '../estilos/footer.css';

import linkedin from '../assets/linkedin_green.png';
import github from '../assets/github_green.png';
import email from '../assets/email.png';

import top from '../assets/flecha.png';
import ubi from '../assets/ubicacion.png';

const Footer = () => {
  return (
    <div className='footer'>

      <div className='btn-top'><a href="#nav"><img src={top} alt="flechas hacia arriba"/></a></div>

          <section>
            <div className='form'>
              <h2>Gracias por ver, <br />
               también podes contactarme por acá!</h2>
              <form target="_blank" action="https://formsubmit.co/arielmarno@outlook.com" method="POST">
                  <label htmlFor="message">Dejame tu consulta o sugerencia.</label><br />
                  <textarea id="message" name="message" placeholder="Tu mensaje..."></textarea><br />
                  <input type="submit" value="ENVIAR" className="btn-form" />
              </form>
            </div>
          </section> 
          <div className='contenedor-footer'>
            <section>
              <h3>Mis Redes</h3>
              <div className='icons'>
                  <a href="https://www.linkedin.com/in/arielmarchesano/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin logo" /></a>
                  <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer"><img src={github} alt="github logo" /></a>
                  <a href="mailto: arielmarno@outlook.com"><img src={email} alt="outlook logo" /></a>
              </div>
            </section>

            <div className='ubicacion'>
              <img src={ubi} alt="icono ubicación" />
              <p>Buenos Aires, Argentina.</p>
            </div>

          </div>
          
        
    </div>
  )
}

export default Footer