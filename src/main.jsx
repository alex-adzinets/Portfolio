import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{ 
      color: "#ffffff", 
      fontSize: 65, 
      fontFamily: "fantasy", 
      fontWeight: "bold", 
      width: "100%", 
      textAlign: "center", 
      alignSelf: "center", 
      alignContent:"center", 
      alignItems:"center" }}>This line is from main.jsx. There is no such line in main2.jsx!!!</div>
      
    <App />
  </React.StrictMode>,
)
