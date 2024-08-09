import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Serviceum from './pages/Serviceum.jsx'
import './App.css'

function App() {


  return (
    
     <BrowserRouter>
     <Routes>
     <Route  index element ={<Home/>} />
     <Route path='/home' element={<Home />} />
     <Route path='/serviceum' element={<Serviceum />} />

     </Routes>
     </BrowserRouter> 
    
  )
}

export default App
