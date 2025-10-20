import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Partner from './pages/Partner'

function RequireAuth({ children }) {
  const token = localStorage.getItem('ppd_token')
  return token ? children : <Navigate to="/" replace />
}

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
      <Route path="/partner/:id" element={<RequireAuth><Partner /></RequireAuth>} />
    </Routes>
  )
}
