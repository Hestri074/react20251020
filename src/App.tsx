// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css'

import ProtectedRoute from './routes/ProtectedRoute';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function App() {
  return (
  <BrowserRouter>
    <nav style={{ marginTop:"20px" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
    </nav>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>
        <Route path='*' element={<h2>Halaman yang dicari tidak ada</h2>}></Route>
    </Routes>
  </BrowserRouter>
  );
}


export default App
