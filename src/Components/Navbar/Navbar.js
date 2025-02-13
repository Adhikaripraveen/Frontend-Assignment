import React  from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useCart} from "../../Context";

const Navbar = ({ cartCount }) => {
const {cart}=useCart();


  return (
    <nav className="navbar">
      <Link to="/">
        <h2 className="logo">Home</h2>
      </Link>

      <Link to="/cart" className="cart-link">
        <div className="cart-icon">
          <ShoppingCartIcon style={{fontSize:"2rem",color:"black"}} />
          <p className="cart-text">Cart</p>{" "}
          {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
