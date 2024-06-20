import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Carrusel from './components/Carrusel';
import MainContent from './components/MainContent';
import './style.css';
import Productos from './components/Productos';
import ProductPage from './components/ProductPage'; // Asegúrate de que el nombre del archivo es correcto

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <Carrusel />
              <Productos />
              <MainContent />
            </>
          } />
          <Route path="/productos" element={<Productos />} />
          <Route path="/gorras" element={<ProductPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
