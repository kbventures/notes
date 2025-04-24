import { useReducer } from 'react';




export function CounterAppIntermV2 () {
    interface stateShape {
        value: number,
        step: number, 
    }

    function initLocalStorage(initArg:stateShape):stateShape{
        let localStorageValue: string | null = localStorage.getItem('value');
        let localStorageStep:string | null = localStorage.getItem('step');

        return {
            value: Number(localStorageValue) || initArg.value,
            step: Number(localStorageStep) || initArg.step
        }

    }

    function reducer(state:stateShape, action: { type: string; } ): stateShape{
        if(action.type == "Decrement") return {...state, value: state.value - state.step};
        if(action.type =="Increment") return {...state, value: state.value + state.step}; 

        return state
    }

    function handleClick(e: React.MouseEvent<HTMLButtonElement>){
        let temp = e.currentTarget.textContent;
        if(temp == null) return 
        return dispatch({type:temp}); 
    }

    const [ state, dispatch] = useReducer(reducer,{value:0,step:1}, initLocalStorage)
    return (
       <>
       <div>Hello World!</div>
       <button onClick={handleClick}>Decrement</button>
       <button onClick={handleClick}>Increment</button>
       <div>Value: {state.value}</div>
       </> 
    )
}