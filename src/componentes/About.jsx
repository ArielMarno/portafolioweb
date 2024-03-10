import React from 'react'
import '../estilos/about.css';

const About = () => {
  return (
    <div className='about'id='about'>
      <div className='contenedor-txt'>
        <section>
          <h2>SOBRE MI</h2>
          <p>¿Quien Soy?</p>
        </section>
        <article>
          <p>Definirnos nos limita, pero la disciplina, el trabajo en equipo y la superación personal son fundamentales para desempeñarnos en cualquier tarea.
          <br />
          La programación me dio un nuevo punto de vista y me impulsó a desarrollar mucho más mi creatividad. Por este motivo decidí enfocarme en el diseño y la experiencia de usuario.
          <br />
          Si bien mi capacitación fue como Desarrollador Web FullStack, busco participar en proyectos en los que pueda aprender y aportar con mis habilidades en la creación de interfaces desde el FrontEnd.</p>
        </article>
      </div>
    </div>
  )
}

export default About