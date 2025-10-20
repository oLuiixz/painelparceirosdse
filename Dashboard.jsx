import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import partnersData from '../data/partners.json'

export default function Dashboard(){
  const [partners, setPartners] = useState(partnersData)
  const user = JSON.parse(localStorage.getItem('ppd_user')||'{}')

  function logout(){
    localStorage.removeItem('ppd_token')
    localStorage.removeItem('ppd_user')
    window.location.href = '/'
  }

  return (
    <div>
      <header className="topbar">
        <div>Painel Parceiros DSE</div>
        <div>
          <span className="muted">Olá, {user.email || 'Usuário'}</span>
          <button onClick={logout} className="ghost">Sair</button>
        </div>
      </header>
      <main className="container">
        <section className="grid">
          {partners.map(p=>(
            <article key={p.id} className="card partner">
              <div className="head">
                <h3>{p.name}</h3>
                <small>{p.email}</small>
              </div>
              <p className="muted">Status: {p.status}</p>
              <div className="actions">
                <Link to={'/partner/'+p.id}><button>Ver</button></Link>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  )
}
