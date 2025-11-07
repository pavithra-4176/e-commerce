import React from 'react';
 
function Inventory() {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f5f5f5',
      backgroundImage: 'url("https://img.freepik.com/free-photo/cyber-monday-shopping-sales_23-2148688560.jpg")',
       backgroundSize: 'cover',
      backgroundPosition: 'center', // Replace with your image URL
      fontFamily: 'Arial, sans-serif',
      color: '#333',
    },
    header: {
      fontSize: '2.5rem',
      margin: '0.5rem 0',
      color: '#4caf50',
    },
    paragraph: {
      fontSize: '1.2rem',
      margin: '0.5rem 0',
    },
    button: {
      marginTop: '1rem',
      padding: '0.5rem 1rem',
      fontSize: '1rem',
      color: '#fff',
      backgroundColor: '#4caf50',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    buttonHover: {
      backgroundColor: '#45a049',
    },
  };
 
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>WELCOME TO THE E-COMMERCE APPLICATION</h1>
      <p style={styles.paragraph}>Manage your inventory  and orders here.</p>
      <button
        style={styles.button}
onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
      >
        Get Started
      </button>
    </div>
  );
}
 
export default Inventory;


