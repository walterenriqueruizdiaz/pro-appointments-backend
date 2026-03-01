import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProAppointments from './ProAppointments'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProAppointments />
  </StrictMode>,
)
