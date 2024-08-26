import{Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Estfacial from './pages/Estfacial.jsx'
import './App.css'
import Rejufacial from './pages/Rejufacial.jsx'
import Estcorp from './pages/Estcorp.jsx'
import Depilaser from './pages/Depilaser.jsx'
import Clinica from './pages/Clinica'


function App() {


  return (
    
     <Routes>
     <Route  index element ={<Home/>} />
     <Route path='/home' element={<Home />} />
     <Route path='/esteticafacial' element={<Estfacial/>} />
     <Route path='/rejuvenescimentofacial' element={<Rejufacial/>} />
     <Route path='/esteticaporporal' element={<Estcorp/>} />
     <Route path='/depilaser' element={<Depilaser/>} />
      <Route path='/clinica' element={<Clinica/>} />
     </Routes>
     
    
  )
}

export default App
