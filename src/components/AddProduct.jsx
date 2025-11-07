import React, { useState } from 'react';
import axios from 'axios';
 
// The API URL pointing to the Spring Boot endpoint
const API_URL = 'http://localhost:8080/inventory'; // Update with your actual API endpoint
 
function AddOrUpdateProduct() {
  const [newProduct, setNewProduct] = useState({
    id: '', // ID can be left empty when creating a new product
    name: '',
    quantity: ''
  });
  const [error, setError] = useState('');
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };
 
  const createOrUpdateProduct = async () => {
    try {
      // Sending a POST request to the backend API
const response = await axios.post(API_URL, newProduct);
      console.log('Product saved:', response.data);
      setNewProduct({ id: '', name: '', quantity: '' }); // Reset form after submission
      setError(''); // Clear error message if the request is successful
    } catch (error) {
      setError('Failed to create or update product.');
    }
  };
 
  return (
    <>
      <div className="add-product-container">
        <h1>Create or Update Product</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            createOrUpdateProduct();
          }}
          className="add-product-form"
        >
          <div className="form-group">
            <label htmlFor="name">Product Name:</label>
            <input
              type="text"
              id="name"
              name="name"
value={newProduct.name}
              onChange={handleChange}
              placeholder="Enter product name"
              required
            />
          </div>
 
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              placeholder="Enter product quantity"
              required
            />
          </div>
 
          <button type="submit" className="submit-btn">
            Submit
          </button>
 
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
 
      <style jsx>{`
        .add-product-container {
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
 
        .add-product-form {
          display: flex;
          flex-direction: column;
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
 
        .submit-btn {
          padding: 10px;
          background-color: #4CAF50;
          color: white;
          font-size: 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
 
        .submit-btn:hover {
          background-color: #45a049;
        }
 
        .error-message {
          color: red;
          font-size: 14px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
 
export default AddOrUpdateProduct;
