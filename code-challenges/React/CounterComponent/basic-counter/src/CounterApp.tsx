import { JSX, useState } from 'react'; 

function CounterApp (): JSX.Element{

    let [value, setValue] = useState<number>(0)
    let [step, setStep] = useState<number>(1)

    function increment(){
        let temp = value + step; 
        setValue(temp)
    }

    function decrement(){
        let temp = value - step;
        setValue(temp)
    }

    function double(){
        let temp = value * 2;
        setValue(temp);
    }

    function reset(){
        setValue(0)
    }

    function counter(value: string):void{

    }

    
    return(
        <>
        <div>
            <h1>Current Value: {value}</h1>
            <button onClick={counter}>Increment</button>
            <button onClick={counter}>Decrement</button>
            <button onClick={counter}>Double Value</button>
            <button onClick={counter}>Reset Counter</button>
        </div>
        </>
    )
}

export default CounterApp; 




// import { JSX, useState } from 'react'; 

// function CounterApp (): JSX.Element{

//     let [value, setValue] = useState<number>(0)
//     let [step, setStep] = useState<number>(1)

//     function increment(){
//         let temp = value + step; 
//         setValue(temp)
//     }

//     function decrement(){
//         let temp = value - step;
//         setValue(temp)
//     }

//     function double(){
//         let temp = value * 2;
//         setValue(temp);
//     }

//     function reset(){
//         setValue(0)
//     }

    
//     return(
//         <>
//         <div>
//             <h1>Current Value: {value}</h1>
//             <button onClick={increment}>Increment</button>
//             <button onClick={decrement}>Decrement</button>
//             <button onClick={double}>Double Value</button>
//             <button onClick={reset}>Reset Counter</button>
//         </div>
//         </>
//     )
// }

// export default CounterApp; 

