import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Right Way Mechanical.</p>
                <p>
                    Call us at <a href="tel:+123456789" className="text-blue-400 underline">+720-252-0835</a>
                </p>
                <p>
                    Visit us: <a href="/contact" className="text-blue-400 underline">Contact Us</a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
