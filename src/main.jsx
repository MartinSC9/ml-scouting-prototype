import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import App from './App'
import './index.css'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, search, hash])
  return null
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/ml-scouting-stitch-react">
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
