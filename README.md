This project is a simple shopping cart application built using React and Context API. It allows users to:

✅ Fetch products from FakeStoreAPI.
✅ Add items to the cart.
✅ Increase or decrease item quantity.
✅ Remove items from the cart.
✅ Show updated total price dynamically.

🚀 Features
Product Listing: Fetches products from FakeStoreAPI.
Add to Cart: Users can add products to the cart.
Increase/Decrease Quantity: Users can adjust item quantities.
Remove Items: Users can remove products from the cart.
Stock Management: Prevents adding more than available stock.
Cart Badge: Displays the number of items in the cart.
🛠️ Tech Stack
React
Context API (for state management)
React Router (for navigation)
FakeStoreAPI (for fetching products)
Material UI Icons (for styling)
📦 Installation
1️⃣ Clone the repository

bash
Copy
Edit
git clone https://github.com/your-repo/cart-journey.git
cd cart-journey
2️⃣ Install dependencies

bash
Copy
Edit
npm install
3️⃣ Start the development server

bash
Copy
Edit
npm start
📜 API Integration
This app fetches products from FakeStoreAPI:

Endpoint:

bash
Copy
Edit
https://fakestoreapi.com/products
Fetching Products in Home Component:

js
Copy
Edit
useEffect(() => {
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };
  fetchProducts();
}, []);
📌 Folder Structure
php
Copy
Edit
cart-journey/
│── src/
│   ├── Components/
│   │   ├── Home/
│   │   │   ├── Home.js
│   │   │   ├── Home.css
│   │   ├── Cart/
│   │   │   ├── Cart.js
│   │   │   ├── Cart.css
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   ├── Navbar.css
│   ├── Context.js  # Global State for Cart
│   ├── App.js  # Routes and Layout
│   ├── index.js  # Entry Point
│── public/
│── package.json
│── README.md
🔥 Usage
Browse products on the home page.
Click "Add to Cart" to add an item.
Go to the Cart to see added products.
Increase or decrease quantity using + / - buttons.
Click "Remove" to delete an item from the cart.
Total price updates dynamically as quantities change.
🎯 Future Enhancements
✅ Add user authentication.
✅ Store cart data in local storage.
✅ Implement checkout functionality.
🤝 Contributing
Feel free to fork this repository, create a new branch, and submit a pull request. Contributions are welcome! 🚀

🚀




















