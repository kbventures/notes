import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import CounterAppV1 from './CounterAppV1.tsx'
// import CounterAppV2 from './CounterAppV2.tsx'
// import {CounterAppV3} from './CounterAppV3.tsx'
// import {IntermediateAcounterAppV1} from './CounterAppV3.tsx';
import { CounterAppV4 } from './CounterAppV4.tsx';
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    <CounterAppV4/>
  </StrictMode>,
)
