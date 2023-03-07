import React from 'react';

function addNumbers(x: number, y: number): number {
    return x+y
}

const result: number = addNumbers(2, 3)

const MathExample = () => {
    return <>{result}</>
}

export default MathExample
