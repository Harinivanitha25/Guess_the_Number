import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className="body">
   <Home/>
   </div>
  </React.StrictMode>
)
