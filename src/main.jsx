import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import Language from './context/Language'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Language>
      <App />
    </Language>
  </BrowserRouter>
)
