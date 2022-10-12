import React from 'react';
import './Author.css'
import authorLogo from '../../author.jpg'

const AuthorInfo = () => {
    return (
        <div className='header-container'>
            <header className='header-info'>
                <div className='author-img'>
                    <img src={authorLogo} alt="" />
                </div>
                <div className='author-inf p-1'>
                    <h2 className='text-2xl font-semibold mt-4 mb-6'>Quize for learning</h2>
                    <p>Brain-bending general knowledge quizzes will test you on your programming</p>
                </div>
            </header>
        </div>
    );
};

export default AuthorInfo;