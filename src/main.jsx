import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Wpp from './components/Wpp'
import './index.css'
import './assets/fonts/font.css'
import ScrollToTop from './components/ScrollToTop';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <ScrollToTop/>
    <Header/>
    <App />
    <Footer/>
    <Wpp/>  
    </BrowserRouter>

  </StrictMode>
)
