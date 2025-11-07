import React, { useState } from 'react';
import axios from 'axios';
 
const API_URL = 'http://localhost:8080/inventory';
 
function DecrementProduct() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 
  const handleDecrement = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');
 
    try {
const response = await axios.post(`${API_URL}/${productId}/decrement`, null, {
        params: { quantity },
      });
      setMessage(response.data);
    } catch (err) {
      setError(
        err.response?.data || 'Failed to update product quantity. Please try again.'
      );
    }
  };
 
  return (
    <div className="decrement-product-container">
      <h1>Decrement Product Quantity</h1>
      <form onSubmit={handleDecrement} className="decrement-product-form">
        <div className="form-group">
          <label htmlFor="productId">Product ID:</label>
          <input
            type="text"
            id="productId"
            value={productId}
            onChange={(e) => setProductId(e.target.value)}
            placeholder="Enter Product ID"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="quantity">Decrement Quantity:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Enter Quantity"
            required
          />
        </div>
        <button type="submit" className="decrement-button">
          Decrement
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
      <style jsx>{`
        .decrement-product-container {
          max-width: 400px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
 
        h1 {
          text-align: center;
        }
 
        .form-group {
          margin-bottom: 15px;
        }
 
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }
 
        input {
          width: 100%;
          padding: 8px;
          margin-top: 2px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
 
        .decrement-button {
          width: 100%;
          padding: 10px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
 
        .decrement-button:hover {
          background-color: #45a049;
        }
 
        .success-message {
          color: green;
          margin-top: 10px;
          text-align: center;
        }
 
        .error-message {
          color: red;
          margin-top: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
 
export default DecrementProduct;


