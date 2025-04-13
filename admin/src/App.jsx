import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Add from './pages/Add'
import Orders from './pages/Orders'
import List from './pages/List'
import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

const App = () => {

  const url = "http://localhost:4000"

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/order" element={<Orders url={url} />} />
          <Route path="/list" element={<List url={url} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App