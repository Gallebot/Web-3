import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../productos.css';

function Productos() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:5000/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleProductClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="product-section">
      <h2>Productos</h2>
      <div className="product-container">
        {products.map((product) => (
          <div className="product-card" key={product._id} onClick={() => handleProductClick(product._id)}>
            <img src={product.image} alt={product.name} />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button>COMPRAR</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Productos;
