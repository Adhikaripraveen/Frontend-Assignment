import "./App.css";

import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
     <Toaster
        position="top-center"
        toastOptions={{
          style: {
            fontSize: '1.5rem',  // Increase font size
            fontFamily: 'Arial, sans-serif',
          },
        }}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    
    </>
  );
}

export default App;
