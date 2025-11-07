import React, { useState } from 'react';
import axios from 'axios';
 
const DeleteOrder = () => {
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
 
  const handleDelete = async () => {
    try {
await axios.delete(`http://localhost:8081/orders/${orderId}`);
      setMessage('Order deleted successfully.');
      setOrderId('');
    } catch (error) {
      setMessage('Error deleting order. Please check the ID.');
    }
  };
 
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Delete Order</h1>
      <input
        type="text"
        placeholder="Enter Order ID"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleDelete} style={styles.button}>
        Delete Order
      </button>
      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};
 
const styles = {
  container: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    width: '80%',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#FF5733',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  message: {
    marginTop: '20px',
    color: 'green',
  },
};
 
export default DeleteOrder;