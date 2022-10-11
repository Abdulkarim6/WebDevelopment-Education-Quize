import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css'

const Topics = () => {
    const topics = useLoaderData();
    const quizTopics = topics.data;
    return (
        <div className='quizTopics'>
            {
                quizTopics.map(quizTopic => <Topic key={quizTopic.id}
                    quizTopic={quizTopic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;