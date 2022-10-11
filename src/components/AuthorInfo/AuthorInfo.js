import React from 'react';
import './Author.css'
import authorLogo from '../../author.jpg'

const AuthorInfo = () => {
    return (
        <div>
            <header className='header-container'>
                <div className='author-img'>
                    <img src={authorLogo} alt="" />
                </div>
                <div className='author-inf'>
                    <h2>Abdul Karim</h2>
                    <p>Junior Web developer</p>
                </div>
            </header>
        </div>
    );
};

export default AuthorInfo;