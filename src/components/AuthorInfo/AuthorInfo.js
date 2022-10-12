import React from 'react';
import './Author.css'
import authorLogo from '../../author.jpg'

const AuthorInfo = () => {
    return (
        <div  className='header-container'>
            <header className='header-info'>
                <div className='author-img'>
                    <img src={authorLogo} alt="" />
                </div>
                <div className='author-inf'>
                    <h2 className='text-2xl font-semibold mt-4'>Abdul Karim</h2>
                    <p>Junior Web developer</p>
                </div>
            </header>
        </div>
    );
};

export default AuthorInfo;