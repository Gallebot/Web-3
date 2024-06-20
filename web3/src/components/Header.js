import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tilinverrrr</Link>
      </h1>
      <nav>
        <Link to="/informatica"><button>Infomática</button></Link>
        <Link to="/jardineria"><button>Jardinería</button></Link>
        <Link to="/matematicas"><button>Matemáticas</button></Link>
        <Link to="/tareas"><button>Tareas</button></Link>
        <Link to="/productos"><button>Gaming</button></Link>
      </nav>
      <div>
        <img id="carrito" className="carrito" src="/img/carrito-de-compras.png" alt="" />
        <div id="numero"></div>
      </div>
    </header>
  );
}

export default Header;
