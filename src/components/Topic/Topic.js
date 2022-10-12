import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
    // console.log(name, total, quizTopic);

    return (
        <div className='quizTopic'>
            <img src={logo} alt="" />
            <div className='quiz-info'>
                <h2>{name}</h2>
                <h4>Quize : {total} </h4>
            </div>
            
            <div className='btn-quiz'>
                <Link to={`/quizTopic/${id}`}>
                    <button>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;