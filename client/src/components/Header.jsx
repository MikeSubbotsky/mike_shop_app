import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-gray-800 text-white">
            <nav className="container mx-auto flex justify-between items-center py-4">
                <Link to="/" className="text-2xl font-bold">
                    My Website
                </Link>
                <ul className="flex">
                    <li className="ml-6">
                        <Link to="/" className="hover:text-gray-400">
                            Home
                        </Link>
                    </li>
                    <li className="ml-6">
                        <Link to="/categories" className="hover:text-gray-400">
                            Categories
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
