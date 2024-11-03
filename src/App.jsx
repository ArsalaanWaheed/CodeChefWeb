
import './App.css'
import { Button } from './components/ui/button'

import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./Home.jsx"
import { ImageBox } from './ImageBox'


function App() {
  

  return (
    <BrowserRouter>
  <Routes>
<Route path="/home" element={<Home/>}/>
<Route path="/leads" element={ <ImageBox title="Leads" members={["jauwad","maimoona"]}/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App
