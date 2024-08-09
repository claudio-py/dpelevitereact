import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Wpp from './components/Wpp'

import './index.css'
import './assets/fonts/font.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
    <Wpp/>  
  </StrictMode>
)
