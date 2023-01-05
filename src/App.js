import React from 'react'
import Contact from './components/Contact'
import About from './components/About'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Works from './components/Works'
import Skills from './components/Skills'

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
