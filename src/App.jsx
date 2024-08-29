import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Estfacial from './pages/Estfacial.jsx'
import './App.css'
import Rejufacial from './pages/Rejufacial.jsx'
import Clinica from './pages/Clinica'


function App() {


  return (
    
     <Routes>
   
     <Route  index element ={<Home/>} />
     <Route path='/home' element={<Home />} />
     <Route path='/esteticafacial' element={<Estfacial/>} />
     <Route path='/rejuvenescimentofacial' element={<Rejufacial/>} />
     
     
      <Route path='/clinica' element={<Clinica/>} />
     </Routes>
     
    
  )
}

export default App
