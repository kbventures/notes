import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CounterAppV1 from './CounterAppV1.tsx'
import CounterAppV2 from './CounterAppV2.tsx'
import {CounterAppV3} from './CounterAppV3.tsx'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <CounterAppV1 /> */}
    {/* <CounterAppV2 /> */}
    <CounterAppV3 initialValue={10} initialStep={2} />
  </StrictMode>,
)
