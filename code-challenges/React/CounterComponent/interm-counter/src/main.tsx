import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { CounterComponent } from './CounterAppIntermV0.tsx';
import { CounterAppIntermV1 } from './CounterAppIntermV1.tsx'; 
import { CounterAppIntermV2 } from './CounterAppIntermV2.tsx';
import './index.css'
// import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CounterComponent /> */}
    <CounterAppIntermV2 />
  </StrictMode>,
)
