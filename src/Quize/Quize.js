import React from 'react';
import './Quize.css';
import toast, { Toaster } from 'react-hot-toast';

const Quize = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    // console.log(ques, question, options);
    const hendalCheckQuize = (option) => {
        if (correctAnswer === option) {
            toast.success('Answer Correct')
        }
        else {
            toast.error('Answer false')
        }
    }
    return (
        <div className='Quize'>
            <h4>Quiz :{question.slice(3, -4)} </h4>
            <div className='quiz-container'>
                {
                    options.map((option, index) =>
                        <button onClick={() => hendalCheckQuize(option)}
                            key={index}>
                            {option}
                            <Toaster
                                reverseOrder={false}
                            />
                        </button>)
                }
            </div>
        </div>
    );
};


export default Quize;