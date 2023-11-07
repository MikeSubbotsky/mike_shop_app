import React, { createContext, useState } from 'react';

export const WishlistContext = createContext();

const WishlistContextProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const addItemToWishlist = (item) => {
        setWishlistItems([...wishlistItems, item]);
    };

    const removeItemFromWishlist = (item) => {
        const newWishlistItems = wishlistItems.filter((wishlistItem) => wishlistItem.id !== item.id);
        setWishlistItems(newWishlistItems);
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