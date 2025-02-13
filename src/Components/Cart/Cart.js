import React from "react";
import { useCart } from "../../Context"; // Import Cart Context
import "./Cart.css"; 

const Cart = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart();
  const totalPrice =()=> cart.reduce((total, item) => total + item.price * item.quantity, 0);
 
  return (
    <div className="cart-container">
     
      {cart.length === 0 ? (
        <p style={{fontSize:"2.5rem",color:"black"}}>Your cart is empty.</p>
      ) : (        cart.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} className="cart-image" />
            <div>
              <h3>{item.name}</h3>
            <div className="price_quantity">
			<p>Price: {"\u20B9"}{item.price}</p>
			<p>Quantity: {item.quantity}</p>
			</div>  
			<p style={{textAlign:"left",fontSize:"1.5rem",color:"black"}}>Total:{"\u20B9"}{totalPrice().toFixed(2)}</p>
              <button className="quantity-btn" onClick={() => decreaseQuantity(item.id)}>-</button>
              <button className="quantity-btn" onClick={() => increaseQuantity(item.id)}>+</button>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
