import React from 'react';
import './topic.css'

const Topic = ({ quizTopic }) => {
    const { name, total } = quizTopic;
    // console.log(name, total);
    return (
        <div className='quizTopic'>
            <img src="../../images/css.jpg" alt="" />
            <h2>{name}</h2>
            <h4>total : {total} </h4>
        </div>
    );
};

export default Topic;