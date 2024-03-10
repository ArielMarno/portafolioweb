import './App.css'
import Inicio from './componentes/Inicio'
import Proyectos from './componentes/Proyectos'
import Tecnologias from './componentes/Tecnologias'
import About from './componentes/About';
import Academico from './componentes/Academico';
import Footer from './componentes/Footer';

function App() {

  return (
    <div>
      <Inicio />
      <About />
      <Academico />
      <Tecnologias />
      <Proyectos />
      <Footer />
    </div>
  )
}

export default App
