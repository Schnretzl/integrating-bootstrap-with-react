import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

// 1. Building a Comic Book Library with React Router
// Task 1: Install and Setup React Router
//     Initialize a new React project or build off of the Marvel Comics API comic project. Make sure to use the Marvel API and install the latest version of the React Router.
//     Set up React Router in your application.

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
