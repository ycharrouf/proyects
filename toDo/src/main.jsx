import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Tareas from './Tareas'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tareas/>
  </StrictMode>
)
