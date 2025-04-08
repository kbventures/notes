
import { useState } from 'react';

interface CounterPropsInterface {
    initialValue?: number,
    step?: number, 
}

export function CounterAppV4({CounterProps}:{CounterProps?: CounterPropsInterface}){
// let {initialValue, step } = CounterProps; 


// initialValue = initialValue ?? 0;
// step = step ?? 1; 

    const { initialValue = 0, step = 1 } = CounterProps || {}; // Default values are set here



let [iV, setInitialValue] = useState(initialValue)
let [ s, setInitialStep] = useState(initialValue)

function manage(e: React.MouseEvent<HTMLButtonElement>){
    let buttonText = e.currentTarget.textContent;

    switch(buttonText){
        case "Increment":
            setInitialValue(iV + step);
            break
        case "Decrement":
            setInitialValue(iV - step);
            break;
        case "Reset":
            setInitialValue(0)
            break;
        default:
            console.log("default");
    }
}

return (
    <>
    <button onClick={manage}>Initial Value: {iV}</button>
    <button onClick={manage}>Increment</button>
    <button onClick={manage}>Decrement</button>
    <button onClick={manage}>Reset</button>
    </>
)

}