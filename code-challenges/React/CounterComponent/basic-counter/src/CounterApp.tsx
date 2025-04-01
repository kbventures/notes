import { JSX, useState } from 'react'; 

function CounterApp (): JSX.Element{

    let [value, setValue] = useState<number>(0)
    let [step, setStep] = useState<number>(1)




    function counter(e: React.MouseEvent<HTMLButtonElement>) {
        switch (e.currentTarget.textContent) {
          case "Increment":
            setValue(value + step);
            break;
          case "Decrement":
            setValue(value - step);
            break;
          case "Double Value":
            setValue(value * 2);
            break;
          default:
            setValue(0);
        }
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

