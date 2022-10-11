import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quize from '../../Quize/Quize';

const Quizes = () => {
    const quizes = useLoaderData();
    // console.log(Quizes.data);
    const { name, questions } = quizes.data;
    // console.log(name, questions);

    return (
        <div>
            <h2>quize of : {name}</h2>
            {
                questions.map(ques => <Quize ques={ques} key={ques.id}></Quize>)
            }
        </div>
    );
};

export default Quizes;