import React, { useState } from 'react';
import AddToCartBtn from '../AddToCartBtn';
import CartIcon from './CartIcon';
import { action } from '@storybook/addon-actions';

const CartManager = () => {
  const [cartCount, setCartCount] = useState(0);

  
  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  
  const redirectToCheckout = () => {
    action('Redirected to checkout page')(); 
  };

  return (
    <div>
      <AddToCartBtn handleAddToCart={handleAddToCart} />
      <CartIcon cartCount={cartCount} redirectToCheckout={redirectToCheckout} />
    </div>
  );
};

export default CartManager;
