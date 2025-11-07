import React from 'react';
import { NavLink } from 'react-router-dom';
 
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <NavLink to="/inventory" className="nav-link" activeClassName="active-link">
          E-COMMERCE
        </NavLink>
 
        <div className="dropdown">
          <span className="dropdown-title">Inventory Methods</span>
          <div className="dropdown-content">
            <NavLink to="/inventory/add" className="nav-link" activeClassName="active-link">
              Add
            </NavLink>
            <NavLink to="/Products" className="nav-link" activeClassName="active-link">
              GetAllProducts
            </NavLink>
            <NavLink to="/inventory/delete" className="nav-link" activeClassName="active-link">
              Delete
            </NavLink>
            <NavLink to="/decrement-product" className="nav-link">
            Decrement Product
          </NavLink>
            <NavLink to="/check-availability" className="nav-link" activeClassName="active-link">Check Availability</NavLink>
          </div>
        </div>
        <div className="dropdown">
          <span className="dropdown-title">order Methods</span>
          <div className="dropdown-content">
        <NavLink to="/order" className="nav-link" activeClassName="active-link">
          Orders
        </NavLink>
 
        <NavLink to="/orders/place" className="nav-link" activeClassName="active-link">
          Place Order
        </NavLink>
 
        <NavLink to="/orders/delete" className="nav-link" activeClassName="active-link">
          Delete Order
        </NavLink>
        </div>
        </div>
      </nav>
 
      <style jsx>{`
        .navbar {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: #333;
          padding: 10px;
        }
 
        .nav-link {
          color: white;
          text-decoration: none;
          font-size: 16px;
          padding: 10px;
          transition: background-color 0.3s ease;
        }
 
        .nav-link:hover {
          background-color: #555;
          border-radius: 4px;
        }
 
        .active-link {
          background-color: #4CAF50;
          border-radius: 4px;
        }
 
        .dropdown {
          position: relative;
          display: inline-block;
        }
 
        .dropdown-title {
          color: white;
          font-size: 16px;
          padding: 10px;
          cursor: pointer;
        }
 
        .dropdown-content {
          display: none;
          position: absolute;
          background-color: #333;
          min-width: 160px;
          z-index: 1;
        }
 
        .dropdown:hover .dropdown-content {
          display: block;
        }
 
        .dropdown-content .nav-link {
          display: block;
          padding: 8px 12px;
        }
 
        .dropdown-content .nav-link:hover {
          background-color: #555;
        }
      `}</style>
    </>
  );
}
 
export default Navbar;
 