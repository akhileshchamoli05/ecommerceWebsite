import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { About } from "./pages/about";
import { Cart } from "./pages/cart/cart";
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop-context";
import ProductPage from './ProductPage';
import ProductsPage from './ProductsPage';

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
