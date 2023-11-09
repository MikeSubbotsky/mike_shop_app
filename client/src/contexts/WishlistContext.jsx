import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addItemToWishlist = (item) => {
        if (!wishlistItems.some(wishlistItem => wishlistItem.id === item.id)) {
            setWishlistItems([...wishlistItems, item]);
        }
        toast.success(`Item added to wishlist!`, { position: "bottom-right" });
    };

    const removeItemFromWishlist = (itemId) => {
        setWishlistItems(wishlistItems.filter(wishlistItem => wishlistItem.id !== itemId));
        toast.error(`Item removed from wishlist!`, { position: "bottom-right" });
    };

    const clearWishlist = () => {
        setWishlistItems([]);
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addItemToWishlist, removeItemFromWishlist, clearWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};

export default WishlistContextProvider;
