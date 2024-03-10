import React from 'react'
import '../estilos/academico.css';

import arg from '../assets/academico/argp.png';
import imt from '../assets/academico/imt.png';
import numen from '../assets/academico/numen.png';
import utn from '../assets/academico/utn.png';

const Academico = () => {
  return (
    <div className='academico' id='academico'>
        <article>
            <h2>ACADEMICO</h2>
            <p>Mis primeros pasos fueron participando del programa estatal, creado con la colaboración de la <span>Universidad Tecnologica Nacional</span>, "Argentina Programa" donde recibi una introducción a los fundamentos de la programación. Continue con mi capacitacion obteniendo el certificado de <span>Desarrollador Web Full Stack</span> en el <span>Instituto Municipal de Tecnología</span> y en la <span>Academia Numen</span>. 
            <br />Hoy mi preferencia es por el desarrollo web frontend. Sigo trabajando y capacitandome de manera autodidacta en diseño UX/UI, nuevas tecnologias y frameworks para mejorar mi codigo y mis diseños.</p>
        </article>
        <aside>
            <div>
                <img src={arg} alt="logo argentina programa" />
                <img src={imt} alt="logo instituto tecnologico" />
            </div>
            <div>
                <img src={numen} alt="logo academia numen" />
                <img src={utn} alt="logo utn" />
            </div>
        </aside>
    </div>
  )
}

export default Academico