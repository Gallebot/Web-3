import React, { useState } from 'react';
import axios from 'axios';
import '../AddProductWithPreview.css';
import ProductList from './ProductList'; // Importa el componente ProductList

const AddProductWithPreview = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [message, setMessage] = useState('');

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
      console.log(response.data);
      setMessage('Producto añadido exitosamente!');
      // Limpiar los campos después de añadir el producto
      setName('');
      setDescription('');
      setPrice('');
      setCategory('');
      setImageLink('');
    } catch (error) {
      console.error('Hubo un error añadiendo el producto!', error);
      setMessage('Error añadiendo el producto');
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
      <ProductList /> {/* Mueve el componente ProductList fuera del formulario */}
    </div>
  );
};

export default AddProductWithPreview;
