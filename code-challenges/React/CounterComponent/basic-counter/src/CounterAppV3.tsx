import { useState } from 'react';


interface Props{
    initialValue?: number,
    initialStep?:number,

}

export function CounterAppV3({initialValue =1, initialStep =1}: Props){
    let [value, setValue] = useState<number>(initialValue)
    let [step, setStep] = useState<number>(initialStep);




function manage(e: React.MouseEvent<HTMLElement>){
    let currentTargetText: string | null = e.currentTarget.textContent;

    switch(currentTargetText){
        case "Increment":
        setValue(value + step);
        break;
        case "Decrement":
        setValue(value - step);
        break;
        case "Double":
        setValue(value * 2);
        break;
        case "Reset":
        setValue(0);
        break;
        default:
        throw new Error('Unexpected manage result!')
    }
}


    return(
        <>
        <button onClick={manage}>Increment</button>
        <button onClick={manage}>Decrement</button>
       <button onClick={manage}>Double</button> 
        <button onClick={manage}>Reset</button>
        <div>Current value: {value}</div>
        </>
    )
}
