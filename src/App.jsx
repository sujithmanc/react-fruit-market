


import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartModal from "./components/CartModal";

export default function App() {
  const [cart, setCart] = useState([]); // [{name, price, quantity}]
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const found = prev.find((item) => item.name === product.title);
      if (found) {
        return prev.map((item) =>
          item.name === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [
          ...prev,
          { name: product.title, price: product.price, quantity: 1, image: product.image },
        ];
      }
    });
  };

  const clearCart = () => setCart([]);
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const orderNow = () => {
    setCart([]);
    setIsCartOpen(false);
    // Optionally show a confirmation
  };


  const incrementCartItem = (name) => {
    setCart((prev) =>
      prev.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementCartItem = (name) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.name === name ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <Navbar onCartClick={openCart} onClearCart={clearCart} cartCount={cartCount} />
      <ProductList onAddToCart={addToCart} />
      <CartModal
        cart={cart}
        isOpen={isCartOpen}
        onClose={closeCart}
        onOrderNow={orderNow}
        onClearCart={clearCart}
        onIncrement={incrementCartItem}
        onDecrement={decrementCartItem}
      />
    </>
  );
}
