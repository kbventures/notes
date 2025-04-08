import { useState } from 'react';


interface startingValues{
    initValue?: number,
    initStep?: number, 
}


const CounterAppV5 = ({initStep = 1, initValue =0}: startingValues) => {  
    // const iValue = initValues.initValue || 0;
    // const iStep = initValues.initStep || 1; 

    const [initialValue, setInitialValue] = useState<number>(initValue);
    const [ step, setInitialStep ] = useState<number>(initStep);

    const manage = (e: React.MouseEvent<HTMLButtonElement>) => {
        const currentTarget = e.currentTarget.textContent
        switch(currentTarget){
            case "Increment":
                setInitialValue(step + initialValue)
                break;
            case "Decrement":
                setInitialValue(initialValue - step)
                break;
            case "Reset":
                setInitialValue(0)
                break;
            default:
                console.log("WTF")
        }
    }
return (
    <>
    <div>Current Counter value: {initialValue}</div>
    <button onClick={manage}>Increment</button>
    <button onClick={manage}>Decrement</button>
    <button onClick={manage}>Reset</button>
    </>
)
}

export default CounterAppV5;
