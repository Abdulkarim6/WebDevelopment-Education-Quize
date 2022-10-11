import React from 'react';
import './topic.css';
import { Link } from 'react-router-dom';

const Topic = ({ quizTopic }) => {
    const { id, logo, name, total } = quizTopic;
    // console.log(name, total, quizTopic);

    return (
        <div className='quizTopic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <div className='btn-quiz'>
                <h4>total : {total} </h4>
                <Link to={`/quizTopic/${id}`}>
                    <button>Start Quiz</button>
                </Link>
            </div>
        </div>
    );
};

export default Topic;