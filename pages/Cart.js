import React from 'react';
import Catalog from '../components/Catalog';
import Footer from '../components/Footer';
import '../styles/Cart.css'; // import the CSS

function Cart() {
  return (
    <div className="cart-page">
      <main className="cart-container">
        <h1 className="cart-title">Your Cart</h1>
        <p>Your cart is currently empty.</p>
      </main>

      <Footer />
    </div>
  );
}

export default Cart;
