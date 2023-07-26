import './Dark.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import HeaderComponent from './components/HeaderComponent';
import CrearPreguntaComponent from './components/CrearPreguntaComponent';
import PruebaComponent from './components/PruebaComponent';

function App() {
  return (
    <div>
      <HeaderComponent/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/crear-pregunta" element={<CrearPreguntaComponent/>} />
          <Route path="/prueba/:dificultad" element={<PruebaComponent/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
