// import React from 'react';
import './Calculator.css'
import { add, devide } from '../utilities/utilities';

const Calculator = () => {
    const first = 50;
    const second = 5;
    const result = add(first,second);
    const devided = devide(first,second);

    return (
        <div>
            <h1>show addtion: {result}</h1>
            <h1>show devide : {devided}</h1>
            
        </div>
    );
};

export default Calculator;