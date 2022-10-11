import React from 'react';
import './Quize.css'

const Quize = ({ ques }) => {
    // console.log(ques);
    const { question, options } = ques;
    return (
        <div className='Quize'>
            <h4>name :{question} </h4>
            <div className='quiz-container'>
                {
                    options.map(option => <ShowQuize option={option} region={option.region}></ShowQuize>)
                }
            </div>
        </div>
    );
};
function ShowQuize({ option }) {
    return (
        <div className='quiz-option'>
            <button>
                <ul>
                    <li className='circle'>
                        {option}
                    </li>
                </ul>
            </button>
        </div>
    )
}

export default Quize;