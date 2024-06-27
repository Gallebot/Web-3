import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          throw new Error('Error fetching product details');
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
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
