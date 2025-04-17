import {  useReducer, useState } from 'react';

    function reducer(state: {currValue: number, step:number} , action:string){

        switch(action){
            case "Increment":
            return {...state, currValue: state.currValue + state.step}
            break;
            case "Decrement":
            return {...state, currValue: state.currValue - state.step }
            break;
            case "Reset":
            return {...state, currValue: state.currValue = 0}
            break;
            default:
            console.log("Error unexpected action")
        }

        return state;
    }

export const CounterComponent = () => {


    // useEffect(Check if there is any local storage data and if there is update the state)

    const [state, dispatch] = useReducer(reducer, {currValue:0, step:1})
    const [warning, setWarning] = useState<string>('');

    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        const action = e.currentTarget.textContent;
        if(action == null) return; 
        if(action == "Increment" && (state.currValue + state.step) >100){
            setWarning("Max")
            return
        } else if(action == "Decrement" && (state.currValue - state.step)<0){
            setWarning("Min")
            return
        } else {
            setWarning("")
        }

            dispatch(action)
    }
    return(
        <>
        <div>Hello world!</div>
        <button onClick={handleClick}>Increment</button> 
        {warning == "Max" && <div style={{color:'red'}}>Maximum is 100!</div>}
        <button onClick={handleClick}>Decrement</button>
        {warning == "Min" && <div style={{color: 'red'}}>Minimum is 0!</div>}
        <button onClick={handleClick}>Reset</button>
       <div>Current value: {state.currValue}</div> 
        
        
        </>
    )
}


