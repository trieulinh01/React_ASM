
import ReactDOM from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App'
import ProductContextProvider from "./contexts/ProductContextProvider";

const root=document.getElementById('root')!
ReactDOM.createRoot(root).render(
  <ProductContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ProductContextProvider>
)
