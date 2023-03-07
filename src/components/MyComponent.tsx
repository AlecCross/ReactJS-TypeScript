import React from 'react';
import MathExample from './MathExample';


type Props = {
    name: string;
    age: number;
    isStudent: boolean;
};

const MyComponent: React.FC<Props> = ({ name, age, isStudent }) => {
    return (
        <div>
            <MathExample />
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Is a student: {isStudent ? 'Yes' : 'No'}</p>
        </div>
    );
};

export default MyComponent;
