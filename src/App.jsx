import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'


function App() {
 

  return (
    <div className='app'>
       <Navbar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
         
       </Routes>
    </div>
  )
}

export default App
