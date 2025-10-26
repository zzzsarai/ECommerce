import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import Navigation from "./components/Navigation";
import "./styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("Added to cart!");

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  const addToCart = (donut) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === donut.id);
      if (existingItem) {
        showToast(`${donut.name} quantity increased!`);
        return prevCart.map((item) =>
          item.id === donut.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      showToast(`${donut.name} added to cart!`);
      return [...prevCart, { ...donut, quantity: 1 }];
    });
  };

  const increaseQty = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navigation cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart} />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} clearCart={() => setCart([])} />}
        />    

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              increaseQty={increaseQty}
              decreaseQty={decreaseQty}
              removeItem={removeItem}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
