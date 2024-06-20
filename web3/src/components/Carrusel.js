import React from 'react';
import '../carrusel.css';
import imagen1 from '../components/images/chicharo.jpg';
import imagen2 from '../components/images/rayadosssss.jpg';
import imagen3 from '../components/images/chicharo.jpg';
import imagen4 from '../components/images/rayadosssss.jpg';

function Carrusel() {
  const handleImageClick = (message) => {
    alert(message); // Aquí puedes manejar la acción que deseas realizar
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel">
        <button className="carrusel-item" onClick={() => handleImageClick('Imagen 1 clickeada')}>
          <img src={imagen1} alt="Imagen 1" />
          <div className="caption">
            <h2>Apps de deporte y bienestar</h2>
            <p>Muévete ahí mismo</p>
            <button>Muévete</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('Imagen 2 clickeada')}>
          <img src={imagen2} alt="Imagen 2" />
          <div className="caption">
            <h2>SNKRS</h2>
            <p>Tu comunidad de calzado definitiva</p>
            <button>Explorar</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('Imagen 3 clickeada')}>
          <img src={imagen3} alt="Imagen 3" />
          <div className="caption">
            <h2>Producto para Miembros</h2>
            <p>Acceso exclusivo</p>
            <button>Comprar</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('Imagen 4 clickeada')}>
          <img src={imagen4} alt="Imagen 4" />
          <div className="caption">
            <h2>Nuevo Producto</h2>
            <p>Descripción del producto</p>
            <button>Comprar</button>
          </div>
        </button>
        {/* Añade más botones con la clase "carrusel-item" según sea necesario */}
      </div>
    </div>
  );
}

export default Carrusel;
