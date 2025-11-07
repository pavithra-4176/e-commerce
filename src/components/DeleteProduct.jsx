import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
// API URL (change based on your backend configuration)
const API_URL = 'http://localhost:8080/inventory'; // Update with your API endpoint
 
function DeleteProduct() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 
  useEffect(() => {
    // Fetch products on initial render
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL);
        setProducts(response.data);
      } catch (error) {
        setError('Failed to fetch products.');
      }
    };
 
    fetchProducts();
  }, []);
 
  const handleDelete = async () => {
    if (!selectedProduct) {
      setError('Please select a product to delete.');
      return;
    }
 
    try {
      await axios.delete(`${API_URL}/${selectedProduct}`);
      setProducts(products.filter((product) => product.id !== selectedProduct)); // Remove deleted product from the list
      setSelectedProduct('');
      setMessage('Product successfully deleted.');
      setError('');
    } catch (error) {
      setError('Failed to delete product.');
      setMessage('');
    }
  };
 
  return (
    <>
      <div className="delete-product-container">
        <h1>Delete Product</h1>
 
        <div className="form-group">
          <label htmlFor="product">Select Product to Delete:</label>
          <select
            id="product"
            className="product-dropdown"
            value={selectedProduct || ''}
            onChange={(e) => setSelectedProduct(Number(e.target.value))}
          >
            <option value="" disabled>Select a Product</option>
            {products.map((product) => ( <option
              key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
 
        <button className="delete-button" onClick={handleDelete}>
          Delete Product
        </button>
 
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
 
      <style jsx>{`
        .delete-product-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
 
        h1 {
          text-align: center;
          color: #333;
        }
 
        .form-group {
          margin-bottom: 20px;
        }
 
        label {
          font-size: 16px;
          color: #555;
        }
 
        .product-dropdown {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
 
        .delete-button {
          padding: 10px;
          background-color: #f44336;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
 
        .delete-button:hover {
          background-color: #d32f2f;
        }
 
        .error-message, .success-message {
          color: red;
          font-size: 14px;
          text-align: center;
        }
 
        .success-message {
          color: green;
        }
      `}</style>
    </>
  );
}
 
export default DeleteProduct;
 