import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../../Quize/Quize';
import './Quizes.css'

const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(Quizes.data);
    const { name, questions } = quizes.data;
    // console.log(name, questions);

    return (
        <div className='quizes-container'>
            <div><h2>quize of : {name}</h2></div>
            <div>
                {
                    questions.map(ques => <Quize ques={ques} key={ques.id}></Quize>)
                }
            </div>
        </div>
    );
};

export default Quizes;