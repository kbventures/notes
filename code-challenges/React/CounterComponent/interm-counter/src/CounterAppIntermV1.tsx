import { useState, useEffect} from 'react';


export const CounterAppIntermV1 = () => {

    const [value, setValue] = useState<number>(0);

    const [ step, setStep] = useState<number>(1)

    const [error, setError] = useState<string> ('')

    useEffect(()=>{
        const initV = Number(localStorage.getItem('value')) || 0;
        setValue(initV); 
    },[value])
    
    useEffect(()=>{
        const stepV = Number(localStorage.getItem('step')) || 1;
        setStep(stepV); 
    },[step])
        
    useEffect(()=>{
        const err = localStorage.getItem('error') || '';
        setError(err); 
    },[step])
    

    const handleIncrement =  (e: React.MouseEvent<HTMLButtonElement>) =>{
        const currVal = value + step;   
        
        if(currVal > 5){
            setError('Maximum is 5!'); 
            localStorage.setItem('error','Maximum is 5!')
             return; 
        }
        localStorage.setItem('error','')
        setError('')
        setValue(currVal)
        localStorage.setItem('value',String(currVal))
    }

    const handleDecrement = (e: React.MouseEvent<HTMLButtonElement>) =>{
        const currVal = value - step;
        
        if(currVal < 0){
            localStorage.setItem('error','Minimum is 0!')
            setError('Minimum is 0!'); 
             return; 
        }
        localStorage.setItem('error','')
        setError('')
        
        localStorage.setItem('value',String(currVal))
        setValue(currVal)
    }

    const handleReset = (e: React.MouseEvent<HTMLButtonElement>)=>{
        setValue(0)
        setStep(1)
        setError('')
        localStorage.setItem('value', '')
        localStorage.setItem('step','')
        localStorage.setItem('error','')
    }

    return (
        <>
        <button onClick={handleIncrement}>Increment</button> 
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <div>Current: {value}</div>
        { error && <div>{error}</div>}
        </>
    )
}


