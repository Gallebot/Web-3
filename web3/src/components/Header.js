import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header id="header">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Tilinverrrr</Link>
      </h1>
      <nav>
        <Link to="/login"><button>Pantalla login</button></Link>
        <Link to="/register"><button>Pantalla registro</button></Link>
        <Link to="/add-product"><button>Añadir Producto</button></Link>
        <Link to="/update-product"><button>Actualizar Productos</button></Link>
        <Link to="/productos"><button>Todos los productos</button></Link>
        <Link to="/user-management"><button>Gestion de usuarios</button></Link>
      </nav>
      <div>
        <img id="carrito" className="carrito" src="/img/carrito-de-compras.png" alt="" />
        <div id="numero"></div>
      </div>
    </header>
  );
}

export default Header;
