import { useState } from 'react'
import './App.css'
import { CounterAppIntermV2 } from './CounterAppIntermV2'
// import { CounterAppIntermV1 } from './CounterAppIntermV1'

function App() {
  const [counterComponentsCount, setCounterComponentsCount] = useState<number[]>([0])


  const addCounterComponent = () => {
    const temp = [...counterComponentsCount]
    temp.push(temp.length)
    setCounterComponentsCount(temp)
  }
  
  return (
    <>
    <button onClick={addCounterComponent}>Add Counter Component</button>      
    {counterComponentsCount.map((_,i) =>{
      return <CounterAppIntermV2 key={i}/>
    })}
    </>
  )
}

export default App
