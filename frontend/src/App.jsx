import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Verify from './pages/Verify'
import MyOrders from './pages/MyOrders'
import LoginPopup from './components/LoginPopup'


const App = () => {

  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}

      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/order' element={<PlaceOrder />}></Route>
          <Route path='/verify' element={<Verify />}></Route>
          <Route path='/myorders' element={<MyOrders />}></Route>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App