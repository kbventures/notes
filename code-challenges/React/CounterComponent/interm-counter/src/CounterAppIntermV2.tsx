import { useReducer, useEffect } from 'react';


export function CounterAppIntermV2 () {
    interface stateShape {
        value: number,
        step: number, 
        error: string,
    }

        const [ state, dispatch] = useReducer(reducer,{value:0, step:1, error:""})

        useEffect(()=>{
            const tempValue = localStorage.getItem('value');
            const tempStep = localStorage.getItem('step');
            const tempErr = localStorage.getItem('error');
            
            if(tempValue){
                dispatch({type: "SET_VALUE", payload: Number(tempValue)})
            } else {
                dispatch({type: "SET_VALUE", payload: 0})

            }

            if(tempStep){
                dispatch({type: "SET_STEP", payload: Number(tempStep)})
            } else {
                dispatch({type: "SET_STEP", payload: 1})

            }
            if(tempErr){
                dispatch({type: "ERROR", payload: tempErr})
            } else {
                dispatch({type: "ERROR", payload: ""})
            }
        },[])


    function reducer(state:stateShape, action: { type: string, payload?: number | string } ): stateShape{
        if(action.type == "Decrement") {
            const currVal = state.value - state.step; 
            if(currVal < 0){
                localStorage.setItem('error', "Must be greater than 0!")
                return {...state, error: "Must be greater thahn 0!"}
            }
            localStorage.setItem('error', "")
            localStorage.setItem('value',String(state.value - state.step))
            return {...state, value: currVal, error:""};
        }
        if(action.type =="Increment") {
            const currVal = state.value + state.step; 
            if(currVal > 5)
            {
                localStorage.setItem('error', "Must be lower than 5!")
                return {...state, error: "Must be lower than 5!"}
            }
            localStorage.setItem('error', "")
            localStorage.setItem('value', String(state.value + state.step))
            return {...state, value: currVal, error: ""}; 
        }

        if(action.type =="Reset") {
            localStorage.setItem('value', "0")
            localStorage.setItem('step', '1')
            return {...state, value: 0 , step: 1, error:""}; 
        }

        if(action.type == "ERROR"){
            localStorage.setItem('error', String(action.payload))
            return {...state, error: String(action.payload)}
        }

        if(action.type == "SET_VALUE"){
            return {...state, value: action.payload} as stateShape
        }
        if(action.type == "SET_STEP"){
            return {...state, step: action.payload} as stateShape
        }

        return state
    }
    
    return (
       <>
       <div>Hello World!</div>
       <button onClick={()=>dispatch({type:"Decrement"})}>Decrement</button>
       <button onClick={()=>dispatch({type:"Increment"})}>Increment</button>
       <button onClick={()=>dispatch({type: "Reset"})}>Reset</button>
        {}
       <div>Value: {state.value}</div>
       { state.error !== "" && <div>Error: {state.error}</div>}
       </> 
    )
}