import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  function handleSubmit(e){
    e.preventDefault()
    localStorage.setItem('ppd_token', 'demo-token')
    localStorage.setItem('ppd_user', JSON.stringify({email}))
    nav('/dashboard')
  }

  return (
    <div className="center">
      <div className="card">
        <h1>Painel Parceiros DSE</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input value={email} onChange={(e)=>setEmail(e.target.value)} required />
          <label>Senha</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
          <button className="primary" type="submit">Entrar</button>
        </form>
        <p className="muted">Credenciais demo: qualquer email / senha</p>
      </div>
    </div>
  )
}
