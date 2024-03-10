import React from 'react'
import '../estilos/proyectos.css';

//importacion de imagenes para cada proyecto en 3 mockups: destock, tablet y smartphones

import restaurantmobile from '../assets/proyectos/restaurant.png';
import restauranttablet from'../assets/proyectos/restaurant-tablet.png';
import restaurant from '../assets/proyectos/restaurant-notebook.png';

import gptmobile from '../assets/proyectos/gpt4.png';
import gpttablet from '../assets/proyectos/gpt4-tablet.png'
import gpt from '../assets/proyectos/gpt4-notebook.png';

import sunflowermobile from '../assets/proyectos/sunflower.png';
import sunflowertablet from '../assets/proyectos/sunflower-tablet.png';
import sunflower from '../assets/proyectos/sunflower-notebook.png';

import weathermobile from '../assets/proyectos/weather.png';
import weathertablet from '../assets/proyectos/weather-tablet.png';
import weather from '../assets/proyectos/weather-notebook.png';


const Proyectos = () => {
  return (
    <div className='proyectos' id='proyectos'>
        <div className='title'>
          <h2>PROYECTOS</h2>
          <p>MAS DESTACADOS</p>
        </div>
        <main>

          <article className='restaurant'>

            <aside>
              <img src={restaurant} alt="mockup sitio web" className='destock'/>
              <img src={restauranttablet} alt="mockup sitio web" className='tablet' />
              <img src={restaurantmobile} alt="mockup sitio web" className='mobile'/>
            </aside>


            <section>
              <h3>Gericht Restaurant</h3>
              <p>Diseño moderno y elegante para un restaurante de alta cocina. Cuenta con un navegador en la parte superior para recorrer la página de una manera más dinámica. Distintas secciones donde se puede encontrar: los especiales del día, carrusel de imágenes directamente desde su Instagram, un video mostrando el ambiente reconfortante del lugar y también una llamada a la acción donde el potencial cliente puede suscribirse para recibir novedades.</p>
              <div className='buttons'>
                <a href="https://figmarestaurantapp.000webhostapp.com/" className='paginaweb'>PAGINA WEB</a>
                <a href="https://github.com/ArielMarno/FineDiningRestaurantApp" className='github'>REPOSITORIO</a>
                <a href="https://www.figma.com/file/yvClSI9AZBRX8UaaGEByF3/Modern-UI%2FUX%3A-Gericht?type=design&node-id=0-1&mode=design&t=HrlI32Pxpe5JdAD2-0" className='diseño'>DISEÑO FIGMA</a>
              </div>
            </section>

          </article>

          <article className='gpt4'>

          <section>
              <h3>GPT-4 OpenAI</h3>
              <p>Blog sobre el desarrollo y la implementación de la inteligencia artificial. Diseño futurista y adaptable, con enlaces a las distintas secciones de la página, tarjetas con artículos sobre los temas más relevantes, imágenes atrapantes y títulos con colores degradados para resaltar el contenido.</p>
              <div className='buttons'>
                <a href="https://gpt-4-ai.000webhostapp.com/" className='paginaweb'>PAGINA WEB</a>
                <a href="https://github.com/ArielMarno/GPT-4" className='github'>REPOSITORIO</a>
                <a href="https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3?type=design&node-id=0-1&mode=design&t=5EVD7mCtolYSN747-0" className='diseño'>DISEÑO FIGMA</a>
              </div>
            </section>

            <aside>
              <img src={gpt} alt="mockup sitio web" className='destock'/>
              <img src={gpttablet} alt="mockup sitio web" className='tablet' />
              <img src={gptmobile} alt="mockup sitio web" className='mobile' />
            </aside>

          </article>

          <article className='agencia'>

            <aside>
              <img src={sunflower} alt="mockup sitio web" className='destock'/>
              <img src={sunflowertablet} alt="mockup sitio web" className='tablet' />
              <img src={sunflowermobile} alt="mockup sitio web" className='mobile' />
            </aside>

            <section>
              <h3>Sunflower Agencia</h3>
              <p>Proyecto realizado para una agencia de marketing digital, diseño gráfico y publicidad en redes sociales. Se implementó un diseño minimalista y funcional para la oferta de servicios y el contacto directo con la agencia. Una sección dedicada a los trabajos realizados, con enlaces a páginas secundarias para ver los diseños e imágenes personalizadas de cada empresa o negocio. </p>
              <div className='buttons'>
                <a href="https://sunfloweragencia.com/" className='paginaweb'>PAGINA WEB</a>
                <a href="https://github.com/ArielMarno/sunflower" className='github'>REPOSITORIO</a>
                <a href="https://www.figma.com/file/8Tp6eR73ilxO5CgIxko31z/Sunflower?type=design&node-id=0-1&mode=design&t=ZQOVwpgaOvCao126-0" className='diseño'>DISEÑO FIGMA</a>
              </div>
            </section>

          </article>

          <article className='weather'>

           <section>
              <h3>Weather App</h3>
              <p>Aplicación web para conocer el clima en diferentes ciudades del mundo. Creada a partir de la API de OpenWeatherMap, muestra el clima actual y también un pronóstico extendido de hasta doce horas. El diseño cuenta con un panel lateral en el que se puede encontrar información adicional: el porcentaje de humedad, velocidad del viento, temperatura máxima y mínima, fecha y hora actual.</p>
              <div className='buttons'>
                <a href="https://weatherwebside.000webhostapp.com/" className='paginaweb'>PAGINA WEB</a>
                <a href="https://github.com/ArielMarno/weather-app" className='github'>REPOSITORIO</a>
                <a href="https://www.behance.net/gallery/174927383/Weather-forecast-website" className='diseño'>DISEÑO BEHANCE</a>
              </div>
            </section>

            <aside>
              <img src={weather} alt="mockup sitio web" className='destock'/>
              <img src={weathertablet} alt="mockup sitio web" className='tablet' />
              <img src={weathermobile} alt="mockup sitio web" className='mobile' />
            </aside>

          </article>
          
        </main>
    </div>
  )
}

export default Proyectos
             