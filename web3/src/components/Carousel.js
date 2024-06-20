import React, { useState } from 'react';
import imagen1 from '../components/images/imagen1.png';
import imagen2 from '../components/images/Rose.jpg';
import imagen3 from '../components/images/random.jpg';
import imagen4 from '../components/images/chicharo.jpg';
function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [imagen1, imagen2, imagen3,imagen4];
  const descriptions = ['Nuevo uniforme', 'Compra ya xfa','que calor hace vdd','hermano, es el chicharito'];

  function handlePrev() {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  }

  function handleNext() {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  return (
    <div className="carousel-container active" id="novedades">
      <section className="carousel">
        <button className="prev" onClick={handlePrev}>⟨</button>
        <div className="carousel-items" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {images.map((img, index) => (
            <div className="category" key={index}>
              <img src={img} alt={`Novedad ${index + 1}`}/>
              <span>{descriptions[index]}</span>
            </div>
          ))}
        </div>
        <button className="next" onClick={handleNext}>⟩</button>
      </section>
    </div>
  );
}

export default Carousel;
