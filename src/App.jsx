import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes } from 'react-router-dom'
import Header from './components/Header/Header'


function App() {
 

  return (
    <div className='app'>
       <Navbar/>
       <Header/>
       {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<Order/>}/>
         
       </Routes> */}
    </div>
  )
}

export default App
