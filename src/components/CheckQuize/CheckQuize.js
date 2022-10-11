import React from 'react';

const CheckQuize = ({option, hendalCheckQuize}) => {
    return (
        <div>
            <button onClick={() => hendalCheckQuize(option)}>{option}</button>
        </div>
    );
};

export default CheckQuize;