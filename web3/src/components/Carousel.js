import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imagen1 from '../components/images/banner.png';
import imagen2 from '../components/images/Miscellaneous.webp';
import imagen3 from '../components/images/Audio Engineering _ Post-production.webp';
import imagen4 from '../components/images/W_T- Desktop banner.png';
import '../Carousel.css';

function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  
  const images = [imagen1, imagen2, imagen3, imagen4];
  const titles = ['Artes gráficas', 'Programación y tecnología', 'Música y audio', 'Servicios de IA'];
  const descriptions = ['Diseño y creatividad', 'Tú lo piensas. Un programador lo desarrolla.', 'No pierdas el ritmo. Da vida a tu sonido.', 'Agrega IA con la ayuda de expertos que la comprendan'];
  const routes = ['/products/667da8fe9fb5ed6ac8c12cc4', '/products/667daa099fb5ed6ac8c12cd6', '/products/667da8829fb5ed6ac8c12cb6', '/products/667da9839fb5ed6ac8c12ccd']; // Define tus rutas específicas aquí

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Cambia de imagen cada 5 segundos

    return () => clearInterval(interval);
  }, [activeIndex]);

  function handlePrev() {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }

  function handleNext() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function handleImageClick(index) {
    navigate(routes[index]);
  }

  return (
    <div className="carousel-container active" id="novedades">
      <section className="carousel">
        <button className="prev" onClick={handlePrev}>⟨</button>
        <div className="carousel-items" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div className="carousel-item" key={index} onClick={() => handleImageClick(index)}>
              <img src={img} alt={`Novedad ${index + 1}`} />
              <div className="carousel-caption">
                <h5>{titles[index]}</h5>
                <p>{descriptions[index]}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={handleNext}>⟩</button>
      </section>
    </div>
  );
}

export default Carousel;
