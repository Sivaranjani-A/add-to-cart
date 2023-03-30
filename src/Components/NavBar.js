import React from "react";
import "./Cart.css";

const NavBar = ({ cartCount }) => {
  return (
    <div className="navContainer">
      <h2>Shopify</h2>
      <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li>About Us</li>
      </ul>
      {/* <div className="cart">
      <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" className="cart_img"/><h4>Cart</h4><span className="cartNo">{cartCount}</span>
      </div> */}
      <button className="btn1">   <img src="https://cdn-icons-png.flaticon.com/512/34/34627.png" className="cart_img"/><h4>Cart</h4><span className="cartNo">{cartCount}</span> </button>
    </div>
  );
};
export default NavBar;