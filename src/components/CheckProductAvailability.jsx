import React, { useState } from 'react';
import axios from 'axios';
 
// API URL (update according to your backend configuration)
const API_URL = 'http://localhost:8080/inventory'; // Update with your actual API endpoint
 
function CheckProductAvailability() {
  const [productId, setProductId] = useState('');
  const [quantity, setQuantity] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
 
  const handleCheckAvailability = async () => {
    if (!productId || !quantity) {
      setError('Please enter both product ID and requested quantity.');
      setMessage('');
      return;
    }
 
    try {
      const response = await axios.get(`${API_URL}/${productId}/availability`, {
        params: { requestedQuantity: quantity },
      });
      setMessage(response.data); // Success message from the backend
      setError('');
    } catch (err) {
      setError(err.response ? err.response.data : 'Failed to check product availability.');
      setMessage('');
    }
  };
 
  return (
    <div className="check-availability-container">
      <h1>Check Product Availability</h1>
 
      <div className="form-group">
        <label htmlFor="productId">Product ID:</label>
        <input
          type="number"
          id="productId"
          value={productId}
          onChange={(e) => setProductId(e.target.value)}
          placeholder="Enter Product ID"
          required
        />
      </div>
 
      <div className="form-group">
        <label htmlFor="quantity">Requested Quantity:</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter Quantity"
          required
        />
      </div>
 
      <button className="check-button" onClick={handleCheckAvailability}>
        Check Availability
      </button>
 
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
 
      <style jsx>{`
        .check-availability-container {
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
 
        input {
          width: 100%;
          padding: 10px;
          margin-top: 8px;
          font-size: 14px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
 
        .check-button {
          padding: 10px;
          background-color: #4caf50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
 
        .check-button:hover {
          background-color: #45a049;
        }
 
        .success-message, .error-message {
          color: red;
          font-size: 14px;
          text-align: center;
        }
 
        .success-message {
          color: green;
        }
 
        .error-message {
          color: red;
        }
      `}</style>
    </div>
  );
}
 
export default CheckProductAvailability;