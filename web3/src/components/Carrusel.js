import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../carrusel.css';
import imagen1 from '../components/images/Architecture.webp';
import imagen2 from '../components/images/Blockchain.png';
import imagen3 from '../components/images/Filmed Video Production.webp';
import imagen4 from '../components/images/Music Production.webp';

function Carrusel() {
  const navigate = useNavigate();

  const handleImageClick = (route) => {
    navigate(route); 
  };

  return (
    <div className="carrusel-container">
      <div className="carrusel">
        <button className="carrusel-item" onClick={() => handleImageClick('/products/667da5859fb5ed6ac8c12c6f')}>
          <img src={imagen1} alt="Imagen 1" />
          <div className="caption">
            <h2>Arquitectura y diseño de construcción</h2>
            <p>Explora nuevos diseños</p>
            <button>Click aqui</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('/products/667da77d9fb5ed6ac8c12ca4')}>
          <img src={imagen2} alt="Imagen 2" />
          <div className="caption">
            <h2>Blockchain y criptomonedas</h2>
            <p>Seguridad y auditoria</p>
            <button>Explorar</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('/products/667da8059fb5ed6ac8c12cad')}>
          <img src={imagen3} alt="Imagen 3" />
          <div className="caption">
            <h2>Producción cinematográfica</h2>
            <p>Acceso exclusivo</p>
            <button>Comprar</button>
          </div>
        </button>
        <button className="carrusel-item" onClick={() => handleImageClick('/products/667da8829fb5ed6ac8c12cb6')}>
          <img src={imagen4} alt="Imagen 4" />
          <div className="caption">
            <h2>Producción y escritura musical</h2>
            <p>Productores, escritores y vocalistas</p>
            <button>Click</button>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Carrusel;
