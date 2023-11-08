import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        setCartItems([...cartItems, item]);
    };

    const removeItemFromCart = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

