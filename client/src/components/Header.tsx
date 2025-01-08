import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">
                    <Link to="/">Right Way Mechanical</Link>
                </h1>
                <nav className="flex space-x-4">
                    <Link to="/" className="hover:underline">
                        Home
                    </Link>
                    <Link to="/services" className="hover:underline">
                        Services
                    </Link>
                    <Link to="/about" className="hover:underline">
                        About
                    </Link>
                    <Link to="/contact" className="hover:underline">
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
