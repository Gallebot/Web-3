import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error loading product details', error);
      }
    };

    fetchProductDetails();
  }, [id]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error loading products', error);
      }
    };

    fetchProducts();
  }, []);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
  <img src={product.image} alt={product.name} className="product-details-image" />
  <div className="product-details-info">
    <h2>{product.name}</h2>
    <p><strong>Description:</strong> {product.description}</p>
    <p><strong>Precio:</strong> ${product.price}</p>
    <p><strong>Categoria:</strong> {product.category}</p>
  </div>
</div>
  );
}

export default ProductDetails;
