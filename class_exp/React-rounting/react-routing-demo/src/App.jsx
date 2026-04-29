import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Conact from './components/conact'
import{BrowserRouter,Router} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
   

    <Navbar/>
    <Routers>
      <route path ="/" element ={<Home/>}/>
      <route path ="/About" element ={<About/>}/>
      <route path ="/conact" element ={<Conact/>}/>
    </Routers>
    </BrowserRouter>
    
   
  )
}

export default App;
