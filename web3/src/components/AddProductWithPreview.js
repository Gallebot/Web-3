import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../AddProductWithPreview.css';

const AddProductWithPreview = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [message, setMessage] = useState('');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      name,
      description,
      price,
      category,
      image: imageLink
    };

    try {
      const response = await axios.post('http://localhost:5000/products', newProduct);
      setMessage('Producto añadido exitosamente!');
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageLink('');
      fetchProducts();
    } catch (error) {
      console.error('Hubo un error añadiendo el producto!', error);
      setMessage('Error añadiendo el producto');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`);
      setMessage('Producto eliminado exitosamente!');
      fetchProducts();
    } catch (error) {
      console.error('Error eliminando el producto:', error);
      setMessage('Error eliminando el producto');
    }
  };

  return (
    <div className="add-product-container">
      <div className="add-product-form">
        <h2>Añadir Producto</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Nombre del producto" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
          <input 
            type="text" 
            placeholder="Descripción del producto" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required 
          />
          <input 
            type="number" 
            placeholder="Valor del producto" 
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required 
          />
          <input 
            type="text" 
            placeholder="Categoría del producto" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required 
          />
          <input 
            type="text" 
            placeholder="Link de la imagen del producto" 
            value={imageLink}
            onChange={(e) => setImageLink(e.target.value)}
            required 
          />
          <button type="submit">Añadir</button>
        </form>
      </div>
      <div className="products-list">
        {products.map(product => (
          <div key={product._id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category}</p>
            <button onClick={() => handleDelete(product._id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddProductWithPreview;
