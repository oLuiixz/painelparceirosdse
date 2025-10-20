import React from 'react'
import { useParams, Link } from 'react-router-dom'
import partnersData from '../data/partners.json'

export default function Partner(){
  const { id } = useParams()
  const p = partnersData.find(x => x.id === id)
  if(!p) return <div className="container"><p>Parceiro não encontrado</p><Link to="/dashboard">Voltar</Link></div>

  return (
    <div>
      <header className="topbar">
        <div><Link to="/dashboard">← Voltar</Link></div>
        <div>Painel Parceiros DSE</div>
      </header>
      <main className="container">
        <div className="card">
          <h2>{p.name}</h2>
          <p><strong>Email:</strong> {p.email}</p>
          <p><strong>Status:</strong> {p.status}</p>
          <p><strong>Comissão:</strong> {p.commission}%</p>
          <h3>Histórico</h3>
          <ul>{p.history.map((h,i)=>(<li key={i}>{h}</li>))}</ul>
        </div>
      </main>
    </div>
  )
}
