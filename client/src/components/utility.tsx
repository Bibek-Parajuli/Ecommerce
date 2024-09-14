import React from 'react';
import './css/utility.css'
import { Link } from 'react-router-dom';


// card component of page


interface ProductCardProps {
    image: string;
    title: string;
    description: string;
    price: number;
    onAddToCart: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ image, title, description, price, onAddToCart }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} height={400} width={400} className="product-image" />
            <div className="product-info">
                <h2 className="product-title">{title}</h2>
                <p className="product-description">{description}</p>
                <div className="product-price">${price.toFixed(2)}</div>
                <button className="add-to-cart-button" onClick={onAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};




// src/components/Navbar.tsx

export const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">MyShop</div>
            <ul className="navbar-menu">
                <li className="navbar-item"><Link className='Links'   to="/">Home</Link></li>
                <li className="navbar-item"><Link className='Links'to="/products">Products</Link></li>
                <li className="navbar-item"><Link className='Links'to="/login">Login</Link></li>
                <li className="navbar-item"><Link className='Links'to="/signup">Sign Up</Link></li>
                <li className="navbar-item"><Link className='Links'to="/contact">Contact</Link></li>
                <li className="navbar-item"><Link className='Links'to="/about">About</Link></li>
            </ul>
            <div className="navbar-cart">
                <a href="#cart">Cart</a>
            </div>
        </nav>
    );
};

// src/components/Header.tsx




export const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>Welcome to MyShop</h1>
                <p>Your one-stop shop for all your needs</p>
            </div>
        </header>
    );
};

// src/components/Footer.tsx


export const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 MyShop. All rights reserved.</p>
                <ul className="footer-links">
                    <li><a href="#privacy">Privacy Policy</a></li>
                    <li><a href="#terms">Terms of Service</a></li>
                </ul>
            </div>
        </footer>
    );
};



