import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-800 py-6 mt-auto"> {/* Increased padding from py-4 to py-6 */}
            <div className="container mx-auto">
                <p className="text-center text-gray-400 text-sm">
                    &copy; 2023 Croonus Project. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

export default Footer;


