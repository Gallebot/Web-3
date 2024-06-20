import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <h1>Tilintienda</h1>
      <nav>
        <Link to="/gorras"><button>Gorras</button></Link>
        <Link to="/productos"><button>Hombre</button></Link>
        <Link to="/productos"><button>Mujer</button></Link>
        <Link to="/productos"><button>Niños</button></Link>
        <Link to="/productos"><button>Deporte</button></Link>
      </nav>
      <div>
        <img id="carrito" className="carrito" src="/img/carrito-de-compras.png" alt="" />
        <div id="numero"></div>
      </div>
    </header>
  );
}

export default Header;
