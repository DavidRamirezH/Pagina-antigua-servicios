import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './Components/header/header'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </React.StrictMode>,
)
