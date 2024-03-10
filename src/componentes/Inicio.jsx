import '../estilos/inicio.css';
import Clipboard from 'clipboard';
import Navbar from './Navbar';

import email from '../assets/email_green.png';
import send from '../assets/paperplane_green.png';
import copiar from '../assets/copi_green.png';

import github from '../assets/github_green.png';
import linkedin from '../assets/linkedin_green.png';


const Inicio = () => {

  // Copiar email al portapapeles
  
  function copiarEmail() {
    const email = 'arielmarno@outlook.com';
    const clipboard = new Clipboard('.copiar-email', {
      text: function() {
        return email;
      }
    });
    clipboard.on('success', function(e) {
      console.log('Email copiado!');
      clipboard.destroy(); 
    });
  }

  return (
    <div className='inicio' id='inicio'>

        <Navbar />

        <div className='title'>
            <h1>DESARROLLADOR WEB</h1>
            <p>FRONT END</p>
        </div>

          <section className='contacto'>

            <div className='box'>

              <div className='email-titulo'>
                <img src={email} alt="icono de correo" />
                <p>Email</p>
              </div>

              <div className='email'>
                <p>arielmarno@outlook.com</p>
                <a href="mailto: arielmarno@outlook.com"><img src={send} alt="avion de papel" className='enviar-email' /></a>
                {/* Botón para copiar el email haciendo click */}
                <img src={copiar} alt="icono portapapeles" className='copiar-email' onClick={copiarEmail}/>
              </div>

            </div>

            <div className='box'>
              <p>Redes Sociales</p>
              <div className='socials'>
                <a href="https://github.com/ArielMarno" target="_blank" rel="noopener noreferrer"><img src={github} alt="icono github" className='git'/></a>
                <a href="https://www.linkedin.com/in/arielmarchesano/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="icono linkedin" /></a>
              </div>
            </div>

          </section>
        </div>
  )
}

export default Inicio