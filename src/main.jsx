import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { FilterProvider } from './context/FilterContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <FilterProvider>
        <App />
      </FilterProvider>
    </HashRouter>
  </React.StrictMode>
)