import React from 'react';
import './Quize.css';
import toast, { Toaster } from 'react-hot-toast';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quize = ({ ques }) => {
    const { question, options, correctAnswer } = ques;
    const handleShowCorrectAns =() =>{
        toast.success(correctAnswer)
    }
    const handleCheckQuize = (option) => {
        if (correctAnswer === option) {
            toast.success('Answer Correct')
        }
        else {
            toast.error('Answer false')
        }
    }
    return (
        <div className='Quize'>
            <div className='quize-name'>
                <h4 className='text-lg font-semibold'>Quiz :{question.slice(3, -4)} </h4>
                <button onClick={handleShowCorrectAns}><EyeIcon className="h-6 w-6 text-blue-500" /></button>
            </div>
            <div className='quiz-container'>
                {
                    options.map((option, index) =>
                        <button onClick={() => handleCheckQuize(option)}
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