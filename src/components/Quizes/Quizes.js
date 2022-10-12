import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../../Quize/Quize';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData();
    const { name, questions } = quizes.data;

    return (
        <div className='quizes-container'>
            <div className='quizes-name'>
                <h2>Quize of {name}</h2>
            </div>
            <div>
                {
                    questions.map(ques => <Quize ques={ques} key={ques.id}></Quize>)
                }
            </div>
        </div>
    );
};

export default Quizes;