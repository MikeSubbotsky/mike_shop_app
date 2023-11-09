import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { WishlistContext } from '../contexts/WishlistContext';
import CategoriesDropdown from './CategoriesDropdown';
import CartSidebar from './CartSidebar'; // Make sure you have this component created
import WishlistSidebar from './WishlistSidebar'; // Make sure you have this component created
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const [isCartSidebarVisible, setIsCartSidebarVisible] = useState(false);
    const [isWishlistSidebarVisible, setIsWishlistSidebarVisible] = useState(false);

    const { cartItems } = useContext(CartContext);
    const { wishlistItems } = useContext(WishlistContext);

    const toggleCartSidebar = () => {
        setIsCartSidebarVisible(!isCartSidebarVisible);
    };

    const toggleWishlistSidebar = () => {
        setIsWishlistSidebarVisible(!isWishlistSidebarVisible);
    };

    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <ul className="flex">
                    <li className="ml-6">
                        <Link to="/" className="hover:text-gray-400">
                            Home
                        </Link>
                    </li>
                    <li className="ml-6 relative">
                        <div className='pb-2'
                            onMouseEnter={() => setIsDropdownVisible(true)}
                            onMouseLeave={() => setIsDropdownVisible(false)}
                        >
                            <Link to="/categories" className="hover:text-gray-400">
                                Categories
                            </Link>
                            {isDropdownVisible && <CategoriesDropdown />}
                        </div>
                    </li>
                </ul>
                <div>
                    <button onClick={toggleCartSidebar} className="relative mx-2">
                        <FontAwesomeIcon icon={faShoppingCart} className="text-yellow-500 text-2xl hover:text-yellow-400 transition duration-300" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-block w-4 h-4 text-xs bg-red-600 text-white rounded-full text-center leading-4">
                                {cartItems.length}
                            </span>
                        )}
                    </button>
                    <button onClick={toggleWishlistSidebar} className="relative mx-2">
                        <FontAwesomeIcon icon={faHeart} className="text-pink-500 text-2xl hover:text-pink-400 transition duration-300" />
                        {wishlistItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 inline-block w-4 h-4 text-xs bg-red-600 text-white rounded-full text-center leading-4">
                                {wishlistItems.length}
                            </span>
                        )}
                    </button>
                </div>
            </nav>
            {isCartSidebarVisible && <CartSidebar onClose={toggleCartSidebar}/>}
            {isWishlistSidebarVisible && <WishlistSidebar onClose={toggleWishlistSidebar}/>}
        </header>
    );
};

export default Header;



