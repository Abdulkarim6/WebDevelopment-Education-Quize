import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;

    return (
        <div className='quizTopic'>
            <img src={logo} alt="" />
            <div className='quiz-info mt-4'>
                <h2 className='text-lg font-semibold'>{name}</h2>
                <h4>Quize : {total} </h4>
            </div>

            <div className='btn-quiz mt-2'>
                <Link to={`/quizTopic/${id}`}>
                    <button>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;