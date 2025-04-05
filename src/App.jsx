import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/order' element={<PlaceOrder />}></Route>
      </Routes>
    </div>
  )
}

export default App