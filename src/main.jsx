import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './market.css'
import App from './Market.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
