import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.css'

if (window.Telegram && window.Telegram.WebApp) {
  window.Telegram.WebApp.ready()
  window.Telegram.WebApp.expand()

  window.Telegram.WebApp.BackButton.onClick(() => {
    console.log('Back button clicked')
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)