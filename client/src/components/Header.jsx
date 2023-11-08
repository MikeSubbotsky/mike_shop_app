import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CategoriesDropdown from './CategoriesDropdown'; // Import the new component

const Header = () => {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

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
            </nav>
        </header>
    );
};

export default Header;


