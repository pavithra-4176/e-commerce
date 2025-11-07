import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inventory from './components/Inventory';
import Order from './components/Order';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import GetAllProducts from './components/GetAllProducts';
import PlaceOrder from './components/PlaceOrder';
import DeleteOrder from './components/DeleteOrder';
import CheckProductAvailability from './components/CheckProductAvailability';
import DecrementProductQuantity from './components/DecrementProductQuantity';
 

function App() {
  
  return (
    <>
     
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
        <Route exact path="/" render={() => <h1>Welcome to the E-commerce Application</h1>} />
        <Route path="/inventory" element={<Inventory />} />
          <Route path="/inventory/add" element={<AddProduct />} />
          <Route path="/inventory/delete" element={<DeleteProduct />} />
          <Route path="/Products" element={<GetAllProducts />} />
          <Route path="/decrement-product" element={<DecrementProductQuantity />} />
          
  <Route path="check-availability" element={<CheckProductAvailability />} />

          <Route path="/order" element={<Order />} />
          <Route path="/orders/place" element={<PlaceOrder />} />
          <Route path="/orders/delete" element={<DeleteOrder />} />
        </Routes>
      </div>
    </Router>
  
    </>
  );
}

export default App
