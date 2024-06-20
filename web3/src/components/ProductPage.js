import React from 'react';
import productImage from './images/Rose.jpg'; // Asegúrate de tener una imagen en esta ruta

function ProductPage() {
  return (
    <div className="product-page">
      <div className="product-image">
        <img src={productImage} alt="Product" />
      </div>
      <div className="product-details">
        <h2>Altamente valorado</h2>
        <p>
          La amortiguación responsiva de los Pegasus proporciona una pisada energética para correr a diario en carretera. Disfruta de un mayor retorno de energía con las unidades Air Zoom dobles y la entresuela de espuma ReactX Foam. Además, la malla diseñada estratégicamente, mejorada en la parte superior, reduce el peso y aumenta la transpirabilidad.
        </p>
        <ul>
          <li>Color que se muestra: Blanco/Cactus empolvado/Azul glacial/Negro</li>
          <li>Estilo: FD2722-103</li>
        </ul>
        <a href="#ver-datos-producto">Ver datos del producto</a>
      </div>
    </div>
  );
}

export default ProductPage;
