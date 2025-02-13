import React, { useEffect,useState } from "react";
import { useCart } from "../../Context"; 
import toast from "react-hot-toast";
import "./Home.css";
import axios from "axios";

const Home = () => {
  const { addToCart } = useCart(); 
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    const fetchProduct=async()=>{
      const {data}=await axios.get('https://fakestoreapi.com/products');
      setProducts(data)
    }
  
    fetchProduct();
  },[])
  return (
    <div className="home-container">
      {products?.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.title}</h3>
          <p className="product-price">{"\u20B9"}{product.price}</p>
          <p className="product-stock">Stocks:<span>{product.rating.count}</span>units has left</p>
          <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
