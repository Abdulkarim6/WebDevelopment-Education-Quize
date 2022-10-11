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
            <h2>quize name : {name}</h2>
            {
                questions.map(ques => <Quize
                    key={ques.id}
                    ques={ques}
                ></Quize>)
            }
        </div>
    );
};

export default Quizes;