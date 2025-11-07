
 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
 
const API_URL = 'http://localhost:8080/inventory';
 
function ProductList() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');
 
  // Fetch the products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products or no products available.');
      }
    };
    fetchProducts();
  }, []);
 
  return (
    <div className="product-list-container">
      <h1>All Products</h1>
      {error && <p className="error-message">{error}</p>}
      {products.length === 0 ? (
        <p>No products found.</p>
      ) : (
        <ul className="product-list">
          {products.map((product) => (<li key={
product.id} className="product-item"><p>
Name: {product.name}</p>
              <p><strong>Quantity:</strong> {product.quantity}</p>
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        .product-list-container {
          padding: 20px;
        }
 
        h1 {
          text-align: center;
        }
 
        .product-list {
          list-style-type: none;
          padding: 0;
        }
 
        .product-item {
          border: 1px solid #ddd;
          padding: 15px;
          margin: 10px 0;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
 
        .error-message {
          color: red;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
 
export default ProductList;