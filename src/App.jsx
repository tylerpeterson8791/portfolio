import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import "/node_modules/bootstrap/dist/css/bootstrap.min.css"
import {Home, Portfolio, Contact, Resume} from"./pages"



function App() {
  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Home />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
