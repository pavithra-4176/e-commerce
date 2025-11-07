import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const OrderApp = () => {
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState({
    productId: '',
    productName: '',
    quantity: '',
    status: '',
  });
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');
 
const apiBase = 'http://localhost:8081/orders'; // Update this with your backend API base URL
 
  useEffect(() => {
    fetchAllOrders();
  }, []);
 
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(apiBase);
      setOrders(response.data);
    } catch (error) {
      console.error(error);
    }
  };
 
  const fetchOrderById = async () => {
    try {
      const response = await axios.get(`${apiBase}/${orderId}`);
      setMessage(`Order Found: ${JSON.stringify(response.data)}`);
    } catch (error) {
      setMessage('Order not found');
    }
  };
 
  const handlePlaceOrder = async () => {
    try {
const response = await axios.post(apiBase, order);
      setOrders([...orders, response.data]);
      setMessage('Order placed successfully');
      setOrder({ productId: '', productName: '', quantity: '', status: '' });
    } catch (error) {
      setMessage('Error placing order');
    }
  };
 
  const handleDeleteOrder = async (id) => {
    try {
      await axios.delete(`${apiBase}/${id}`);
setOrders(orders.filter((ord) => ord.id !== id));
      setMessage('Order deleted successfully');
    } catch (error) {
      setMessage('Error deleting order');
    }
  };
 
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Order Management</h1>
 
      {/* Place Order */}
      <div style={styles.section}>
        <h2>Place Order</h2>
        <input
          type="text"
          placeholder="Product ID"
          value={order.productId}
          onChange={(e) => setOrder({ ...order, productId: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Product Name"
          value={order.productName}
          onChange={(e) => setOrder({ ...order, productName: e.target.value })}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={order.quantity}
          onChange={(e) => setOrder({ ...order, quantity: e.target.value })}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Status"
          value={order.status}
          onChange={(e) => setOrder({ ...order, status: e.target.value })}
          style={styles.input}
        />
        <button onClick={handlePlaceOrder} style={styles.button}>
          Place Order
        </button>
      </div>
 
      {/* Get Order by ID */}
      <div style={styles.section}>
        <h2>Get Order by ID</h2>
        <input
          type="text"
          placeholder="Order ID"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          style={styles.input}
        />
        <button onClick={fetchOrderById} style={styles.button}>
          Fetch Order
        </button>
        <p>{message}</p>
      </div>
 
      {/* Display All Orders */}
      <div style={styles.section}>
        <h2>All Orders</h2>
        <ul style={styles.list}>
          {orders.map((ord) => (
<li key={ord.id} style={styles.listItem}>
              <span>
ID: {ord.id}, Name: {ord.productName}, Quantity: {ord.quantity}, Status: {ord.status}
              </span>
              <button
onClick={() => handleDeleteOrder(ord.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
 
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    
      maxwidth: '600px',
      margin: '0 auto',
     
      backgroundcolor:'rgb(121, 167, 209)',
      borderradius: '8px',
      boxshadow: '0 4px 8px rgba(148, 104, 122, 0.1)',
    

  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  section: {
    margin: '30px 0',
    padding: '30px',
    backgroundcolor: '#f9f9f9',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  input: {
    display: 'block',
    margin: '10px 0',
    padding: '10px',
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 20px',
    color: '#fff',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    marginLeft: '10px',
    padding: '5px 10px',
    color: '#fff',
    backgroundColor: '#FF5733',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderBottom: '1px solid #ccc',
  },
};
 
export default OrderApp;


