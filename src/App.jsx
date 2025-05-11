import './App.css'
import {bg1,bg2} from './assets/data.js'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './componenet/navbar.jsx'
import Home from './componenet/home/home.jsx'
import Aboutus from './componenet/aboutus/aboutus.jsx'
import Creatplan from './componenet/creatplan/creatplan.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <div className="relative z-50">
      <Navbar/>
      </div>
      <div className=' z-0'> 
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Aboutus/>}/>
        <Route path='/plan' element={<Creatplan/>}/>
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
