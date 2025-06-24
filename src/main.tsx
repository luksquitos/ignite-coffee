// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './globals.css'
import { App } from './components/app/app'

createRoot(document.getElementById('root')!).render(
  <App />
  // <StrictMode>
  // </StrictMode>,
)
