import { useState} from 'react';


function CounterAppV2 (){
let [ value, setValue]=useState<number>(0);
let [ step , setStep ] = useState<number>(1);



function manage(e: React.MouseEvent<HTMLButtonElement>){
    const buttonText:string | null = e.currentTarget.textContent

    if(buttonText == null) return; 

    switch (buttonText){
        case "Increment":
            setValue(value+step);
            break;
        case "Decrement":
            setValue(value-step);
            break;
        case "Double":
            setValue(value * 2)
            break;
        case "Reset":
            setValue(0)
            break;
        default: 
            console.log("Error")
    }
}

return(
    <>
    <button onClick={manage}>Increment</button>  
    <button onClick={manage}>Decrement</button>
    <button onClick={manage}>Double</button>
    <button onClick={manage}>Reset</button>   
    <div>Value: {value}</div>
    </>
)


}


export default CounterAppV2; 