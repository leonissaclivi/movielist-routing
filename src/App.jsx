import React, { useEffect, useState } from 'react'
import Cards from './components/Cards'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './components/Header';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';
import Aboutpage from './components/Aboutpage';






function App() {

  return (
    <div>
      <BrowserRouter>
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/movielist-routing/" element={<Homepage/>}></Route>
        <Route path="Aboutpage" element={<Aboutpage/>}></Route>
      </Routes>

    </div>
    </BrowserRouter>
    </div>
  )
}

export default App