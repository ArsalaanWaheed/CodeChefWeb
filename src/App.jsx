import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { AppSidebar } from './AppSidebar'
import { Nav } from './navbar/nav'
import { Layout } from './layout'
import { AboutUs, WhatWeDo } from './AboutUs'
import { HorizontalScroll, ImageBox } from './ImageBox'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout className="h-2">
         <Nav/>
         </Layout>
         <AboutUs/>
         <WhatWeDo/>
        <ImageBox title="Leads" members={["jauwad","maimoona"]}/>
         <ImageBox title="Core Team" members={["Arsalaan","Urjit", "Imtenan"]}/>
      <Button className="text-[whitesmoke]">Click Me</Button>
     
    
  
    </>
  )
}

export default App
