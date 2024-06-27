import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css'; // Asegúrate de importar el CSS

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header id="header">
      <h1>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>SkillMarket</Link>
      </h1>
      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <Link to="/login"><button>Pantalla login</button></Link>
        <Link to="/register"><button>Pantalla registro</button></Link>
        <Link to="/add-product"><button>Añadir Producto</button></Link>
        <Link to="/update-product"><button>Actualizar Productos</button></Link>
        <Link to="/productos"><button>Todos los productos</button></Link>
        <Link to="/user-management"><button>Gestion de usuarios</button></Link>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
    </header>
  );
}

export default Header;
