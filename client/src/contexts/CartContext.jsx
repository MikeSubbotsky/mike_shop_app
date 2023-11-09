import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const CartContext = createContext();


const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (item) => {
        const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            setCartItems(cartItems.map(cartItem => 
                cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
            ));
            toast.success(`${item.name} quantity increased!`, { position: "bottom-right" });
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]);
            toast.success(`${item.name} added to cart!`, { position: "bottom-right" });
        }
    };

    const removeItemFromCart = (item) => {
        const newCartItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
        setCartItems(newCartItems);
        toast.error(`${item.name} removed from the cart!`, { position: "bottom-right" });
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

    const incrementQuantity = (itemId) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
        toast.success(`Item quantity increased!`, { position: "bottom-right" });
    };

    const decrementQuantity = (itemId) => {
        setCartItems(cartItems.map(item => 
            item.id === itemId ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
        ).filter(item => item.quantity > 0));
        toast.error(`Item removed from the cart!`, { position: "bottom-right" });
    };

    return (
        <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, incrementQuantity, decrementQuantity, clearCart, cartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;

