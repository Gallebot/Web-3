import React from 'react';
import '../productos.css';
import imagen1 from './images/Rose.jpg';

function Productos() {
  return (
    <section className="product-section">
      <h2>TODO PARA EL CALOR</h2>
      <div className="product-container">
        <div className="product-card">
          <img src={imagen1} alt="Shorts para Hombres" />
          <div className="product-info">
            <h3>1</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen1} alt="Playeras Puma" />
          <div className="product-info">
            <h3>2</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen1} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>3</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen1} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>4</h3>
            <button>COMPRAR</button>
          </div>
        </div>
        <div className="product-card">
          <img src={imagen1} alt="Faldas y Vestidos" />
          <div className="product-info">
            <h3>5</h3>
            <button>COMPRAR</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Productos;
