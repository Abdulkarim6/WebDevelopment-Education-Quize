import React from 'react';
import './topic.css'

const Topic = ({ quizTopic }) => {
    const { logo, name, total } = quizTopic;
    console.log(name, total, quizTopic);
    return (
        <div className='quizTopic'>
            <img src={logo} alt="" />
            <h2>{name}</h2>
            <h4>total : {total} </h4>
        </div>
    );
};

export default Topic;