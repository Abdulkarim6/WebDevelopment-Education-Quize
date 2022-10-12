import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => {
    return (
        <nav>
            <div className='nav-container'>
                <div className='logo'>
                    <h2>Education Quiz</h2>
                </div>
                <div className='menu'>
                    <Link to={'/'}>Topics</Link>
                    <Link to={'/Statics'}>Statics</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/blog'}>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;