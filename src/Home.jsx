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
import { Footer } from './Footer'


export default function Home() {
  

  return (
    <div className="flex flex-col items-center">
      
         <Nav/>
         
         <AboutUs/>
         <WhatWeDo/>
        <ImageBox title="Leads" members={["jauwad","maimoona"]}/>
         <ImageBox title="Core Team" members={["Arsalaan","Urjit", "Imtenan","Sonali"]}/>
      
     
    <Footer/>
   
    </div>
  )
}