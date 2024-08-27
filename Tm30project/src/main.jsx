import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import PageContextProvider from './Components/ContextApi/PageContextProvider'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PageContextProvider> */}

      <App />
    {/* </PageContextProvider> */}

  </React.StrictMode>,
)
